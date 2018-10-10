import React from 'react';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    if (this.props.formType === 'signup') {
      this.state = {
        email: "",
        password: "",
        fname: "",
        lname: ""
      };
    } else {
      this.state = {
        email: "",
        password: "",
      };
    }
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(() => this.props.history.push('/'));
  }

  update(field){
    return (e) => this.setState({[field]: e.currentTarget.value});
  }

  render() {
    let buttonType = "Log In";

    //changing the button when there is a sign up;
    if (this.props.formType === 'signup') {
      buttonType = "Sign Up";
    }

    //input fname and lname for the sign table
    let signupForm = (this.props.formType === 'signup') ?
      (<div>
          <label> fname:
            <input type="text"
              onChange={this.update('fname')}
              value={this.state.fname}>
            </input>
          </label>

          <label> lastname:
            <input type="text"
              onChange={this.update('lname')}
              value={this.state.lname}></input>
          </label>
      </div>) : ("");

    //regular login form
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
           { signupForm }
          <label> Email:
            <input type="text"
              onChange={this.update('email')}
              value={this.state.email}>
            </input>
          </label>

          <label> Password:
            <input type="password"
              onChange={this.update('password')}
              value={this.state.password}>
            </input>
          </label>

          <button type="submit">{buttonType}</button>
        </form>
      </div>
    );
  }
}

export default SessionForm;
