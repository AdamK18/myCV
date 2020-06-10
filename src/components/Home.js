import React, { Component } from "react";
import roundpic from "../images/CV-pic-round.png";
import "../styles/home.css";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Klöczl Ádám",
      email: "kloczl.adam@gmail.com",
      phone: "+36 30 199 9605",
      uni: "Budapesti Corvinus Egyetem",
      szak: "Gazdaságinformatika",
      company: "Jacsomedia Smart Web Applications",
    };
  }

  render() {
    const { name, email, phone, uni, szak, company } = this.state;
    return (
      <div>
        <h1 className="h1">{name}</h1>
        <hr className="separation" />
        <table>
          <tr>
            <td className="col1">
              <h2>Foglalkozás</h2>
              <p>
                <b>Tanuló</b>
              </p>
              <p>
                {uni}
              </p>
              <p>
                <b>Content manager</b>
              </p>
              <p>
                {company}
              </p>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sint, magni laboriosam nobis error autem dolor laudantium tenetur, id odit odio ducimus animi, voluptas excepturi ad. Cupiditate veniam animi, expedita doloremque quidem eius alias debitis libero odit maiores aliquid hic dolorum, molestias necessitatibus labore delectus atque tempore, reiciendis eveniet ex.
              </p>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Home;
