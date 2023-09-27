import style from './Layout.module.css';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const router = useRouter();

  const onClickHeader = () => {
    router.push('/');
  };

  return (
    <div className='Layout'>
      <header onClick={onClickHeader} className={style.header}>
        NARAS 🌎
      </header>
      <main className={style.main}>{children}</main>
    </div>
  );
}
