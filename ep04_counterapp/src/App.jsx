import './App.css';
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  const onClickButton= (v) =>{
    setCounter((c)=>c+v)
  }
  return (
    <div className="App">
      <h1>Simple Counter App</h1>
      <section>
        <Viewer counter={counter}/>
      </section>
      <section>
        <Controller onClickButton={onClickButton}/>
      </section>
    </div>
  );
}

export default App;
