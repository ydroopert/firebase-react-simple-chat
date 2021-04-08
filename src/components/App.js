import React from "react";
import './App.css';
import firebase from "firebase/app";
import { useAuthState } from 'react-firebase-hooks/auth';
import SignIn from "./SignIn";
import SignOut from "./SignOut";
import ChatRoom from "./ChatRoom";

firebase.initializeApp({
//* Your config
})

const auth = firebase.auth();

function App() {

  const [user] = useAuthState(auth);

  return ( <
    div className = "App" >
    <header >
    <SignOut / >
    </header>

    <section > {
      user ? < ChatRoom / > : < SignIn / >}
    </section>

    <
    /div>
  );
}
        export default App;
