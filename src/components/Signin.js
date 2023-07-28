import "../style/Signup.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [signinData, setSigninData] = useState({
    email: "",
    password: "",
  });

  const [errMsg, setErrMsg] = useState("");

  const nav = useNavigate();

  const onInput = (e) => {
    const { name, value } = e.target;
    setSigninData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = async () => {
    try {
      const res = await axios.post("/api/signin", signinData);
      if (res) {
        nav("/welcome");
      }
    } catch (error) {
      setErrMsg(error.response.data.message);
    }
  };

  return (
    <div className="auth-box">
      <h6> {errMsg} </h6>
      <input
        onChange={(e) => onInput(e)}
        className="auth-input"
        type="text"
        placeholder="Email"
        name="email"
      />
      <input
        onChange={(e) => onInput(e)}
        className="auth-input"
        type="text"
        placeholder="Password"
        name="password"
      />

      <button onClick={handleClick} className="btn">
        Sign in
      </button>
    </div>
  );
};

export default Signin;
