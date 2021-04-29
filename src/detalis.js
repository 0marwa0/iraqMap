import React, { useEffect, useState } from "react";
import "./App.css";
import { Store } from "./Store/index";
import { useParams, useLocation } from "react-router-dom";
import Loader from "react-loader-spinner";
import "react-responsive-modal/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Gov from "./modal";

function Index(props) {
  const [loading, setLoading] = useState(false);
  const load = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  };
  const [isOpen, setOpen] = useState(false);
  const open = (open, name) => {
    setOpen(open);
    setData(Store[path]);
  };
  const [data, setData] = useState([]);
  let path = useLocation().pathname.substr(6);
  useEffect(() => {
    load();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        padding: "30px",
        gap: "10px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {loading ? (
        <div className="over">
          <div className="cont">
            <Loader
              type="ThreeDots"
              color="#00BFFF"
              height={200}
              width={200}
              timeout={4000} //3 secs
            />
          </div>
        </div>
      ) : null}
      <div>
        <h1 style={{ color: "white" }}>{path.toUpperCase()}</h1>
        <img src={Store[path].bg.bg} style={{ width: "400px" }} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        {Store[path].info.map((item, i) => (
          <div>
            <img
              className="img"
              src={item.image}
              style={{ width: "400px", height: "200px", marginBottom: "5px" }}
            />
            <div
              style={{
                width: "400px",
                textAlign: "right",
                color: "white",
                height: "100px",
                overflow: "hidden",
              }}
            >
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Index;
