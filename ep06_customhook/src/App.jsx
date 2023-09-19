import './App.css';
import { useState, useEffect } from 'react';
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import Even from './components/Even';
import useUpdate from './hooks/useUpdate';
import useInput from './hooks/useInput';
function App() {
  const [counter, setCounter] = useState(0);
  const [text, handleChangeText] = useInput();

  useEffect(() => {
    console.log('마운트');
  }, []);

  useUpdate(() => {
    console.log('App 업데이트');
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
      <section>
        <input value={text} onChange={handleChangeText}/>
      </section>
    </div>
  );
}

export default App;
