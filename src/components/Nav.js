import React from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const nav = useNavigate();
  return (
    <div>
      <nav className="nav">
        <h1>Authentication App</h1>
        <div className="auth">
          <h3 onClick={() => nav("/signup")}>Register</h3>
          <h3 onClick={() => nav("/signin")}>Sign in</h3>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
