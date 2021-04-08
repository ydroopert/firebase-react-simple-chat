import React from "react";
import firebase from "firebase/app";

function SignInWithGoogle() {
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider);
}

export default SignInWithGoogle;
