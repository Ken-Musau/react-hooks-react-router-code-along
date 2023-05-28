import React from "react";

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <p>Fill Data below to login in</p>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <input type="submit" value="Log In" />
      </form>
    </div>
  );
}

export default Login;
