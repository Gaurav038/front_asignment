import React, { useEffect, useState } from "react";
import Gallery from "../Component/Gallery";
import MainSearch from "../Component/MainSearch";
import { BASE_URL } from "../API";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home({ user }) {
  const [word, setWord] = useState("");
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(user);
  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
  }
  const changePhoto = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}?word=${word}`);
      setResult(res.data);
    } catch (error) {
      console(error.message);
    }
    setLoading(false);
  };

  const changeSearchWord = (value) => {
    setWord(value);
  };

  useEffect(() => {
    changePhoto();
  }, [word]);

  return (
    <>
      <MainSearch changeWord={changeSearchWord} />
      {loading ? (
        <div style={{ textAlign: "center" }}>loading data .....</div>
      ) : (
        <Gallery result={result} />
      )}
    </>
  );
}

export default Home;
