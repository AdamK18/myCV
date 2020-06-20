import React, { Component } from "react";
import roundpic from "../images/CV-pic-round.png";
import { connect } from "react-redux";
import "../styles/home.css";

function Home(props) {
  const {name, isStudent, university, company, position, email, phone, summary} = props
  return (
    <div>
      <h1 className="h1">{name}</h1>
      <hr className="separation" />
      <table>
        <tbody><tr>
        <td className="col1">
          <h2>Foglalkozás</h2>
          {isStudent ?
            <React.Fragment>
              <p>
                <b>Tanuló</b>
              </p>
              <p>
                {university}
              </p>
            </React.Fragment> : ''}
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
        </td>
        <td className="col2">
          <img className="roundpic" src={roundpic} alt="" />
        </td>
        <td className="col3">
          <h2>Rólam</h2>
          <p className="rolam">
            {summary}
          </p>
        </td>
      </tr></tbody>
      </table>
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
    summary: state.user.summary,
  };
};

export default connect(mapStateToProps)(Home);
