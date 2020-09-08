import React from "react";
import "./styles/Techstack.css";
import TechItem from "./TechItem";
function Techstack() {
  return (
    <section className="techstack">
      {/* <div className="techstack__head">Tech That I Know</div> */}
      <div className="stack">
        <TechItem
          title={"HTML"}
          url={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGS1WrajtWayvhk-05dy5ZHJVM2_EbQ43NHg&usqp=CAU"
          }
        />
        <TechItem
          title={"CSS"}
          url={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTqOXThy0yOFKarAr2oXNNlgkLY3TC4Yc5C5g&usqp=CAU"
          }
        />

        <TechItem
          title={"JS"}
          url={
            "https://thumbs.dreamstime.com/b/javascript-logo-javascript-logo-white-background-vector-format-available-136765881.jpg"
          }
        />

        <TechItem
          title={"Flutter"}
          url={
            "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png"
          }
        />
        <TechItem
          title={"React"}
          url={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png"
          }
        />

        <TechItem
          title={"Python"}
          url={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbMMnN9uOmgPUE--ZE6EK7rDGRtRXLwmMHjQ&usqp=CAU"
          }
        />
      </div>
    </section>
  );
}

export default Techstack;
