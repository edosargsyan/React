import React from "react";
import { NavLink } from "react-router-dom";
import Main from "./Main/main";
function Nav(){
  return(
    <nav>
    <ul>
    <li><NavLink to="/home">Profile</NavLink></li>
    <li><NavLink to="/dialog">Dialogs</NavLink></li>
    <li><NavLink to="/Contact">Contact</NavLink></li>
    <li><a>Service</a></li>
  </ul>
  </nav>
  )
}


export default Nav;
