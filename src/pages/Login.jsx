// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const matchedUser = storedUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (matchedUser) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUser", JSON.stringify(matchedUser));
      navigate("/home");
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login to E-Shop</h2>
      <form onSubmit={handleLogin} className="auth-form">
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <div className="password-input">
          <input className="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
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

        <button type="submit">Login</button>
        {error && <p className="error-msg">{error}</p>}
      </form>
      <p>
        Don't have an account? <a href="/register">Register here</a>
      </p>
    </div>
  );
};

export default Login;
