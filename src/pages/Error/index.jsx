import "./index.scss";
import { Link } from "react-router-dom";
import { ReactComponent as SVGbig } from "./../../assets/404big.svg";
import { ReactComponent as SVGsmall } from "./../../assets/404small.svg";
import React, { useState, useEffect } from "react";

function Error() {
  const [isOnMobile, setisOnMobile] = useState(window.innerWidth < 630);

  useEffect(() => {
    const checkMobile = () => {
      setisOnMobile(window.innerWidth < 630);
    };

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <main className="Error">
      {isOnMobile ? (
        <SVGsmall className="Error__404" />
      ) : (
        <SVGbig className="Error__404" />
      )}

      <h2 className="Error__Oops">
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <Link className="Error__Link" to="/">
        Retourner sur la page d’accueil
      </Link>
    </main>
  );
}

export default Error;
