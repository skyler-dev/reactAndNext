import SubLayout from '@/components/SubLayout';
import { fetchSearchResults } from '@/api';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Searchbar from '@/components/Searchbar';
import CountryList from '@/components/CountryList';
import Head from 'next/head';

// 기본적으로 SSG로 동작
export default function Search() {
  const router = useRouter();
  const { q } = router.query;

  const [countries, setCountries] = useState([]);

  const setData = async () => {
    // 클라이언트 측에서 API호출해서 불러오기(궅이 서버측에서 렌더링할 필요까지는 없는 데이터)
    const data = await fetchSearchResults(q);
    setCountries(data);
  };

  useEffect(() => {
    if (q) {
      setData();
    }
  }, [q]);
  // 해당 페이지에 빈 div만 렌더링 되었다가(SSG 방식), API가 완료되는 시점에 나중에 클라이언트 측에서 (CSR 방식으로) 실제 데이터가 채워져 추가로 렌더링 된다
  return (
    <>
      <Head>
        <title>NARAS 검색 결과</title>
        <meta property='og:image' content='/thumbnail.png' />
        <meta property='og:title' content='NARAS 검색 결과' />
        <meta
          property='og:description'
          content='전 세계 국가들의 정보를 확인해보세요'
        />
      </Head>
      <Searchbar q={q} />
      <CountryList countries={countries} />
    </>
  );
}

Search.Layout = SubLayout;
