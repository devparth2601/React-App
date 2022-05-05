import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
export default class BtnclickRedirect extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            console.log("btn called");
          }}
        >
          Click
        </button>
      </div>
    );
  }
}

function BtnRedirect() {
  let navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <BtnclickRedirect navigateData={navigate} />
          </div>
        </div>
      </div>
    </>
  );
}
