import React from 'react';
import ReactDOM from 'react-dom';
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import App from './App';
import { Suspense } from 'react';


ReactDOM.render(
 <Suspense fallback={<div className="spinner"><Spinner style={{fontSize:"34px"}} animation="border" variant="success" /> </div> }>
 
   <App />
 </Suspense>,
  
  document.getElementById('root')
);

