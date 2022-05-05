import React, { useState, useEffect, useLayoutEffect } from "react";

export default function UseEffect() {
  const [vara, setvara] = useState(0);
  const [Name, setName] = useState("Parth");
  const [Loader, setLoader] = useState("Pending...");

  function chngData() {
    setvara(1000);
  }
  function chngAnotherData() {
    setName("Parth Patel");
  }

  useLayoutEffect(() => {
    setTimeout(() => {
      if ((Name == "Parth") & (vara == 0)) {
        setLoader("Loading...");
      } else {
        setLoader("Done...");
      }
    }, 2000);
  });
  useEffect(() => {
    console.log("UseEffect Called");
  });
  return (
    <div>
      <>
        <div className="container">
          <div className="row">
            <div className="col">
              {Loader}
              <br /> <br /> <br />
              <button onClick={chngData}>Click</button>
              {vara}
              <br /> <br /> <br />
              <button onClick={chngAnotherData}>Click</button>
              {Name}
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
