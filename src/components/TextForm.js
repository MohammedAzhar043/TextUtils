import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("uppercase was clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    // console.log("lower was clicked"+ text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log("handleOnChange");
    setText(event.target.value);
  };

  const handleLightTheam = () => {
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector("body").style.color = "black";
  };

  const handleDarkTheam = () => {
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("body").style.color = "white";
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
}
  // const handleCopy = () =>{
  //   document.getElementById('myBox');
  //   text.select();
  //   navigator.clipboard.writeText(text.value);
  // }


 

  const [text, setText] = useState("");
  //   text = "enter here";//wrong way to change the state
  //   setText("new text");//correct way
  return (
    <>
      <div className="container" style={{background:props.mode==='light'?'dark':'light'}}>
        <h1>{props.heading } </h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            className="form-control mb-1"
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            value={text}
            style={{background:props.mode==='light'?'grey':'dark',color:props.mode==='black'?'light':'dark'}}
          />
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>
            ConvertToUpperCase
          </button>
          <button className="btn btn-success mx-2" onClick={handleLowClick}>
            ConvertToLowerCase
          </button>
          <button className="btn btn-danger mx-2" onClick={handleClearClick}>
            Clear
          </button>
          <button className="btn btn-light mx-2" onClick={handleLightTheam}>
            Light
          </button>
          <button className="btn btn-dark mx-2" onClick={handleDarkTheam}>
            Dark
          </button>
          {/* <button className="btn btn-dark mx-2" onClick={handleCopy}>
            copy text
          </button> */}
          <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
  
        </div>
      </div>

      <div className="container my-3" style={{background:props.mode==='light'?'grey':'dark'}}>
        <h1>your text summary</h1>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"enter some thing in the text box to preview it"}</p>
      </div>
    </>
  );
}
