import React from "react";
import Nav from "./Nav/nav";
import Main from "./Nav/Main/main";
import Header from "../Header/header";
import Message from "./message/mesage";
import {BrowserRouter, Routes,Route} from "react-router-dom"

function Sidebar(){
    return(
<BrowserRouter>
        <div className="sidebar">
         <Nav/>
     <Routes>
    <Route path='/dialog*' element={<Message Messages={[
        {id:"1",message:" Hi my name is Edik i am frontend developerand this is my first react page"},
        {id:"2",message:" Hi my name is Edik i am frontend developerand this is my first react page"},
        {id:"3",message:" Hi my name is Edik i am frontend developerand this is my first react page"},
        {id:"4",message:" Hi my name is Edik i am frontend developerand this is my first react page"},
        {id:"5",message:" Hi my name is Edik i am frontend developerand this is my first react page"}
    ]} Dialogs={[
            {name:"Erik",id:"1"},
            {name:"Edik",id:"2"},
            {name:"Davo",id:"3"},
            {name:"Rubo",id:"4"},
            {name:"Edo",id:"5"}
        ]
    }/>}/>
    <Route path='/home' element={<Main/>}/>
    </Routes>
     </div>
    </BrowserRouter>
    );
}
export default Sidebar