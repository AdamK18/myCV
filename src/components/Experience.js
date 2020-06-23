import React from "react";
import { connect } from "react-redux";
import "../styles/exp.css";

const Experience = (props) => {
  const { schoolData, workData } = props;

  return (
    <React.Fragment>
      <h2 id="experience" className="exp-h2">
        Tapasztalat
      </h2>
      <hr className="separation sep-exp" />
      <div className="content">
        <h3 className="section">Szakmai tapasztalat</h3>
        {workData.map((e, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-start">
              <h4 className="hol">{e.hol}</h4>
              <b className="mit">{e.mit}</b>
            </div>
            <div className="flex">
              <p className="mikor">{e.mikor}</p>
              <p className="text">{e.text}</p>
            </div>
          </React.Fragment>
        ))}
        <h3 className="section">Tanulmányok</h3>
        {schoolData.map((e, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-start">
              <h4 className="hol">{e.hol}</h4>
              <b className="mit">{e.mit}</b>
            </div>
            <div className="flex">
              <p className="mikor">{e.mikor}</p>
              <p className="text">{e.text}</p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    schoolData: state.school.data,
    workData: state.work.data,
  };
};

export default connect(mapStateToProps)(Experience);
