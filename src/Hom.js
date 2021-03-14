import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import Karbala from "./Cities/Karbala";
import Anbar from "./Cities/Anbar";
import Baghdad from "./Cities/Baghdad";
import Babylon from "./Cities/Babylon";
import Wasit from "./Cities/Wasit";
import view2 from "./image/s2.jpg";
import view from "./image/s.jpg";
import map from "./image/iraq.jpg";
import Slider from "react-slick";
const Home = () => {
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [isKarbala, setKarbala] = useState(false);
  const openKrbala = (open) => setKarbala(open);

  const [isAnbar, setAnbar] = useState(false);
  const openAnbar = (open) => setAnbar(open);

  const [isBaghdad, setBaghdad] = useState(false);
  const openBaghadad = (open) => setBaghdad(open);

  const [isBabylon, setBabylon] = useState(false);
  const openBabylon = (open) => setBabylon(open);

  const [isWasit, setWasit] = useState(false);
  const openWasit = (open) => setWasit(open);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <img src={map} useMap="#iraq" />
      <map id="iraq" name="iraq">
        <area
          shape="poly"
          coords="389,396,362,390,339,405,317,413,350,440,393,430,386,407"
          alt="Sun"
          href="#"
          onClick={() => openKrbala(true)}
        />{" "}
        <area
          shape="poly"
          coords="357,449,316,492,287,567,
          235,523,187,499,123,453,
          43,434,49,426,43,417,31,419,
          31,407,18,333,147,264,170,259,
          188,228,188,198,210,202,237,214,
          270,216,271,244,292,258,
          302,254,301,268,305,271,
          333,313,346,315,358,320,373,320,
          381,336,377,342,375,348,
          364,350,359,359,372,365,
          374,377,388,390,364,389,
          347,391,330,405,316,408"
          alt="Sun"
          href="#"
          onClick={() => openAnbar(true)}
        />
        <area
          shape="poly"
          coords="406,378,409,389,422,391,432,
          390,447,418,454,421,430,437,424,445,407,436,398,439,392,420,388,410,392,397,399,392,401,382"
          alt="Sun"
          href="#"
          onClick={() => openBabylon(true)}
        />
        <area
          shape="poly"
          coords="389,396,362,390,339,405,317,413,350,440,393,430,386,407"
          alt="Sun"
          href="#"
          onClick={openModal}
        />
        <area
          shape="poly"
          coords="389,396,362,390,339,405,317,413,350,440,393,430,386,407"
          alt="Sun"
          href="#"
          onClick={openModal}
        />
      </map>
      <Karbala
        open={isKarbala}
        onCloseModal={() => {
          openKrbala(false);
        }}
        settings={settings}
        view={view}
        view2={view2}
      />
      <Wasit
        open={isWasit}
        onCloseModal={() => openWasit(false)}
        settings={settings}
        view={view}
        view2={view2}
      />
      <Baghdad
        open={isBaghdad}
        onCloseModal={() => openBaghadad(false)}
        settings={settings}
        view={view}
        view2={view2}
      />
      <Anbar
        open={isAnbar}
        onCloseModal={() => openAnbar(false)}
        settings={settings}
        view={view}
        view2={view2}
      />
      <Babylon
        open={isBabylon}
        onCloseModal={() => openBabylon(false)}
        settings={settings}
        view={view}
        view2={view2}
      />
    </div>
  );
};

export default Home;
