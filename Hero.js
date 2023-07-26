

import React from "react";
import AppProvider from "./context";
import { useGlobalContext } from "./context";
export default function Hero(){
    const {submenuOpen,setSubMenuOpen}=useGlobalContext();
    const handleSubMenu=()=>{
        return setSubMenuOpen(true);
    }
    return(
        <div className="hero" onMouseOver={handleSubMenu}>
            <div className="para">
                <h1>Financial infrastructure for the internetFin</h1>
                <p>Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.</p>
           <button className="hero-btn">Start now</button>
            </div>

        </div>
    )

}