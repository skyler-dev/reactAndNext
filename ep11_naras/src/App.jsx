import './App.css';
import { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Country from './pages/Country';
import NotFound from './pages/NotFound';

function App() {
  const nav = useNavigate();
  const onClick = () => {
    nav('/search');
  };

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/country' element={<Country />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/search'}>search</Link>
        <Link to={'/country'}>country</Link>
        {/* <a href={'/'}>Home by a</a> */}
        <button onClick={onClick}>서치 페이지로 이동</button>
      </div>
    </>
  );
}

export default App;
