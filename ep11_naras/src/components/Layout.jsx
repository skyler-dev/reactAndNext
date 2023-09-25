import style from './Layout.module.css';

// 전체 모든 페이지에 나타나야 하는 컴포넌트, 스타일
export default function Layout({ children }) {
  return (
    <div className='Layout'>
      <header className={style.header}>
        <div>🌏 NARAS</div>
      </header>
      <main className={style.main}>{children}</main>
    </div>
  );
}
