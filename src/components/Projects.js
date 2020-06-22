import React from 'react';
import { connect } from "react-redux";
import '../styles/exp.css'

const Projects = (props) => {
    const {projectData} = props

    return (
        <React.Fragment>
            <h2 className="exp-h2" id="projects">Projektek</h2>
            <hr className="separation sep-exp sep-project" />
            <div className="content">
            {projectData.map(e => (
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
      projectData: state.project.data
    }
  };

export default connect(mapStateToProps)(Projects);
