import style from './SubLayout.module.css';

export default function SubLayout({ children }) {
  return (
    <div className='SubLayout'>
      <div>{children}</div>
      <footer className={style.footer}>@작성자</footer>
    </div>
  );
}
