import {AiOutlineAlignCenter} from "react-icons/ai";
import {FaCcStripe} from "react-icons/fa";
import { useGlobalContext } from "./context";
import AppProvider from "./context";
export function Home (){
    const {toggleSidebar,toggleSubMenu,submenuOpen,setSubMenuOpen}=useGlobalContext();
    // const handleSubMenu=()=>{
    //     return setSubMenuOpen(!submenuOpen);
    // }
 
   
    return (
        <div className="home" >


             <nav>
                <FaCcStripe className="stripe" />
                <ul className="nav-list">
                    <li onMouseOver={(e)=>toggleSubMenu(e)}>Products</li>
                    <li onMouseOver={(e)=>toggleSubMenu(e)}>Developers</li>
                    <li onMouseOver={(e)=>toggleSubMenu(e)}>Company</li>
                </ul>
                <AiOutlineAlignCenter  className="ham" onClick={toggleSidebar}/>
                <button className="sign-btn">Sign in</button>
                </nav>

             </div>
    )
}