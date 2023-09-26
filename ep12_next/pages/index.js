import { useEffect } from 'react';
import { fetchCountries } from '@/api';

export default function Home({ countries }) {
  return (
    <div>
      {countries.map((country) => (
        <div key={country.code}>{country.commonName}</div>
      ))}
    </div>
  );
}
// 이제 이 파일이 담당하는 페이지는 SSR 방식으로 동작하도록 설정되었다
export const getServerSideProps = async () => {
  // API 호출 코드가 필요함
  const countries = await fetchCountries();

  return {
    props: {
      countries,
    },
  };
};
