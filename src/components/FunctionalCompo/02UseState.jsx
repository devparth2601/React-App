import React, { useState } from "react";

export default function UseState() {
  //   let a = 50;
  let b = 50;
  const [vara, setvara] = useState(0);

  //   function chngdata() {
  //     setvara(1000);
  //   }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <button
              onClick={() => {
                setvara(2000 + b);
              }}
            >
              Click
            </button>
            {vara}
          </div>
        </div>
      </div>
    </div>
  );
}
