import '@/styles/globals.css';
import Layout from '@/components/Layout';

export default function App({ Component, pageProps }) {
  const EmptyLayout = ({ children }) => {
    return <>{children}</>;
  };
  const SubLayout = Component.Layout || EmptyLayout;

  // search 페이지를 방문할 경우, Layout프로퍼티가 추가되어지고 값으로 SubLayout 컴포넌트가 저장되어 있음
  // console.log(Component.Layout);

  return (
    <Layout>
      <SubLayout>
        <Component {...pageProps} />
      </SubLayout>
    </Layout>
  );
}
