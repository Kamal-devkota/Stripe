import React from "react";
import { useGlobalContext } from "./context";
import AppProvider from "./context";
export default function SubMenu(){
const {submenuOpen,link,coordinates,setSubMenuOpen}=useGlobalContext();
const {centre,bottom}= coordinates;
const ref=React.useRef();
React.useEffect(function(){
  ref.current.style.top=`${bottom}px`;
  ref.current.style.left=`${centre}px`;
  console.log(coordinates);

  
},[link]) /////DO THIS AS WE HOVER OVER PRODUCT \S,DEVELOPERS WE CHANGE TOP,LEFT VALUSE SO RENDER IT ONLY VALUE CHANGE

    return(
          <div className="menu" >
         <div className={`${submenuOpen ? "submenu" : "submenu display-submenu"}`  }   ref={ref}>
        {link.map((item,index)=>{
            const {links,page}=item;
           return <div className="list-div" key={index}>
              <h5>{page}</h5>
           
              {links.map((items,index)=>{
 return  <ul key={index}>
    <li>{items.label}</li>
  </ul>
})}

           </div>
          
        }) 
}
         </div>

        </div >
        
        
    )
}