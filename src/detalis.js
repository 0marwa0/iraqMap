import React from "react";
import { Store } from "./Store/index";
import { useParams, useLocation } from "react-router-dom";
function Index(props) {
  let path = useLocation().pathname.substr(6);
  return (
    <div
      style={{
        display: "flex",
        padding: "10px",
        gap: "10px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <h1 style={{ color: "white" }}>{path.toUpperCase()}</h1>
        <img src={Store[path].bg.bg} />
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
