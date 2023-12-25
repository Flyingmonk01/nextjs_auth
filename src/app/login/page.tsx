import Link from "next/link";
import "./login.css";

export default function signUp() {
  return (
    <div id="main">
      <div id="login">
        <h1>Login </h1>
        <div className="loginForm">
          <div>
            <label htmlFor="username">Email:</label>
            <input type="text" placeholder="Enter your email.. " />
          </div>
          <div>
            <label htmlFor="username">Password:</label>
            <input type="password" placeholder="Enter your password.. " />
          </div>
          <button>Login</button>
          <Link href={'/signup'}>New User</Link>
        </div>
      </div>
    </div>
  );
}
