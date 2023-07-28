import "../style/Signup.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errMsg, setErrMsg] = useState("");

  const nav = useNavigate();

  const onDataChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prev) => ({ ...prev, [name]: value }));
  };

  const onRegister = async () => {
    try {
      const res = await axios.post("/api/signup", registerData);
      if (res) {
        nav("/signin");
      }
    } catch (error) {
      setErrMsg(error.response.data.message);
    }
  };

  return (
    <div className="auth-box">
      <h6> {errMsg} </h6>
      <input
        onChange={(e) => onDataChange(e)}
        className="auth-input"
        type="text"
        placeholder="First name"
        name="firstName"
      />
      <input
        onChange={(e) => onDataChange(e)}
        className="auth-input"
        type="text"
        placeholder="Last name"
        name="lastName"
      />
      <input
        onChange={(e) => onDataChange(e)}
        className="auth-input"
        type="text"
        placeholder="Email"
        name="email"
      />
      <input
        onChange={(e) => onDataChange(e)}
        className="auth-input"
        type="text"
        placeholder="Password"
        name="password"
      />

      <button onClick={onRegister} className="btn">
        Register
      </button>
    </div>
  );
};

export default Signup;
