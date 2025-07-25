// src/pages/Register.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (username.trim().length < 3 || password.trim().length < 3) {
      setError("Username and password must be at least 3 characters long.");
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = storedUsers.find((user) => user.username === username);

    if (userExists) {
      setError("Username already taken.");
    } else {
      const newUser = { username, password };
      storedUsers.push(newUser);
      localStorage.setItem("users", JSON.stringify(storedUsers));
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUser", JSON.stringify(newUser));
      navigate("/");
    }
  };

  return (
    <div className="auth-container">
      <h2>Create Account</h2>
      <form onSubmit={handleRegister} className="auth-form">
        <input
          type="text"
          placeholder="Choose a username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <div className="password-input">
          <input className="password"
            type={showPassword ? "text" : "password"}
            placeholder="Choose a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span
            className="toggle-eye"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙊" : "🙈"}
          </span>
        </div>

        <button type="submit">Register</button>
        {error && <p className="error-msg">{error}</p>}
      </form>
      <p>
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
};

export default Register;
