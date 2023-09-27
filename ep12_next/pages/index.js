import { useEffect } from 'react';
import { fetchCountries } from '@/api';
import Seachbar from '@/components/Searchbar';
import CountryList from '@/components/CountryList';

export default function Home({ countries }) {
  return (
    <>
      <Seachbar />
      <CountryList countries={countries} />
    </>
  );
}

// 이제 이 파일이 담당하는 페이지는 SSG 방식으로 동작하도록 설정되었다
export const getStaticProps = async () => {
  // API 호출 코드가 필요함
  const countries = await fetchCountries();
  // Next 개발 모드에서는 코드수정 결과가 바로 반영되도록 하기 위해 SSG 던 SSR 이던 모두 접속 요청을 보내면, 처음부터 다시 페이지를 생성하도록 동작한다
  console.log('countries 데이터 불러옴');

  return {
    props: {
      countries,
    },
  };
};
