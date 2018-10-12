import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        email: "",
        password: "",
        fname: "",
        lname: ""
      }
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount(){
    this.props.resetErrors();
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


  renderErrors() {
    let newErrors = [];

    if (this.props.errors.session.length > 0) {
      newErrors = this.props.errors.session.slice();
    } else if (this.props.errors.signup.length > 0) {
      newErrors = this.props.errors.signup.slice();
    } else if (this.props.errors.logout.length > 0){
      newErrors = this.props.errors.logout.slice();
    }

    if (newErrors.length > 0) {
      return (
        <div className="signup-errors">
          <ul className="signup-errors-list">
            { newErrors.map((error, i) =>
              (<li key={`error-${i}`}> { error }</li> )
            )}
          </ul>
        </div>
      );
    }
  }

  render() {
    let buttonType = "Log In";
    let footer = (<p>New to Yip?</p>)
    let link = (<Link to="/signup">Sign up</Link>);

    if (this.props.formType === 'signup') {
      buttonType = "Sign Up";
      footer = (<p>Already on Yip?</p>)
      link = (<Link to="/login">Log In</Link>);
    }

    //input fname and lname for the sign table
    let signupForm = (this.props.formType === 'signup') ?
      (<div>
          <h2> Sign Up for Yip</h2>
          <h3>Connect with great local businesses</h3>
          <p> By signing up, you agree to Yip's <a href="/">Terms of Service</a> and <a href="/">Privacy Policy</a></p>
          <input type="text"
            onChange={this.update('fname')}
            value={this.state.fname} placeholder="First Name" className="signup-input">
          </input>


          <input type="text"
            onChange={this.update('lname')}
            value={this.state.lname} placeholder="Last Name" className="signup-input">
          </input>

      </div>) : (
        <div>
          <h2> Log In to Yip</h2>
          <h3>New to Yip? <Link to="/signup" className="signup-link">Sign up</Link></h3>
          <p> By logging in, you agree to Yip's <a href="/">Terms of Service</a> and <a href="/">Privacy Policy</a></p>
        </div>
      );
    //regular login form
    return (
      <div>
        <header className="session-form-nav">
          <Link to="/">Yip!</Link>
        </header>

        <div className="session-container">
          { this.renderErrors() }
          <div className="session-form-content">

            <div className="session-form-container">

              <form onSubmit={this.handleSubmit}>
                { signupForm }
                <input type="email"
                  onChange={this.update('email')}
                  value={this.state.email} placeholder="Email" className="login-input">
                </input>

                <input type="password"
                  onChange={this.update('password')}
                  value={this.state.password} placeholder="Password" className="login-input">
                </input>


                <button type="submit" className="session-button">{buttonType}</button>
                <div className="footer">
                  { footer }
                  { link }
                </div>

              </form>
            </div>

            <img src="https://s3-media4.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png" alt="illustration"></img>

          </div>

        </div>
      </div>
    );
  }
}

export default SessionForm;
