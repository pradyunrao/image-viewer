import React from "react";
import '../App.css'

class FormComponent extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div class="container">
        <form>
          <p>
            <label for="username">Username</label>
            <br/>
            <input id ="username" type="text" />
          </p>
          <p>
            <label for="email">Email</label>
            <br/>
            <input id="email" type="text" />
          </p>
          <p>
            <label for="password">Password</label>
            <br/>
            <input id="password" type="password" />
          </p>
          <button>Register</button>
        </form>
      </div>
    );
  }
}

export default FormComponent;