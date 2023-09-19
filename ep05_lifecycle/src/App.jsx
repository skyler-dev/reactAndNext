import './App.css';
import { useState, useEffect, useRef } from 'react';
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import Even from './components/Even';

function App() {
  const [counter, setCounter] = useState(0);
  const isMountRef = useRef(false);

  useEffect(() => {
    console.log('마운트');
  }, []);

  useEffect(() => {
    // 지금 마운트 단계를 거치지 않았다면
    if (!isMountRef.current) {
      isMountRef.current = true;
      return;
    }
    console.log('업데이트');
  });

  const onClickButton = (v) => {
    setCounter((c) => c + v);
  };
  return (
    <div className='App'>
      <h1>Simple Counter App</h1>
      <section>
        <Viewer counter={counter} />
        {counter % 2 === 0 && <Even />}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
