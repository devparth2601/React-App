import React, { Component } from "react";

class StateLifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  btnChng = () => {
    console.log("hello");
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <button onClick={this.btnChng}>Click</button>
              {this.state.counter}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StateLifeCycle;
