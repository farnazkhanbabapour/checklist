import React from "react";
import "./list.css";

const list =props=>(
    <ul>
     {
        props.items.map((item,index) =><li key={index}>{item}<span className="close">&times;</span></li>)
     }
     </ul>
);
 export default list;