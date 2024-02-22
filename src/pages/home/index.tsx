import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomLayout from '../../layout/CustomLayout';

const Home = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/home/layoutSquare')
  }, [])

  return (
    <div>
      <CustomLayout>
        <h2>Home Page</h2>
        {/* 页面内容 */}
      </CustomLayout>
    </div>
  );
};

export default Home;