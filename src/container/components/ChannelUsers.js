import axios from "axios";
import React, { useState, useEffect } from "react";
const userURL = " http://192.168.56.1:8080/users";
const Users = () => {
  const [data, setDate] = useState([]);
  useEffect(() => {
    axios.get(userURL).then((resp) => {
      setDate(resp.data);
    });
  }, []);
  return (
    <>
      {data.map((element, index) => {
        return (
          <h1 key={index} className="menu-item">
            {element.username}
          </h1>
        );
      })}
    </>
  );
};
export default Users;
