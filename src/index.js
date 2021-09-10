import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const useBeforeLeave = (onBefore) => {
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener('mouseleave', handle);
    return () => document.removeEventListener('mouseleave', handle);
  }, []);
};

const App = () => {
  const begForLife = () => console.log('Pls dont leave');
  useBeforeLeave(begForLife);
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
