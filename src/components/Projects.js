import React from "react";
import { connect } from "react-redux";
import "../styles/exp.css";
import bitBucketPic from "../images/bitbucket.png";

const Projects = (props) => {
  const { projectData } = props;

  return (
    <React.Fragment>
      <h2 className="exp-h2" id="projects">
        Projektek
      </h2>
      <hr className="separation sep-exp sep-project" />
      <div className="content">
        {projectData.map((e, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-start">
              <a rel="noopener noreferrer" target="_blank" href={e.link}>
                <div className="projectContainer">
                  <img className="social" src={bitBucketPic} alt="bitBucket" />{" "}
                  <h4 className="hol">{e.nev}</h4>
                </div>
              </a>
              <b className="mit">{e.nyelv}</b>
            </div>
            <div className="flex">
              <div></div>
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
    projectData: state.project.data,
  };
};

export default connect(mapStateToProps)(Projects);
