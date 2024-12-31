import { useState } from "react";
import "./Appa.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alerts from "./components/Alerts";

// import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState("light");
  //whether the dark mode is enable or not

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "sucess");
      document.title = "TextUtils - light Mode";

      // setInterval(()=>{
      //   document.title='textutil is emazing';
      // },2000);
      // setInterval(()=>{
      //   document.title='instal text tutils now';
      // },1000);
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("dark mode has been enabled", "sucess");
      document.title = "TextUtils - dark Mode";
    }
  };

  return (
    <>
      {/* <Router> */}
        <Navbar
          title="TextUtiles"
          about="about"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alerts alert={alert} />

        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route  exact path="/about" element={<About/>}/> */}

            {/* <Route */}
              {/* path="/"
              element={ */}
                <TextForm
                  heading="Enter the text to analyze below"
                  mode={mode}
                  showAlert={showAlert}
                />
              {/* } */}
            {/* />
          </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
