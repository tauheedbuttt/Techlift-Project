import React from "react";
import Navbar from "./Navbar";

const Screen = ({ children }) => {
  return (
    <div className="wrapper">
      <Navbar/>
      {children}
    </div>
  );
};

export default Screen;
