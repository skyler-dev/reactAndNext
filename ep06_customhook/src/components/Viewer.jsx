import useUpdate from '../hooks/useUpdate';

export default function Viewer({ counter }) {
  useUpdate(() => {
    console.log('Viewer 업데이트');
  });
  
  return (
    <div>
      <div>현재 카운트 : </div>
      <h1>{counter}</h1>
    </div>
  );
}
