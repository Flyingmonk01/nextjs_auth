import Link from "next/link";
import "./signup.css";

export default function signUp() {
  return (
    <div id="main">
      <div id="signup">
        <h1>Sign Up </h1>
        <div className="signupForm">
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" placeholder="Enter your username.. " />
          </div>
          <div>
            <label htmlFor="username">Email:</label>
            <input type="text" placeholder="Enter your email.. " />
          </div>
          <div>
            <label htmlFor="username">Password:</label>
            <input type="password" placeholder="Enter your password.. " />
          </div>
          <button>SignUp</button>
          <Link href={'/login'}>Existing User</Link>
        </div>
      </div>
    </div>
  );
}
