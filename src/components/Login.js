import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const availableUsers = ["Alice", "Bob", "Charlie", "Dave", "Eve"]; // Dostupní uživatelé

  const handleLogin = () => {
    if (username && availableUsers.includes(username)) {
      onLogin(username);
    } else {
      alert("Vyberte platného uživatele.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20vh" }}>
      <h2>Přihlášení</h2>
      <select
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ padding: "10px", fontSize: "16px", margin: "10px" }}
      >
        <option value="">--Vyberte uživatele--</option>
        {availableUsers.map((user) => (
          <option key={user} value={user}>
            {user}
          </option>
        ))}
      </select>
      <button
        onClick={handleLogin}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Přihlásit se
      </button>
    </div>
  );
};

export default Login;
