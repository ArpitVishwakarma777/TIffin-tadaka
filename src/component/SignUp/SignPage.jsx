import React from "react";
import "./SignPage.css";
function SignPage() {
  let [name, setName] = React.useState("");
  let [password, setPassword] = React.useState("");
  let [rPassword, setRPassword] = React.useState("");
  let [trm, setTrm] = React.useState("");
let [haveAccount ,setAccount]= React.useState(false);
  function beforeSubmit() {
    if (password !== rPassword) {
      alert("Password dosn't match");
    } 
    // else if (password=="" || rPassword=="" || trm=="" || name == "") {
    //   alert("Please Enter all details");
    // }
    // else{
    //   alert("Account is Created");
    //   setAccount(true);
    //   console.log(name);
    //   console.log(password);
    //   console.log(rPassword);
    //   console.log(trm);
    //   console.log(haveAccount);
    // }


    
  }
  return (
    <div>
      <div className="register-photo">
        <div className="form-container">
          <div className="image-holder" />
          <form onSubmit={(e) => e.preventDefault()} method="post">
            <h2 className="text-center">
              <strong>Create</strong> an account.
            </h2>
            <div className="form-group">
              <input
                onChange={(e) => setName(e.target.value)}
                className="form-control name-i"
                type="name"
                placeholder="User Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="form-control pass-i"
                type="password"
                name="password" required
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <input
                onChange={(e) => setRPassword(e.target.value)}
                className="form-control repass-i"
                type="password"
                name="password-repeat" required
                placeholder="Password (Confirm)"
              />
            </div>
            <div className="form-group">
              <div className="form-check">
                <label className=" mt-3 form-check-label">
                  <input
                    onChange={(e) => setTrm(e.target.checked)}
                    className=" trm-i form-check-input"
                    type="checkbox"
                  />
                  I agree to the license terms.
                </label>
              </div>
            </div>
            <div className="form-group">
              <button onClick={beforeSubmit} className="btn SignUp">
                Sign Up
              </button>
            </div>
            <a href="#" className="already">
              You already have an account? Login here.
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignPage;
