import React, { useState } from "react";

export default function TextForm(props) {

    const handleUpClick =()=>{
        // console.log("uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange =(event)=>{
        // console.log("handleOnChange");
        setText(event.target.value);
    }
  const [text, setText] = useState("Enter text here");
//   text = "enter here";//wrong way to change the state 
//   setText("new text");//correct way
  return (
    <>
      <h1>{props.heading} </h1>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label"></label>
        <textarea className="form-control"  onChange={handleOnChange} id="myBox" rows="8" value={text}/>
        <button className="btn btn-primary" onClick={handleUpClick}>ConvertToUpperCase</button>
      </div>
    </>
  );
}
