import SubLayout from '@/components/SubLayout';
import { fetchSearchResults } from '@/api';

export default function Search({ countries }) {
  return (
    <div>
      {countries.map((country) => (
        <div key={country.code}>{country.commonName}</div>
      ))}
    </div>
  );
}

Search.Layout = SubLayout;

export const getServerSideProps = async (context) => {
  // 1. 검색 결과 불러오기 (API 호출)
  // 2. Props로 리턴

  const { q } = context.query;

  let countries = [];
  if (q) {
    countries = await fetchSearchResults(q);
  }

  return {
    props: {
      countries,
    },
  };
};
