import React from "react";
import "./rocket.scss";

const Rocket = () => (
  <>
    <div className="rocket">
      <div className="rocket-body">
        <div className="main"></div>
        <div className="wing wing-left"></div>
        <div className="wing wing-right"></div>
        <div className="window"></div>
        <div className="front"></div>
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="flames">
          <div className="flame"></div>
          <div className="flame"></div>
          <div className="flame"></div>
          <div className="flame"></div>
          <div className="spark"></div>
          <div className="spark"></div>
          <div className="spark"></div>
          <div className="spark"></div>
          <div className="spark"></div>
        </div>
      </div>
    </div>
  </>
);

export default Rocket;
