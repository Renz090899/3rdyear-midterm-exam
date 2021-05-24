import React from "react";

function Note(props) {

    return(

        <div className = "note">
            <h1 className="title">{props.title}</h1>
            <p className="desc">{props.desc}</p>
        </div>
    )  
}
export default Note;

   