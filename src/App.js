// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/index';
import LayoutSquare from './pages/layoutSquare';
import KeyLinks from './pages/objectManage';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* 首页路由 */}
        <Route path="/" element={<LayoutSquare />} />
        <Route path="/home" element={<LayoutSquare />} />
        {/* 其他页面路由 */}
        <Route path="/home/layoutSquare" element={<LayoutSquare />} />
        <Route path="/systemSetting/objectManage" element={<KeyLinks />} />
      </Routes>
    </Router>
  );
};

export default App;
