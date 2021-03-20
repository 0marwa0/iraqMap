import "react-responsive-modal/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import Gov from "./modal";
import view2 from "./image/s2.jpg";
import view from "./image/s.jpg";
import map from "./image/iraq.jpg";
import { coords } from "./coords";
import { Store } from "./Store";
const Home = () => {
  const [isOpen, setOpen] = useState(false);
  const open = (open, name) => {
    setOpen(open);
    setData(Store[name]);
    console.log(Store[name], "dattttttt");
  };
  const [data, setData] = useState([]);
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
        {coords.map((x) => {
          return (
            <area
              shape="poly"
              coords={x.Coords}
              href="#"
              onClick={() => open(true, x.name)}
            />
          );
        })}
      </map>
      <Gov
        open={isOpen}
        onCloseModal={() => {
          open(false);
        }}
        data={data}
        settings={settings}
        view={view}
        view2={view2}
      />
    </div>
  );
};

export default Home;
