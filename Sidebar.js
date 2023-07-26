import logo from './logo.svg';

import {AiOutlineClose} from "react-icons/ai";
import React from 'react';
import AppProvider, { AppContext } from './context';
export function Sidebar (){
   const {sideBarOpen,toggleSidebar,sublinks}=React.useContext(AppContext)
  
    return (
        <>
         <div className={`${sideBarOpen ?" sidebar show-sidebar ":" sidebar"}`}>
            <div className='sub-sidebar'>
            <div className="nav">
                <AiOutlineClose className='ham' onClick={toggleSidebar}/>
             </div>
            
           {sublinks.map((item,index)=>{
            console.log(item)
            const {links,page}=item;
          return  <div className='lists' key={index}>
            <h5>{page}</h5>
            <div className='each-list'>
            {links.map((link,index)=>{
               return <ul className='sub-list' key={index}>
               <li >{link.label}{link.icon }</li>
               </ul>
            })}
            </div>
         </div>

           }) 
}
             </div>
        </div>
                   
                   </>
    )
}