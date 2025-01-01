import React, { useState } from "react";

export default function About(props) {


  const [btntext, setbtntext] = useState("enable light mode")

  // const [myStyle, setmyStyle] = useState({
  //   color: "white",
  //   backgroundColor: "black",
  //   border : "1px solid white"
  // });

  let myStyle = {
    color:props.mode ==='dark'?'white':'#042743',
    backgroundColor:props.mode ==='dark'?'#042743':'white',
    // border: '2px solid',
    // borderColor:props.mode ==='dark'?'white':'#042743'
  }
//  const toggleStyle = () => {
//     if (myStyle.color === "white") {
//       setmyStyle({
//         color: "black",
//         backgroundColor: "white",
//       });
//       setbtntext("enable dark mode")
//     } else {
//       setmyStyle({
//         color: "white",
//         backgroundColor: "black",
//       });
//       setbtntext("enable light mode")
//     }
//   };

  return (
    <>
      <div className="container">
        <h1 className="my-2" style={{color:props.mode ==='dark'?'white':'#042743'}}>About Us </h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item ">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={myStyle}
              >
                Analyze your text 
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem amet sed molestiae dolor dicta consectetur non aliquam unde! Eum illum eius quis non!
              </div>
            </div>
          </div>
          <div className="accordion-item ">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={myStyle}
              >
                free to use
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellat deleniti consectetur.
              </div>
            </div>
          </div>
          <div className="accordion-item ">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={myStyle}
              >
                Browser compatible
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, nisi! Maiores eligendi vero est nostrum.
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container my-3">
          <button
            onClick={toggleStyle}
            type="button"
            className="btn btn-primary"
          >
            {btntext}
          </button>
        </div> */}
      </div>
    </>
  );
}
