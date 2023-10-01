import style from './SubLayout.module.css';

export default function SubLayout({ children }) {
  return (
    <>
      {children}
      <footer className={style.footer}>@작성자</footer>
    </>
  );
}
