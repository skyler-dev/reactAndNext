import { useRouter } from 'next/router';
import SubLayout from '@/components/SubLayout';
import { fetchCountry } from '@/api';

export default function Country({ country }) {
  // 클라이언트 측에서 URL Parameter 이용할 경우
  const router = useRouter();
  const { code } = router.query;

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
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  // 서버 측에서 URL Parameter 이용할 경우
  const { code } = context.params;

  let country = null;
  if (code) {
    country = await fetchCountry(code);
  }

  return {
    props: {
      country,
    },
  };
};
