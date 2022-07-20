import axios from "axios";
import React, { useState, useEffect } from "react";
const userURL = "http://localhost:8080/users";
const Users = () => {
  const ChannelUsers = [];
  const [Data, setDate] = useState([]);
  useEffect(() => {
    axios.get(userURL).then((resp) => {
      setDate(resp.data);
      console.log(resp.data);
    });
  }, []);
  return (
    <>
      {Data.map((element, index) => {
        return <h1 className="menu-item">{element.username}</h1>;
      })}
    </>
  );
};

export default Users;
