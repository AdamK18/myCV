import React from "react";
import { connect } from "react-redux";
import "../styles/exp.css";
import "../styles/abilities.css"

const Abilities = (props) => {
  const { absBasic, absMedium, absAdvanced } = props;

  return (
    <div className="abilities">
      <h2 className="exp-h2" id="abilities">
        Ismeretek
      </h2>
      <hr className="sep-exp sep-project" />
      
      <h3 className="section-ab">Programozási nyelvek</h3>
      <div className="flex-ab">
        <div className="col1">
            <h3 className="ab-table">Alap</h3>  
            {absBasic.pLanguages.map((e, i) => (
              <p className={'cell'} key={i}>{e}</p>
            ))}
        </div>
        <div className="col2">
            <h3 className="ab-table">Közepes</h3>
            {absMedium.pLanguages.map((e, i) => (
              <p className={'cell'} key={i}>{e}</p>
            ))}
        </div>
        <div className="col3">
            <h3 className="ab-table">Erős</h3>
            {absAdvanced.pLanguages.map((e, i) => (
              <p className={'cell'} key={i}>{e}</p>
            ))}
        </div>
      </div>
      
      <h3 className="section-ab">Fejlesztői környezetek</h3>
      <div className="flex-ab">
        <div className="col1">
            <h3 className="ab-table">Alap</h3>  
            {absBasic.IDEs.map((e, i) => (
              <p className={'cell'} key={i}>{e}</p>
            ))}
        </div>
        <div className="col2">
            <h3 className="ab-table">Közepes</h3>
            {absMedium.IDEs.map((e, i) => (
              <p className={'cell'} key={i}>{e}</p>
            ))}
        </div>
        <div className="col3">
            <h3 className="ab-table">Erős</h3>
            {absAdvanced.IDEs.map((e, i) => (
              <p className={'cell'} key={i}>{e}</p>
            ))}
        </div>
      </div>

      <h3 className="section-ab">Nyelvek</h3>
      <div className="flex-ab">
        <div className="col1">
            <h3 className="ab-table">Alap</h3>  
            {absBasic.languages.map((e, i) => (
              <p className={'cell'} key={i}>{e}</p>
            ))}
        </div>
        <div className="col2">
            <h3 className="ab-table">Közepes</h3>
            {absMedium.languages.map((e, i) => (
              <p className={'cell'} key={i}>{e}</p>
            ))}
        </div>
        <div className="col3">
            <h3 className="ab-table">Erős</h3>
            {absAdvanced.languages.map((e, i) => (
              <p className={'cell'} key={i}>{e}</p>
            ))}
        </div>
      </div>
    </div>
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
