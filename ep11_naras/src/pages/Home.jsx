import { useState, useEffect } from 'react';
import { fetchCountries } from '../api';

export default function Home() {
  const [countries, setCountries] = useState([]);

  const setInitData = async () => {
    const data = await fetchCountries();
    setCountries(data);
  };

  useEffect(() => {
    // setInitData 비동기 함수이므로 
    // countries는 처음에 []였다가 이후에 데이터가 채워진다
    setInitData();
  }, []);

  return <div>Home</div>;
}
