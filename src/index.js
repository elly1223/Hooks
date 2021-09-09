import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const useBeforeLeave = () => {
  const handle = () => {
    console.log('leaving');
  };
  useEffect(() => {
    document.addEventListener('mouseleave', handle);
    return () => document.removeEventListener('mouseleave', handle);
  }, []);
};

const App = () => {
  return (
    <div className='App'>
      <h1>Hello</h1>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
