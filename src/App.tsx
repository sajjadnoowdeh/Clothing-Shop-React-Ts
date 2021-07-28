import React from 'react';
import { NavbarDress ,NavbarBottom,Menu,Footer} from './components';
import HomePage from './pages/HomePage/HomePage';
// const HomePage = React.lazy(()=> import("./pages/HomePage/HomePage"))
import "./App.scss"


function App() {

  return (
    <>
    <NavbarDress />
    <NavbarBottom />
    <Menu/>
     
     <HomePage />
        
      <Footer/>
    </>
  );
}

export default App;
