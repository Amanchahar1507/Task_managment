"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");

    const res = await fetch(
  `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email,
      password
    })
  }
);


    if (!res.ok) {
      setError("Invalid email or password");
      return;
    }

    const data = await res.json();
    localStorage.setItem("accessToken", data.accessToken);
    window.location.href = "/dashboard";
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Login</h2>

        {error && <p className="error">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>

        <div className="divider">OR</div>

        <p className="link-text">
          New user?{" "}
          <span onClick={() => (window.location.href = "/register")}>
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}
