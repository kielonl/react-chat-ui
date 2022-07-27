import React from "react";
import "../style/imagePreview.css";
const ImagePrev = (props) => {
  return (
    <img
      src={props.source}
      className={props.display ? "preview-true image-preview" : "preview-false"}
      alt="image-preview"
    />
  );
};
export default ImagePrev;
