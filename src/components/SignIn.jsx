import React, {
  useState
} from "react";
import firebase from "firebase/app";
import SignInWithGoogle from "./SignInWithGoogle";
import SignInWithFacebook from "./SignInWithFacebook";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

function SignIn() {
  const auth = firebase.auth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);

  const [
    createUserWithEmailAndPassword,
    user1,
    loading1,
    error1,
  ] = useCreateUserWithEmailAndPassword(auth);


  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <div>
        <p>Registered User: {user.email}</p>
      </div>
    );
  }

  if (error1) {
      return (
        <div>
          <p>Error: {error1.message}</p>
        </div>
      );
    }
    if (loading1) {
      return <p>Loading...</p>;
    }
    if (user1) {
      return (
        <div>
          <p>Signed In User: {user1.email}</p>
        </div>
      );
    }

  return ( <
    >

    <
    button className = "loginBtn loginBtn--google"
    onClick = {
      SignInWithGoogle
    } > Sign in with Google < /button>

    <
    button className = "loginBtn loginBtn--facebook"
    onClick = {
      SignInWithFacebook
    } > Sign in with Facebook < /button>

    <
    div className = "App" >
    <
    input type = "email"
    placeholder= "Email"
    value = {
      email
    }
    onChange = {
      (e) => setEmail(e.target.value)
    }
    />
    <input type = "password" placeholder= "Password" value = {password} onChange = {(e) => setPassword(e.target.value)}
    />
    <p className= "Regbutton">
    <button className = "sign-in"onClick={() => createUserWithEmailAndPassword(email, password)} >
    Register</button>


    <
    button className = "sign-in"
    onClick={() => signInWithEmailAndPassword(email, password)} > Sign - In < /button>
</p> </div>
    < / >
    )
  };

  export default SignIn;
