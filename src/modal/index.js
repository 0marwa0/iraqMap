import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from "react";

import Slider from "react-slick";
function Gov(props) {
  const [data, usedata] = useState(props.data);
  useEffect(() => {
    // usedata(props.data);
  });
  const slides = () => {
    data.map((x) => {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "red",
          }}
        >
          <img src=".../Store/k14.jpg" width="760px" height="450px" />
        </div>
      );
    });
  };
  return (
    <Modal open={props.open} onClose={props.onCloseModal} center>
      <div>
        {console.log(props.data, data, "now")}
        <Slider {...props.settings}>
          {props.data
            ? props.data.map((x) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div className="innerSlide">
                      <img src={x.image} width="760px" height="480px" />
                      <p>{x.text}</p>
                    </div>
                  </div>
                );
              })
            : null}
        </Slider>
      </div>
    </Modal>
  );
}

export default Gov;
