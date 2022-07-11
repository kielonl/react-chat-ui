import React, { useState } from "react";
import "./from.css";
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
      <form>
        <label>
          USER:
          <input type={"text"} name="user" />
        </label>
        <label>
          Password:
          <input type={"password"} name="password" />
        </label>
        <button>Submit</button>
      </form>
    );
  }
}
export default NameForm;
