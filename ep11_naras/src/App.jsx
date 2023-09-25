import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Country from './pages/Country';
import NotFound from './pages/NotFound';

function App() {
  // 경로와 리액트 컴포넌트 맵핑
  // Routes 컴포넌트 : 현재 브라우저의 url(경로)와 일치하는 Route 컴포넌트를 찾아서, element로 설정되어 있는 컴포넌트 렌더링 함
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/search' element={<Search />} />
      <Route path='/country' element={<Country />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
