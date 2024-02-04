// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/index';
import ServiceArchitecture from './pages/serviceArchitecture';
import KeyLinks from './pages/keyLinks';
import Diagrams from './pages/diagrams';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* 首页路由 */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/graph" element={<Diagrams />} />
        {/* 其他页面路由 */}
        <Route path="/home/serviceArchitecture" element={<ServiceArchitecture />} />
        <Route path="/linkManage/keyLinks" element={<KeyLinks />} />
      </Routes>
    </Router>
  );
};

export default App;
