import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "./../../State/firebase";
import { actionTypes } from "./../../State/reducer";
import { useStateValue } from "./../../State/StateProvider";
import { SetLocalStore } from "./../../State/LocalStorage";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        const _2hrs = 2 * 60 * 60 * 1000;
        SetLocalStore(result.user.email, result.user, _2hrs);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        console.log(result);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt=""
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
