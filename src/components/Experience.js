import React from 'react';
import { connect } from "react-redux";
import '../styles/exp.css'

const Experience = (props) => {
    const {schoolData, workData, projectData} = props

    return (
        <React.Fragment>
            <h2 id="experience" className="exp-h2">Tapasztalat</h2>
            <hr className="separation sep-exp" />
            <div className="content">
            <h3 class="section">Informatika</h3>
            {workData.map(e => (
                <React.Fragment>
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
            <h3 class="section">Tanulmányok</h3>
            {schoolData.map(e => (
                <React.Fragment>
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
}

const mapStateToProps = (state) => {
    return {
      schoolData: state.school.data,
      workData: state.work.data,
      projectData: state.project.data
    }
  };

export default connect(mapStateToProps)(Experience);
