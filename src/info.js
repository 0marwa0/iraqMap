import React from "react";
import "./slid.css";
import "./App.css";
const Info = () => {
  return (
    <article id="slider">
      <div>
        <p>
          <span>Elegant Responsive Pure CSS3 Slider</span>
        </p>
      </div>
      <input checked type="radio" name="slider" id="slide1" />
      <input type="radio" name="slider" id="slide2" />
      <input type="radio" name="slider" id="slide3" />
      <input type="radio" name="slider" id="slide4" />
      <input type="radio" name="slider" id="slide5" />
      <div id="slides">
        <div id="container">
          <div class="inner">
            <article>
              <img src="http://placehold.it/942X400" />
            </article>
            <article>
              <div class="caption">
                <bar>A Bubble on Flower</bar>
              </div>
              <img src="https://0.s3.envato.com/files/84450220/img/Dummy1-942X400.jpg" />
            </article>
            <article>
              <div class="caption">
                <bar>
                  A Small Elephant <a href="#">read more</a>
                </bar>
              </div>
              <img src="https://0.s3.envato.com/files/84450220/img/Dummy2-942X400.jpg" />
            </article>
            <article>
              <div class="caption">
                <bar>
                  A Yellow Flower <a href="#">read more</a>
                </bar>
              </div>
              <img src="https://0.s3.envato.com/files/84450220/img/Dummy3-942X400.jpg" />
            </article>
            <article>
              <div class="caption">
                <bar>A Pink Flower</bar>
              </div>
              <img src="https://0.s3.envato.com/files/84450220/img/Dummy4-942X400.jpg" />
            </article>
          </div>
        </div>
      </div>
      <div id="commands">
        <label for="slide1"></label>
        <label for="slide2"></label>
        <label for="slide3"></label>
        <label for="slide4"></label>
        <label for="slide5"></label>
      </div>
      <div id="active">
        <label for="slide1"></label>
        <label for="slide2"></label>
        <label for="slide3"></label>
        <label for="slide4"></label>
        <label for="slide5"></label>
      </div>
    </article>
  );
};

export default Info;
