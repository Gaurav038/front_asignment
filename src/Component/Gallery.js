import React, { useState } from "react";
import "./gallery.css";


function Gallery({ result }) {

  return (
    <>
      <div className="gallery">
        {result.length > 0 && result.map((value) => {
          return (
            <div
              className="wrapper"
              key={value._id}
            >
              <img className="main-image" src={value.image} alt="" />

              <div className="user">
                  <div className="userName">
                    <p>{value.name}</p>
                  </div>
              </div>
            </div>
          );
        })}
      </div>

    </>
  );
}

export default Gallery;