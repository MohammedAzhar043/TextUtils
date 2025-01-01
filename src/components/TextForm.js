import React, { useState } from "react";

export default function TextForm(props) {

  
  const handleUpClick = () => {
    // console.log("uppercase was clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase", "success");
  };

  const handleLowClick = () => {
    // console.log("lower was clicked"+ text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("cleared all the texts", "success");
  };
  const handleOnChange = (event) => {
    // console.log("handleOnChange");
    setText(event.target.value);
  };

  const handleLightTheam = () => {
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector("body").style.color = "black";
    props.showAlert("theme changed to light", "success");
  };

  const handleDarkTheam = () => {
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("body").style.color = "white";
    props.showAlert("theme changed to dark", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("the extra spaces are removed", "success");
  };
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
      <div
        className="container"
        style={{ background: props.mode === "light" ? "dark" : "light" }}
      >
        <h1 className="m-2">
          {props.heading}
        </h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            className="form-control mb-1"
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            value={text}
            style={{
              background: props.mode === "black" ? "light" : "dark",
              color: props.mode === "black" ? "light" : "black",
            }}
          />
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2"  onClick={handleUpClick}>
            ConvertToUpperCase
          </button>
          <button disabled={text.length===0} className="btn btn-success mx-2 my-2" onClick={handleLowClick}>
            ConvertToLowerCase
          </button>
          <button  disabled={text.length===0} className="btn btn-danger mx-2 my-2" onClick={handleClearClick}>
            Clear
          </button>
          <button className="btn btn-light mx-2 my-2" onClick={handleLightTheam}>
            Light
          </button>
          <button className="btn btn-dark mx-2 my-2" onClick={handleDarkTheam}>
            Dark
          </button>
          {/* <button className="btn btn-dark mx-2 my-2" onClick={handleCopy}>
            copy text
          </button> */}
          <button  disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleExtraSpaces}>
            Remove extra spaces
          </button>
        </div>
      </div>

      <div
        className="container my-3"
        style={{ background: props.mode === "dark" ? "light" : "dark" }}
      >
        <h1 >your text summary</h1>
        <p>
          {text.split(" ").filter((element)=>{
            return element.length!==0
          }).length} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{
            return element.length!==0
          }).length} minutes to read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "nothing to preview"}
        </p>
      </div>
    </>
  );
}
