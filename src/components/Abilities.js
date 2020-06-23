import React from "react";
import { connect } from "react-redux";
import "../styles/exp.css";
import "../styles/abilities.css"

const Abilities = (props) => {
  const { absBasic, absMedium, absAdvanced } = props;

  return (
    <React.Fragment>
      <h2 className="exp-h2" id="projects">
        Ismeretek
      </h2>
      <hr className="separation sep-exp sep-project" />
      
      <h3 className="section section-ab section-ab-main">Programozási nyelvek</h3>
      <div className="flex-ab">
        <div className="col1">
            <h3 className="section section-ab">Alap</h3>  
            {absBasic.pLanguages.map((e, i) => (
              <h3 key={i}>{e}</h3>
            ))}
        </div>
        <div className="col2">
            <h3 className="section section-ab">Közepes</h3>
            {absMedium.pLanguages.map((e, i) => (
              <h3 key={i}>{e}</h3>
            ))}
        </div>
        <div className="col3">
            <h3 className="section section-ab">Erős</h3>
            {absAdvanced.pLanguages.map((e, i) => (
              <h3 key={i}>{e}</h3>
            ))}
        </div>
      </div>

      <h3 className="section section-ab section-ab-main">Nyelvek</h3>
      <div className="flex-ab">
        <div className="col1">
            <h3 className="section section-ab">Alap</h3>  
            {absBasic.languages.map((e, i) => (
              <h3 key={i}>{e}</h3>
            ))}
        </div>
        <div className="col2">
            <h3 className="section section-ab">Közepes</h3>
            {absMedium.languages.map((e, i) => (
              <h3 key={i}>{e}</h3>
            ))}
        </div>
        <div className="col3">
            <h3 className="section section-ab">Erős</h3>
            {absAdvanced.languages.map((e, i) => (
              <h3 key={i}>{e}</h3>
            ))}
        </div>
      </div>

      <h3 className="section section-ab section-ab-main">Fejlesztői környezetek</h3>
      <div className="flex-ab">
        <div className="col1">
            <h3 className="section section-ab">Alap</h3>  
            {absBasic.IDEs.map((e, i) => (
              <h3 key={i}>{e}</h3>
            ))}
        </div>
        <div className="col2">
            <h3 className="section section-ab">Közepes</h3>
            {absMedium.IDEs.map((e, i) => (
              <h3 key={i}>{e}</h3>
            ))}
        </div>
        <div className="col3">
            <h3 className="section section-ab">Erős</h3>
            {absAdvanced.IDEs.map((e, i) => (
              <h3 key={i}>{e}</h3>
            ))}
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    absBasic: state.absBasic,
    absMedium: state.absMedium,
    absAdvanced: state.absAdvanced
  };
};

export default connect(mapStateToProps)(Abilities);
