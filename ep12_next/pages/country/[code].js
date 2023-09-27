import { useRouter } from 'next/router';
import SubLayout from '@/components/SubLayout';
import { fetchCountry } from '@/api';

export default function Country({ country }) {
  // 클라이언트 측에서 URL Parameter 이용할 경우
  const router = useRouter();
  const { code } = router.query;

  // 데이터(props)가 없는 상태의 페이지 -> fallback 상태
  if (router.isFallback) {
    return <div>Loading ...</div>;
  }

  /**
   * 아래와 같은 상황 방지
   *
   * 브라우저 콘솔 : GET http://localhost:3000/country/12345 500 (Internal Server Error)
   * 터미널 : TypeError: Cannot read properties of null (reading 'commonName')
   */
  if (!country) {
    return <div>존재하지 않는 국가입니다</div>;
  }

  return (
    <div>
      {country.commonName} {country.officialName}
    </div>
  );
}

Country.Layout = SubLayout;

// for dynamic SSG Pages
export const getStaticPaths = async () => {
  return {
    paths: [{ params: { code: 'ABW' } }, { params: { code: 'KOR' } }],
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  // 서버 측에서 URL Parameter 이용할 경우
  const { code } = context.params;

  let country = null;
  if (code) {
    country = await fetchCountry(code);
  }

  console.log(`${code} 페이지 생성!`);

  // revalidate 속성 추가 -> 3초 주기로 이 페이지를 다시 생성한다(ISR 방식)
  // 즉, 3초 주기로 getStaticProps 함수가 다시 실행됨(계속 요청을 보내고 있을 경우)
  return {
    props: {
      country,
    },
    revalidate: 3,
  };
};
