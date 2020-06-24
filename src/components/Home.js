import React from "react";
import roundpic from "../images/CV-pic-round.png";
import linkedInPic from "../images/linkedin-logo.png";
import githubPic from "../images/github.svg";
import { connect } from "react-redux";
import "../styles/home.css";
import "../styles/flex.css";

function Home(props) {
  const {
    name,
    isStudent,
    university,
    company,
    position,
    email,
    phone,
    linkedIn,
    github,
    summary,
  } = props;
  return (
    <div className="home">
      <h1>{name}</h1>
      <hr className="separation" />
      <div className="row">
        <div className="col">
          <h2 className="h2-mob">Foglalkozás</h2>
          {isStudent ? (
            <React.Fragment>
              <p>
                <b>Tanuló</b>
              </p>
              <p>{university}</p>
            </React.Fragment>
          ) : (
            ""
          )}
          <p>
            <b>{position}</b>
          </p>
          <p>{company}</p>
          <h2>Elérhetőség</h2>
          <p>
            <b>E-mail cím:</b> {email}
          </p>
          <p>
            <b>Telefonszám:</b> {phone}
          </p>
          <div>
            <a rel="noopener noreferrer" target="_blank" href={github}>
              <img className="social" src={githubPic} alt="gitHub" />
            </a>
            <a rel="noopener noreferrer" target="_blank" href={linkedIn}>
              <img className="social" src={linkedInPic} alt="linkedIn" />
            </a>
          </div>
        </div>
        <img className="roundpic" src={roundpic} alt="" />
        <div className="col">
          <h2>Rólam</h2>
          <p className="rolam">{summary}</p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    name: state.user.name,
    isStudent: state.user.isStudent,
    university: state.user.university,
    company: state.user.company,
    position: state.user.position,
    email: state.user.email,
    phone: state.user.phone,
    linkedIn: state.user.linkedIn,
    github: state.user.github,
    summary: state.user.summary,
  };
};

export default connect(mapStateToProps)(Home);
