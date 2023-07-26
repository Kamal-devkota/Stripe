import React from "react";
import { sublinks } from "./Data";

const AppContext=React.createContext();

export default function AppProvider ({children}){
  const [state,setState] =React.useState("");
const [sideBarOpen,setSideBarOpen]=React.useState(false);
const [submenuOpen,setSubMenuOpen]=React.useState(true);
const [coordinates,setCoordinates]=React.useState({centre:"",bottom:""})
const[link,setLink]=React.useState([]);
function toggleSidebar(){
  setSideBarOpen(!sideBarOpen)
     setState("body");
}

function toggleSubMenu(e){
    e.preventDefault();
 const list=e.target.textContent;
 const hoverItems=sublinks.find((item)=>(item.page==list))

 const bottom=e.target.getBoundingClientRect();
 console.log(bottom)
 const left=e.target.getBoundingClientRect().left;
 const right=e.target.getBoundingClientRect().right+10;
 const centre=(left + right)/2;

 setLink([hoverItems])

 setCoordinates((prev)=>{return {centre:centre,bottom:bottom}})
 setSubMenuOpen(false)
}
    return(
         <AppContext.Provider value={{sideBarOpen,toggleSidebar,sublinks,submenuOpen,setSubMenuOpen,toggleSubMenu,link,coordinates,state
         }}>
            {children}
         </AppContext.Provider>
    )
}


const useGlobalContext=()=>{
    return React.useContext(AppContext);
}

export {AppContext,AppProvider,useGlobalContext};



 