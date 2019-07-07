import React from "react";
import "./Video.css";
import "./ErrorMessage.css";
const ErrorMessage = () => {
  return (
    <div className="Video__Wrapper--Message">
      <div className="Video--Message">
        <h1 className="Message--Error">Something went wrong ...</h1>
      </div>
    </div>
  );
};

export default ErrorMessage;