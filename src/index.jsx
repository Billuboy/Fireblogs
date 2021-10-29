import './style.css';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import Authprovider from './hooks/useAuth';

function Index() {
  console.log(App);
  return (
    <Authprovider>
      <App />
    </Authprovider>
  );
}

ReactDOM.render(<Index />, document.querySelector('#root'));
