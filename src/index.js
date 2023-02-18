import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MoralisProvider } from "react-moralis";
import { BrowserRouter } from "react-router-dom";



ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId="Y7pbMyBy1LAQjLcBjCmP1xTwlnHcgpQs2fgPIeD9" 
    serverUrl="https://vxk3jhqkzj8r.usemoralis.com:2053/server">
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();