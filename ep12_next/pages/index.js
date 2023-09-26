import { useEffect } from 'react';

export default function Home({ name }) {
  // getServerSideProps 호출 후, 이 함수는 서버에서 한번은 호출 된다 -> web api 주의

  console.log('HOME'); // 서버,클라이언트 둘다

  useEffect(() => {
    console.log('HOME MOUNT');
  }, []); // 클라이언트에만 (브라우저에서 하이드레이션이 끝난 이후 마운트되어서 실행)

  return <div>Home Page{name}</div>;
}
// 이제 이 파일이 담당하는 페이지는 SSR 방식으로 동작하도록 설정되었다
export const getServerSideProps = async () => {
  // SSR을 위해 서버측에서 페이지 컴포넌트에게 전달할 데이터를 설정하는 함수
  // 오직 서버에서만 실행된다 -> web api 주의

  console.log('getServerSideProps Called');

  return {
    props: {
      name: 'KOREA',
    },
  };
};
