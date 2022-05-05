import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IncNumber, DecNumber } from "../actions/index";

function ReduxApp(props) {
  const mystate = useSelector((state) => state.ChangeNumber);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <button className="btn btn-primary">
              <a onClick={() => dispatch(DecNumber())}>
                <span>DEC</span>
              </a>{" "}
            </button>
            <input
              type="text"
              className="mx-5"
              value={mystate}
              name="quantity"
            />
            <button className="btn btn-primary">
              <a onClick={() => dispatch(IncNumber())}>
                <span>INC</span>
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReduxApp;
