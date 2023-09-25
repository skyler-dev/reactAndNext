import { useState } from 'react';
import style from './Searchbar.module.css';
import { useNavigate } from 'react-router-dom';

export default function Seachbar() {
  const [search, setSearch] = useState('');
  const nav = useNavigate();

  const onChangeSeach = (e) => {
    setSearch(e.target.value);
  };

  const onClickSearch = () => {
    if (search !== '') {
      nav(`search?q=${search}`);
    }
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onClickSearch();
    }
  };
  return (
    <div className={style.container}>
      <input
        value={search}
        onChange={onChangeSeach}
        onKeyDown={onKeyDown}
        placeholder='검색어를 입력하세요...'
      />
      <button onClick={onClickSearch}>검색</button>
    </div>
  );
}
