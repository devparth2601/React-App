import React, { forwardRef, useRef, useImperativeHandle } from "react";

function UseHndl(props, ref) {
  const InputData = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      InputData.current.focus();
    },
  }));

  function CheckData() {
    InputData.current.focus();
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <input type="text" ref={InputData} />
            <input type="button" value="Check Ref" onClick={CheckData} />
          </div>
        </div>
      </div>
    </div>
  );
}
UseHndl = forwardRef(UseHndl);

export default UseHndl;
