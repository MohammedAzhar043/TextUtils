import { useState } from "react";
import "./Appa.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {

 const [mode,setMode]= useState('light');
 //whether the dark mode is enable or not
 
 const toggleMode =()=>{
    
  if(mode==='dark'){
    setMode('light');
    document.body.style.backgroundColor='white';
  }
  else{
    setMode('dark');
    document.body.style.backgroundColor='grey';
  }

 }
 
 return (
    <>
      <Navbar title="TextUtiles" about="about" mode={mode} toggleMode={toggleMode}/>
      {/* <Navbar/> */}
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below"/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
