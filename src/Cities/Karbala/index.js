import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";

import Slider from "react-slick";
function Karbala(props) {
  return (
    <Modal open={props.open} onClose={props.onCloseModal} center>
      {" "}
      <div>
        <p>Karbla</p>
        <Slider {...props.settings}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "red",
            }}>
            <img src={props.view} width="760px" height="450px" />
          </div>
          <div>
            <img src={props.view2} width="755px" height="450px" />
          </div>
          <div>hi</div>
        </Slider>
      </div>
    </Modal>
  );
}

export default Karbala;
