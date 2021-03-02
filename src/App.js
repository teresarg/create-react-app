import React, { useEffect } from "react";
import "./App.css";
import Rocket from "./Rocket/rocket";

let velocity = 1;
function App() {
  useEffect(() => {
    document.getElementById("container").addEventListener(
      "mousewheel",
      function(e) {
        var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
        document.getElementById("container").scrollLeft -= delta * 20;
        e.preventDefault();
      },
      { passive: false }
    );

    window.addEventListener(
      "scroll",
      () => {
        velocity = velocity + 6;
        const positionX = document.getElementById("container").scrollLeft;
        const positionY = document.getElementById("container").scrollTop;
        const rocket = document.getElementsByClassName("rocket")[0];

        rocket.style.setProperty("left", positionX + 700 + velocity + "px");
        rocket.style.setProperty("bottom", positionY + velocity + "px");
        rocket.style.setProperty("bottom", positionY + velocity + "px");
        //   // window.screen.width /
        //   //   (document.body.offsetHeight - window.innerHeight)
        // );
      },
      true
    );
  });

  return (
    <main>
      <div id="container" className="container flex">
        <Rocket className="rocket" />
        <div className="item1 flex-item">
          <div className="content">
            Ey <span role='img'>&#128075;</span>, <br />
            It's <span>Teresa Romero, </span>
            <br />A frontend Developer.
            <div className="hashtags">
              <span>#education</span>
              <span>#education</span>
              <span>#education</span>
              <span>#education</span>
              <span>#education</span>
              <span>#education</span>
            </div>
            <div className="buttons">
              <button className="resume">Resume</button>
              <button className="contact">Contact</button>
            </div>
          </div>
          <div className="image">
            <img src={require("./img/me.jpg")} />
          </div>
        </div>
        <div className="item2 flex-item">More....</div>
      </div>
    </main>
  );
}

export default App;
