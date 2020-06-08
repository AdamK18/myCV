import React, { Component } from "react";
import pic from "../images/cv-pic.png";
import "../styles/introduction.css";

class Introduction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Klöczl Ádám",
      email: "kloczl.adam@gmail.com",
      phone: "+36 30 199 9605",
    };
  }

  render() {
    const { name, email, phone } = this.state;
    return (
      <div>
        <h1>{name}</h1>
        <table>
          <tr>
            <td className="col1">
              <img src={pic} alt="profile pic" />
            </td>
            <td className="col2">
                <h2>Tanuló</h2>
                <p>{email}</p>
                <p>{phone}</p>
                <p>            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime incidunt laboriosam saepe magni voluptatum excepturi numquam ad corporis eius mollitia sapiente iste ut voluptates error consequuntur, id tempora recusandae natus sequi? Voluptate voluptatibus temporibus sit ratione incidunt blanditiis praesentium laborum!
                </p>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Introduction;
