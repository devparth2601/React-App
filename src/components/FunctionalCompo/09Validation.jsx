import React, { useState } from "react";

function Validation(props) {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");

  const [allEntry, setallEntry] = useState([]);
  const SubmitForm = (e) => {
    e.preventDefault();

    if (email && pass) {
      const NewEntry = {
        id: new Date().getTime().toString(),
        email: email,
        pass: pass,
      };
      setallEntry([...allEntry, NewEntry]);
      console.log(NewEntry);
    } else {
      alert("Please fill the data");
    }
  };

  return (
    <div>
      <>
        <div className="container">
          <div className="row">
            <div className="col">
              <form className="form-horizontal">
                <label htmlFor="Email" className="mx-3 my-3">
                  Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                ></input>
                <br />

                <label htmlFor="Pass" className="mx-3 my-3">
                  Password:
                </label>
                <input
                  type="text"
                  name="pass"
                  id="pass"
                  value={pass}
                  onChange={(e) => setpass(e.target.value)}
                ></input>
                <br />

                <input
                  type="submit"
                  className="btn btn-primary mx-3 my-3"
                  value="Login"
                  onClick={SubmitForm()}
                ></input>
              </form>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Validation;
