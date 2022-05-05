import React, { Component } from "react";
import Table from "./table";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class FetchAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "pending...",
      fetchdata: "",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      console.log("componentDidMount called");
      var fetchdata = fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((resdata) => {
          this.setState({ fetchdata: resdata });
          this.setState({ status: "completed" });
        })
        .catch((e) => {
          console.log(e);
        });
    }, 3000);
  }

  btnchng = () => {
    setTimeout(() => {
      this.setState({
        status: "success",
      });

      // <table>
      //   <thead>
      //     <tr>{this.renderTableHeader()}</tr>
      //   </thead>
      //   <tbody>{this.renderTableRows()}</tbody>
      // </table>
    }, 2000);
  };

  render() {
    return (
      //   <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <button onClick={this.btnchng}>Click</button>
            {this.state.status == "success" ? (
              <div>
                <Table />;
              </div>
            ) : (
              "no data found"
            )}
          </div>
        </div>
      </div>
    );
  }
}
<Router>
  <Routes>
    <Route path="/table" element={<Table />}></Route>
  </Routes>
</Router>;
