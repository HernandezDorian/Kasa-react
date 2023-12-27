import "./index.scss";
import { ReactComponent as ArrowTOp } from "./../../assets/arrow_to_open.svg";
import { ReactComponent as ArrowTOc } from "./../../assets/arrow_to_close.svg";
import React, { useState } from "react";

function Collapse({ Title, className, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Collapse">
      <div className={`Collapse__Menu ${className}`} onClick={handleToggle}>
        <p className="Collapse__Menu__Title">{Title}</p>
        {isOpen ? <ArrowTOc /> : <ArrowTOp />}
      </div>
      {isOpen && <div className="Collapse__Content">{children}</div>}
    </div>
  );
}

export default Collapse;
