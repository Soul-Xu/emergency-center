// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // 导入 Provider 组件
import store from './redux/store'; // 假设这是你的 Redux store
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    {/* 使用 Provider 包裹你的应用程序，并传递 Redux 的 store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);