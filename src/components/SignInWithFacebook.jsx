import React from "react";
import firebase from "firebase/app";

function SignInWithFacebook () {
  const auth = firebase.auth();
  const provider = new firebase.auth.FacebookAuthProvider();
  auth.signInWithPopup(provider);
}

export default SignInWithFacebook;
