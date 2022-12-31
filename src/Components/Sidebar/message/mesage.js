import React from "react";
import { NavLink } from "react-router-dom";

function DialogItem(prox){
  return(
    <div className="item">
       <NavLink to={prox.id}>{prox.name}</NavLink>
    </div>
  );
}
function MessageItem(props){
  return(
    <div className="message-box">
      {props.message}
     </div>
  );
}

let DialogElements = [
  {name:"Erik",id:"1"},
  {name:"Edik",id:"2"},
  {name:"Davo",id:"3"},
  {name:"Rubo",id:"4"},
  {name:"Edo",id:"5"},
]
// let DialogElements = DialogsData.map(item=><DialogElements name={item.name}/>)

function Message(prox){
    let Dialogitem = prox.Dialogs.map(item=><DialogItem name={item.name} id={item.id}/>)
    let Messageitem =  prox.Messages.map(item=><MessageItem message={item.message}/>)

    return(
        <div className="dialog">
             <div className="dialog-items">
                 {Dialogitem}
             </div>

             <div className="message">
                  {Messageitem}
             </div>
        </div>
    )
}

export default Message