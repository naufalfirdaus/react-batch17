import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import storeToolkit from './features/storeToolkit';
import reportWebVitals from './reportWebVitals';

import {createBrowserHistory} from 'history'
import {Router} from 'react-router-dom'
import Routes from './Routes';

const browserHistory = createBrowserHistory()

browserHistory.listen(location =>{
setTimeout(()=>{
  if (location.action === 'POP') {
    return
  }
  window.scrollTo(0,0)
})
})

ReactDOM.render(
  
  <Provider store={storeToolkit}>
    <Router history={browserHistory}>
      <Routes />
    </Router>
  </Provider>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
