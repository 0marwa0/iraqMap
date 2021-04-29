import "react-responsive-modal/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import Gov from "./modal";
import Loader from "react-loader-spinner";
import "./App.css";
import view2 from "./image/s2.jpg";
import view from "./image/s.jpg";
import map from "./image/iraq.jpg";
import { coords } from "./coords";
import { Store } from "./Store";
const Home = (props) => {
  const [isOpen, setOpen] = useState(false);
  const open = (open, name) => {
    setOpen(open);
    setData(Store[name]);
  };
  const [data, setData] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [loading, setLoading] = useState(false);
  const load = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  };
  useEffect(() => {
    load();
  }, []);
  return (
    <div style={{ height: "80%" }}>
      {loading ? (
        <div className="over">
          <div className="cont">
            <Loader
              type="Puff"
              color="#00BFFF"
              height={200}
              width={200}
              timeout={6000}
            />
          </div>
        </div>
      ) : null}
      <img src={map} useMap="#iraq" style={{ height: "100%" }} />
      <map id="iraq" name="iraq">
        {coords.map((x) => {
          return (
            <area
              shape="poly"
              coords={x.Coords}
              href="#"
              onClick={() => props.history.push(`info/${x.name}`)}
              // onClick={() => open(true, x.name)}
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
