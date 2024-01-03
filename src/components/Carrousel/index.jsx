import "./index.scss";
import { ReactComponent as ArrowLeft } from "./../../assets/ArrowLeft.svg";
import { ReactComponent as ArrowRight } from "./../../assets/ArrowRight.svg";
import { useState } from "react";

function Carrousel({ img }) {
  const [imgCount, setimgCount] = useState(0);
  const maxImg = img.length - 1;
  const Counter = `${imgCount + 1}/${maxImg + 1}`;
  return (
    <div className="Carrousel">
      <div
        className="Carrousel__img"
        style={{
          backgroundImage: `url(${img[imgCount]})`,
        }}
      >
        {maxImg > 1 && (
          <div className="Carrousel__img__Arrow">
            <ArrowLeft
              className="Carrousel__img__Arrow__Left"
              onClick={() => {
                if (imgCount === 0) {
                  setimgCount(maxImg);
                } else {
                  setimgCount(imgCount - 1);
                }
              }}
            ></ArrowLeft>
            <ArrowRight
              className="Carrousel__img__Arrow__Right"
              onClick={() => {
                if (imgCount === maxImg) {
                  setimgCount(0);
                } else {
                  setimgCount(imgCount + 1);
                }
              }}
            ></ArrowRight>
          </div>
        )}
        {maxImg > 1 && (
          <span className="Carrousel__img__Counter">{Counter}</span>
        )}
      </div>
      {/* {img.map((image, index) => (
        <div
          key={index}
          className="Carrousel__img"
          // alt="Logement"
          // src={image}
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
      ))} */}
    </div>
  );
}

export default Carrousel;
