// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/index';
import LayoutSquare from './pages/layoutSquare';
import ObjectManage from './pages/objectManage';
import RelationManage from './pages/relationManage';
import IconsManage from './pages/iconsManage';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* 首页路由 */}
        <Route path="/" element={<LayoutSquare />} />
        <Route path="/home" element={<LayoutSquare />} />
        {/* 其他页面路由 */}
        <Route path="/home/layoutSquare" element={<LayoutSquare />} />
        <Route path="/systemSetting/objectManage" element={<ObjectManage />} />
        <Route path="/systemSetting/relationManage" element={<RelationManage />} />
        <Route path="/systemSetting/iconsManage" element={<IconsManage />} />
      </Routes>
    </Router>
  );
};

export default App;
