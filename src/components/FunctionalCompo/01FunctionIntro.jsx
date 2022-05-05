import React, { useState } from "react";

function FunctionIntro(props) {
  const [username, setusername] = useState("someone bhagat");
  function clickhndl() {
    setusername("chetan bhagat");
  }
  return (
    <div>
      <button onClick={clickhndl}>click</button>
      {username}
    </div>
  );
}

export default FunctionIntro;
