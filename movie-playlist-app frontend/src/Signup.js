import React from "react";
import { GoogleLogin } from "@matheusluizn/react-google-login";

const Signup = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <div>
      <h2>Signup</h2>
      <GoogleLogin
        clientId=""
        buttonText="Signup with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default Signup;