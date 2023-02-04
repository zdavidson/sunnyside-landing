import React from "react";

const Gallery = () => {
  return (
    <div style={{ display: "flex" }}>
      <img
        style={{ width: "25%" }}
        src="./images/desktop/image-gallery-milkbottles.jpg"
        alt="gallery"
      />
      <img
        style={{ width: "25%" }}
        src="./images/desktop/image-gallery-orange.jpg"
        alt="gallery"
      />
      <img
        style={{ width: "25%" }}
        src="./images/desktop/image-gallery-cone.jpg"
        alt="gallery"
      />
      <img
        style={{ width: "25%" }}
        src="./images/desktop/image-gallery-sugarcubes.jpg"
        alt="gallery"
      />
    </div>
  );
};

export default Gallery;
