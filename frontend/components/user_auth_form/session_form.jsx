import React from 'react';
import { merge } from 'lodash/merge';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const user = merge({}, this.state);
    this.props.processForm(user);
  }

  updateEmail(e){
    this.setState({ email: e.target.value})
  }

  updatePassword(e){
    this.setState({ password: e.target.value})
  }

  render() {
    if (this.props.formType === 'signup') {
       signupField = (<div>
        <label> fname:
          <input type="text" onChange={this.updateEmail} value={this.state.email}></input>
        </label>
        <label> lastname:
          <input type="text" onChange={this.updateEmail} value={this.state.email}></input>
        </label>
      </div>);
      let buttonDisplay = 'Sign Up';
    } else {
      const buttonDisplay = 'Log In';
    }
    debugger;
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
           { signupField }
          <label> Email:
            <input type="text" onChange={this.updateEmail} value={this.state.email}></input>
          </label>
          <label> Password:
            <input type="password" onChange={this.updatePassword} value={this.state.password}></input>
          </label>
          <button type="submit">{buttonDisplay}</button>
        </form>
      </div>
    );
  }
}

export default SessionForm;
