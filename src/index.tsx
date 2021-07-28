import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import App from './App';
import { Suspense } from 'react';


ReactDOM.render(
 <Suspense fallback={ <div>Loadin...</div> }>
 
   <App />
 </Suspense>,
  
  document.getElementById('root')
);

