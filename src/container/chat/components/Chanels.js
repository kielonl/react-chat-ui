import axios from "axios";
import React, { useEffect, useState } from "react";
import "../style/Chanels.css";
const Chanels = () => {
  const UsersUrl = "http://localhost:8080/users";
  const [data, setDate] = useState([]);
  const [serviceList, setServiceList] = useState([{ service: "" }]);
  const handleSubmit = async (e) => {
    // console.log(channels);
    axios
      .get(UsersUrl)
      .then((resp) => {
        setDate(resp.data);
        console.log(setDate);
      })
      .catch((err) => console.log(err));
  };
  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
  };

  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };

  const handleServiceAdd = () => {
    setServiceList([...serviceList, { service: "" }]);
  };

  return (
    <div className="chanels-box">
      <div className="form-field">
        <label htmlFor="service">Service(s)</label>
        {serviceList.map((singleService, index) => (
          <div key={index} className="services">
            <div className="first-division">
              <input
                name="service"
                type="text"
                id="service"
                value={singleService.service}
                onChange={(e) => handleServiceChange(e, index)}
                required
              />
              {serviceList.length - 1 === index &&
                serviceList.length < 4 &&
                ((
                  <button
                    type="button"
                    onClick={handleServiceAdd}
                    className="add-btn"
                  >
                    <span>Add a Service</span>
                  </button>
                ),
                (
                  <span>
                    <button className="rtv" onClick={handleSubmit}>
                      klik
                    </button>
                  </span>
                ))}
            </div>
            <div className="second-division">
              {serviceList.length !== 1 && (
                <button
                  type="button"
                  onClick={() => handleServiceRemove(index)}
                  className="remove-btn"
                >
                  <span>Remove</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Chanels;

/*
 axios
      .post(sendurl, {
        userUid: UserUid,
        Chanel_name: Chanel_name,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });


  return (
    <div className="create-box-chanels">
      <p className="button-clik">
        Create a chanel by eneter a name && presing a button
      </p>
      <input
        type={"text"}
        className="name-chanel"
        value={Chanel_name}
        placeholder="enter name of oyur Chanel"
        autoComplete="off"
        onChange={(e) => setChanel_name(e.target.value)}
      ></input>
      <p></p>
      <button
        className="create-chanel-button"
        placeholder="Click to create a Chanels"
        onClick={handleSumibt}
      >
        Clik to create a Chanel
      </button>
    </div>
  );
};
<div className="output">
        <h2>Output</h2>
        {serviceList &&
          serviceList.map((singleService, index) => (
            <ul key={index}>
              {singleService.service && <li>{singleService.service}</li>}
            </ul>
          ))}
      </div>
      

*/
