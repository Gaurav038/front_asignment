import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../API";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);

    try {
      await axios.post(`${BASE_URL}/upload`, formData);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form className="loginForm" onSubmit={handleSubmit}>
        <div className="loginEmail">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="loginPassword">
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>
        <input type="submit" value="Upload Image" className="loginBtn" />
      </form>
    </>
  );
};

export default Upload;
