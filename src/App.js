import { useState } from "react";
import "./Appa.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alerts from "./components/Alerts";

function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState("light");
  //whether the dark mode is enable or not


  const showAlert = (message,type) =>{
    setAlert({
      msg : message,
      type : type
    });
    setTimeout(()=>{
      setAlert(null);
    },3000);
  }

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled","sucess");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("dark mode has been enabled","sucess");
    }
  };

  return (
    <>
      <Navbar
        title="TextUtiles"
        about="about"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alerts alert={alert} />
      {/* <Navbar/> */}
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below"  mode={mode} showAlert={showAlert} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
