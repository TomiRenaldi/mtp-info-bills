import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulasi otentikasi sederhana
    if (username === "admin" && password === "password") {
      localStorage.setItem("isAuthenticated", true);
      navigate("/admin"); // Redirect ke halaman admin setelah login
    } else {
      alert("Username atau password salah");
    }
  };

  return (
    <div>
      <h2>Login Admin</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
