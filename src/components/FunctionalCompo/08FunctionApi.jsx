import React, { useState, useLayoutEffect, useEffect } from "react";

export default function FunctionApi(props) {
  const [data, setdata] = useState([]);
  const [Loader, setloader] = useState("Pending...");

  useLayoutEffect(() => {
    setTimeout(() => {
      setloader("Loading...");
    }, 2000);
  });

  useEffect(() => {
    setloader("Completed...");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((Response) => {
        setdata(Response);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            {Loader}
            {Object.entries(data).map(function (item, i) {
              return <div>{item[1].title}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
