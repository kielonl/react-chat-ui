import React, { useState } from "react";
import "./LoginFrom.css";
class NameForm extends React.Component {
  sends = (event) => {};
  /*
  axios = {
    method: "post",
    url: "/users",
    data: {
      name: this.state.user,
      password: this.state.password,
    },
  };
  */
  render() {
    return (
      <div id="fromlog">
        <form>
          <label>
            USER:
            <input type={"text"} name="user" />
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default NameForm;
