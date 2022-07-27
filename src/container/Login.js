import React, { useState } from "react";
import axios from "axios";
import "./style/Login.css";
import { useNavigate } from "react-router-dom";
import setCookie from "./components/setCookie";
import ErrorBox from "./components/ErrorBox";
import removeCookie from "./components/rmCookie";
import { LAST_API_URL } from "../setup";
import ImagePreview from "./components/imagePreview";
const url = LAST_API_URL + "/users";
const Login = (props) => {
  const [username, setName] = useState("");
  const [imageUrl, setUrl] = useState("");
  const [image, setImage] = useState("");
  const [imagePrev, setImagePrev] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});
  const urlPattern = new RegExp("(https?://.*.(?:png|jpg|webp|jpeg))");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post(url, {
        username: username,
        imageUrl: image || imageUrl,
      })
      .then(function (response) {
        removeCookie("user");
        props.setUser(response.data);
        console.log(JSON.stringify(response.data));
        setCookie("user", JSON.stringify(response.data));
        navigate("/home");
        setErrorMessage({
          value: "",
          isError: false,
        });
      })
      .catch(function (error) {
        // setErrorMessage({
        //   value: error.response.data.errorMessage,
        //   isError: true,
        // });
        console.log(error);
      });
  };
  const selectImage = (e) => {
    const [file] = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
      setImagePrev(true);
    };
    setImage("");
  };
  return (
    <div className="login-text">
      <div className="login-inputs">
        <h1 id="upertext">Enter the space</h1>
        <p className="input_text_above">Username</p>
        <input
          type={"text"}
          name="user"
          value={username}
          autoComplete="off"
          className="text-input"
          onChange={(e) => setName(e.target.value)}
        />
        <p className="input_text_above">Image</p>
        <div className="image-inputs">
          <input
            type={"text"}
            name="url"
            value={imageUrl}
            autoComplete="off"
            className="text-input image-input"
            onChange={(e) => {
              setUrl(e.target.value);
              urlPattern.test(imageUrl)
                ? setImagePrev(true)
                : setImagePrev(false);
            }}
          />
          <input
            type="file"
            id="files"
            onChange={selectImage}
            className="hidden"
            accept="image/*"
          />
          <label for="files" className="login-select-image">
            Select Image
          </label>
        </div>
        {/* <p className="image-format-info">(jpg,jpeg,png)</p> */}
        <ImagePreview source={image || imageUrl} display={imagePrev} />
        <div id="button">
          <button className="loginButton" onClick={handleSubmit}>
            Log in
          </button>
        </div>
        <ErrorBox error={errorMessage.value} ifError={errorMessage.isError} />
      </div>
    </div>
  );
};
export default Login;
