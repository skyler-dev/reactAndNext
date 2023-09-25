import style from './Layout.module.css';
import { useNavigate } from 'react-router-dom';

// 전체 모든 페이지에 나타나야 하는 컴포넌트, 스타일
export default function Layout({ children }) {
  const nav = useNavigate();
  const onClickHeader = () => {
    nav(`/`);
  };

  return (
    <div>
      <header className={style.header} onClick={onClickHeader}>
        <div>🌏 NARAS</div>
      </header>
      <main className={style.main}>{children}</main>
    </div>
  );
}
