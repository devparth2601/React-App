import React, { Component } from "react";

class statesobject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      function: "Traditional",
      Mandap: "Saree",
      reception: "Western",
    };
  }
  Garba() {
    return <p>For Garba you can wear {this.state.function}</p>;
  }

  Ganesh() {
    return <p>For Ganesh you can wear {this.state.Mandap}</p>;
  }
  Reception() {
    return <p>For Reception you can wear {this.state.reception}</p>;
  }
  chngData = () => {
    this.setState({ function: "Choli", Mandap: "Kurta", reception: "Suit" });
  };

  render() {
    return (
      <div>
        {/* {this.state.function} */}
        {this.Garba()}
        {this.Ganesh()}
        {this.Reception()}
        <button onClick={this.chngData}>Click</button>
      </div>
    );
  }
}

export default statesobject;
