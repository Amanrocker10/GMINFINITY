import React from "react";
import { GoogleLogin } from "@matheusluizn/react-google-login";

const Login = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <div>
      <h2>Login</h2>
      <GoogleLogin
        clientId=""
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default Login;