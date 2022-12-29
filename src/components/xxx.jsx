import React from "react";
import More from "./more";
import More1 from "./more1";
import Last from "./last";
import '../app.css'
import '../index.css'

const Xxx = () => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <div className="inl st655">
          <More /> <More /> <More />
          <More />
          <More />
          <hr />
          <br />
          <br />
          <div className="picb">
            <span className="btxt ttp">
              <h1>See for the first time that tree,</h1>
              <h2>bush or blade of grass.</h2>
            </span>
          </div>
        </div>
        <div className="inl fff1">
          <div className="ad">
            <span className="vrt">Advertisement</span>
          </div>
          <br />
          <br />
          <h2>Top Views</h2>
          <div className="blne"></div> <br />
          <div className="img11"></div>
          <div>
            <br />
            <h3>Right Relationship With Nature?</h3>
            Right relationship implies the acceptance of a formula, as does right thought. Right thought and right thinking are two different things.
            <br />
            <br />
            Travel /{" "}
            <font style={{ color: "#0202" }}> Earth, Intelligence, Poem</font>
          </div>
          <More1 />
          <More1 />
          <br />
          <hr />
        </div>
      </div>
      <h2>The Latest</h2>
      <div className="blne"></div>
      <hr />
      <br />
      <div className="d-flex justify-content-around svs">
        <Last /><br/><br/>
        <Last /><br/><br/>
        <Last />
      </div>
      <br />
      <br />
      <hr />
      <br />
      <br />
    </>
  );
};

export default Xxx;
