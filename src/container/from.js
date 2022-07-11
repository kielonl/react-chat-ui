import React, { useState } from "react";
class NameForm extends React.Component {
  sends = (event) => {
    const user = this.state.user;
  };
  render() {
    return (
      <form method="POST">
        <label>
          USER:
          <input type="text" name="User" />
        </label>
        <button onClick={this.sends}>Submit</button>
      </form>
    );
  }
}
export default NameForm;
