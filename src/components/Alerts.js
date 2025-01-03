import React from "react";

export default function Alerts(props) {

  const capitalize =(word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() +lower.slice(1);
  }  
  return (
    <div className="" style={{height: '40px'}}>
   {props.alert && <div>
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
       <strong>{capitalize(props.alert.type)}</strong>  : {props.alert.msg}
   
      </div>
    </div>}
    </div>
  );
}
