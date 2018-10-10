import React from "react";


class  signUpFormIndex extends React.Component {

}
  return (
    <div>
      <label> fname:
        <input type="text" onChange={this.updateEmail} value={this.state.email}></input>
      </label>
      <label> lastname:
        <input type="text" onChange={this.updateEmail} value={this.state.email}></input>
      </label>
    </div>
  );
}
