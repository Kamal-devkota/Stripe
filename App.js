import './App.css';
import { Sidebar } from './Sidebar';
import { useGlobalContext } from "./context";
import AppProvider from "./context";
import { Home } from './Home';
import React, { forwardRef } from 'react';
import Hero from './Hero';
import SubMenu from './Submenu';
function App() {
  const {sideBarOpen,state}=useGlobalContext();


  
  return (
   <div className={`${ sideBarOpen ? state : "" } `}>
    <Home/>
    <Sidebar />
    <Hero />
    <SubMenu />
    </div>
   
  );
}

export default App;