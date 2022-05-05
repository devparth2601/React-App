import React, { Component } from "react";

class states extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Auther: "Chetan",
    };
  }

  TwoStates() {
    return <p>TwoStates Called {this.state.Auther}</p>;
  }

  ThreeIdiots() {
    return <p>ThreeIdiots Called {this.state.Auther}</p>;
  }

  chngData = () => {
    this.setState({ Auther: "Chetan Bhagat" });
    console.log("clicked");
  };

  render() {
    return (
      <div>
        <div className="con">
          <div className="row">
            <div className="col">
              {this.TwoStates()}
              {this.ThreeIdiots()}
              <button onClick={this.chngData}>Click</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default states;
