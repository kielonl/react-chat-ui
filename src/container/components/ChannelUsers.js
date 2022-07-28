import React, { useState } from "react";
import { SOCKET_URL } from "../../setup";
import io from "socket.io-client";

const ENDPOINT = SOCKET_URL;
let socket = io(ENDPOINT);
const Users = (props) => {
  const [users, setUsers] = useState([]);

  const updateList = (userList) => {
    const newRoom = props.channel;
    setUsers(userList.filter((user) => user.channel === newRoom));
    console.log(users);
  };
  socket.on("userList", updateList);
  // socket.on("bye", deleteUser);
  return (
    <div>
      Channel users list:
      {users.map((person) => {
        return <p className="menu-item">{person.username}</p>;
      })}
    </div>

    //   <p className="menu-item">{person}</p>
    // ));
    // return <p>{userss}</p>;
  );
};
export default Users;
