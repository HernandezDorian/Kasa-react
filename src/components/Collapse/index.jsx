import "./index.scss";
import { ReactComponent as ArrowTOp } from "./../../assets/arrow_to_open.svg";
import { ReactComponent as ArrowTOc } from "./../../assets/arrow_to_close.svg";
import React, { useState, useEffect } from "react";

function Collapse({ Title, className, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    setIsFirstRender(false);
  }, []);

  useEffect(() => {
    if (!isFirstRender) {
      const element = document.querySelector(".Collapse__Content");
      if (element) {
        element.classList.remove("no-animation");
      }
    }
  }, [isFirstRender]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // useEffect(() => {
  //   const element = document.querySelector(".Collapse__Content");
  //   if (element) {
  //     element.classList.remove("no-animation");
  //   }
  // }, []);

  // const handleToggle = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <div className="Collapse">
      <div className={`Collapse__Menu ${className}`} onClick={handleToggle}>
        <p className="Collapse__Menu__Title">{Title}</p>
        {isOpen ? <ArrowTOc /> : <ArrowTOp />}
      </div>
      <div
        className={`Collapse__Content ${isFirstRender ? "no-animation" : ""} ${
          isOpen ? "open" : "close"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default Collapse;
