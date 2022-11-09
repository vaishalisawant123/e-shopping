import React from "react";
import "./Form.css";
const Form = () => {
  return (
    <div className="body">
      <h1>
        <i style={{ color: "skyblue" }}>Sign-Up</i>
      </h1>
      <form>
        <label className="label">First Name</label>
        <input type="text" />
        <br />
        <label className="label">Last Name</label>
        <input type="text" />
        <br />
        <label className="label">Email</label>
        <input type="email" />
        <br />
        <label className="label">Password</label>
        <input type="password" />
        <br />
        <label className="label">Confirm Password</label>
        <input type="password" />
        <br />
        <button>SignUp</button>
        <button>Reset</button>
      </form>
    </div>
  );
};
export default Form;
