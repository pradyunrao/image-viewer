import React from "react";
import "../App.css";


const LoginComponent = () => {
  return (
    <div className="container">
    <form action="/tacos">
      <h2>Login</h2>
      <p>
        <label htmlFor="username">Username</label>
        <br />
        <input id="username" type="text" name="username" required/>
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <br />
        <input id="password" type="password" name ="password" required pattern = "^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,15}$" title="password should be 8 to 15 characters long with atleast one of each (digit, uppercase char, lowercase char, special char)" />
      </p>
      <button className="btn btn-primary" type="submit" >Sign In</button>
    </form>
  </div>
  );

}

export default LoginComponent