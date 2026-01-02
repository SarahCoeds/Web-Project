import "../Styling/Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.email,
          password: data.password
        })
      });

      const result = await res.json();

      if (!res.ok) {
        alert(result.message || "Login failed");
        return;
      }

      localStorage.setItem("biteUser", JSON.stringify(result));
      alert("Logged in!");
    } catch (err) {
      alert("Server error");
    }
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Your Email"
            value={data.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Your Password"
            value={data.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="login-btn">Submit</button>

        <p>
          Don’t have an account?{" "}
          <Link to="/signup" className="signup-link">Sign up</Link>
        </p>
      </form>
    </div>
  );
}
