import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Upload from "./Pages/Upload/Upload";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Signup/Login";
import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "./API";
import Navbar from "./Component/Navbar";

function App() {
  const [user, setUser] = useState("");
  const getAuth = async () => {
    try {
      const data = await axios.get(`${BASE_URL}/auth`, {
        withCredentials: true,
        credentials: "include",
      });
      setUser(data.data._id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAuth();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home user={user} />} />
        <Route exact path="/upload" element={<Upload user={user} />} />
        <Route exact path="/sign" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
