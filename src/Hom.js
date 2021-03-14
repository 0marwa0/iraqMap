import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import Karbala from "./Cities/Karbala";
import Anbar from "./Cities/Anbar";
import Baghdad from "./Cities/Baghdad";
import Najaf from "./Cities/Najaf";
import Dhiqar from "./Cities/Dhiqar";
import Diwaniyah from "./Cities/Diwaniyah";
import Maysan from "./Cities/Maysan";
import Babylon from "./Cities/Babylon";
import Wasit from "./Cities/Wasit";
import view2 from "./image/s2.jpg";
import view from "./image/s.jpg";
import map from "./image/iraq.jpg";
import Slider from "react-slick";
const Home = () => {
  const [isKarbala, setKarbala] = useState(false);
  const openKrbala = (open) => setKarbala(open);

  const [isDhiqar, setDhiqar] = useState(false);
  const openDhiqar = (open) => setDhiqar(open);

  const [isDiwaniyah, setDiwaniyah] = useState(false);
  const openDiwaniyah = (open) => setDiwaniyah(open);

  const [isNajaf, setNajaf] = useState(false);
  const openNajaf = (open) => setNajaf(open);

  const [isMaysan, setMaysan] = useState(false);
  const openMaysan = (open) => setMaysan(open);

  const [isSamawah, setSamawah] = useState(false);
  const openSamawah = (open) => setSamawah(open);

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
          coords="505,333,475,376,440,362,429,359,418,374,408,375,411,387,423,390,438,
          395,449,418,468,425,471,435,487,447,494,458,512,452,551,452,543,439,539,435,
          542,422,548,385,526,378,516,374,519,367,511,364,522,357"
          alt="Sun"
          href="#"
          onClick={() => openWasit(true)}
        />
        <area
          shape="poly"
          coords="409,372,396,379,392,390,377,379,375,366,360,360,370,348,
          378,347,380,338,389,339,393,342,400,339,407,345,407.362"
          alt="Sun"
          href="#"
          onClick={() => openBaghadad(true)}
        />
        <area
          shape="poly"
          coords=""
          alt="Sun"
          href="#"
          onClick={() => openMaysan(true)}
        />
        <area
          shape="poly"
          coords="394,430,352,442,360,449,346,461,334,463,320,483,309,511,
          305,532,298,541,296,554,288,568,362,627,394,557,404,552,418,537,421
          ,505,399,487,406,484,411,487,409,476,408,454,415,443,
          407,438,397,439"
          alt="Sun"
          href="#"
          onClick={() => openNajaf(true)}
        />
        <area
          shape="poly"
          coords="423,505,418,535,399,555,380,598,363,628,424,678,
          552,687,556,663,560,651,560,638,566,601,554,586,553,575
          ,546,572,538,554,493,548,491,529,498,523,496,512,492,507,
          497,496,496,486,457,477,446,483,450,485,442,506,440,516
          "
          alt="Sun"
          href="#"
          onClick={() => openMaysan(true)}
        />
        <area
          shape="poly"
          coords="550,388,587,415,600,413,608,419,609,427,616,435,
          615,439,635,466,630,495,630,513,607,509,592,514,
          588,520,571,523,565,515,561,504,552,500,553,490,
          540,475,540,470,533,460,535,452,552,452,554,440,
          543,433,544,421,546,395"
          alt="Sun"
          href="#"
          onClick={() => openMaysan(true)}
        />
        <area
          shape="poly"
          coords="531,454,542,471,539,476,545,483,553,494,554,502,565,509,
          565,519,571,524,589,524,590,551,589,567,573,566,550,573,
          537,553,495,548,495,529,497,513,492,508,497,494,497,482,
          494,462,515,453"
          alt="Sun"
          href="#"
          onClick={() => openDhiqar(true)}
        />{" "}
        <area
          shape="poly"
          coords="495,481,466,479,452,480,444,481,449,487,
        444,499,439,513,421,501,404,486,411,487,
        409,452,417,450,415,445,424,445,457,424,468,427,
        468,433,479,447,488,450,491,461"
          alt="Sun"
          href="#"
          onClick={() => openDiwaniyah(true)}
        />{" "}
        <area
          shape="poly"
          coords="629,514,631,530,654,535,655,572,667,587,
          682,595,693,615,685,616,672,608,657,608,651,
          611,639,607,610,606,595,617,584,642,571,667,
          556,685,558,663,561,655,559,645,567,605,555,588,
          555,574,574,568,591,567,591,523,599,513"
          alt="Sun"
          href="#"
          onClick={() => openDiwaniyah(true)}
        />
        <area
          shape="poly"
          coords="385,339,373,319,356,320,346,314,335,313,306,278,304,
          268,302,253,293,256,274,243,273,206,309,202,299,178,
          326,158,329,173,322,178,330,188,332,195,364,220,391,
          237,406,214,409,202,419,210,429,209,438,220,429,230,
          421,237,415,247,406,246,406,273,391,289,398,292,403,
          300,398,309,400,317,395,324,389,338"
          alt="Sun"
          href="#"
          onClick={() => openDiwaniyah(true)}
        />
        <area
          shape="poly"
          coords="504,337,486,351,474,367,456,363,439,362,430,357,420,372,
        411,370,407,357,407,342,397,339,390,335,399,324,401,314,
        401,305,404,298,395,290,407,273,408,249,423,241,428,234,
        438,224,450,226,455,249,481,217,484,209,493,205,494,219,
        485,231,488,245,475,244,473,264,477,278,469,294,480,303,
        493,325,504,325"
          alt="Sun"
          href="#"
          onClick={() => openDiwaniyah(true)}
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
