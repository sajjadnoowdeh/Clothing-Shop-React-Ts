import React from 'react';
import {Route,Link,Switch,BrowserRouter as Router} from "react-router-dom"
import { NavbarDress ,NavbarBottom,Menu,Footer} from './components';
import { routers } from './routers/routers';
import "./App.scss"


function App() {

  return (
    <>

    <Router>
    <NavbarDress />
    <NavbarBottom />
    <Menu/>
       <Switch>
            {routers.map(({path,exact,Component},index)=>(
              <Route key={index} path={path} exact={exact} render={(props)=> <Component {...props}/>} />
            ))}
        </Switch>
         
      <Footer/>

    
    </Router>
   
      
 
     

    </>
  );
}

export default App;
