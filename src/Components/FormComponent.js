import React from "react";
import "../App.css";

class FormComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      password: "",
      confpassword: "",
      confTitle: "Please enter the same password"
    };

  //  this.checkPassword = this.checkPassword.bind(this);
   this.handleChange = this.handleChange.bind(this);
    
  }

  // checkPassword(e){

  //   console.log(this.state.password);
  //   console.log(this.state.confpassword);


  //   console.log(this.state.password === this.state.confpassword);
     
   

  // }

  handleChange(e){
    this.setState({
      [e.target.name] : e.target.value,
    })
  }

 



  render() {

    return (
        <div className="container">
          <form action="/tacos">
            <h2>Sign Up</h2>
            <p>
              <label htmlFor="username">Username</label>
              <br />
              <input id="username" type="text" name="username" required/>
            </p>
            <p>
              <label htmlFor="email">Email</label>
              <br />
              <input id="email" type="email" name="email" required />
            </p>
            <p>
              <label htmlFor="password">Password</label>
              <br />
              <input id="password" type="password" name ="password" required pattern = "^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,15}$" title="password should be 8 to 15 characters long with atleast one of each (digit, uppercase char, lowercase char, special char)" onChange={this.handleChange} />
            </p>
            <p>
              <label htmlFor="confpassword"> Confirm Password</label>
              <br />
              <input id="confpassword" type="password" name ="confpassword" required onChange={this.handleChange} title={this.state.confTitle}/>
            </p>
            <button className="btn btn-primary" type="submit" >Register</button>
          </form>
        </div>
    
    );
  }
}

export default FormComponent;
