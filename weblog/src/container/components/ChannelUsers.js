import React from "react";
const ChannelUsers = [
  {
    username: "user1",
    id: "1",
  },
  {
    username: "user2",
    id: "2",
  },
  {
    username: "user2",
    id: "2",
  },
  {
    username: "user2",
    id: "2",
  },
  {
    username: "user2",
    id: "2",
  },
  {
    username: "user2",
    id: "2",
  },
  {
    username: "user2",
    id: "2",
  },
  {
    username: "user2",
    id: "2",
  },
];
const Users = () => {
  return (
    <>
      {ChannelUsers.map((element, index) => {
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
