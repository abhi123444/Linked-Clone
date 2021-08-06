import React, { useEffect, useState } from 'react';
import './login.css';
import { useDispatch } from "react-redux";
import { login} from "./features/userSlice";
import { auth } from "./firebase";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();
 
  const loginHandler = async(e) => {
    e.preventDefault();
    try {
      const userAuth = await auth.signInWithEmailAndPassword(email, password);

      dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          photoUrl: userAuth.user.photoURL,
        })
      );
    } catch (error) {
      alert(error);
    }
  }
  const registerHandler = async() =>{
      if(!name){
          return alert("Please enter a full Name");
      }
      try {
          const userAuth = await auth.createUserWithEmailAndPassword(email,password);
          
          await userAuth.user.updateProfile({
              displayName:name,
              photoURL:profilePic,
          });
          console.log(userAuth.user);
          dispatch(login({
            email:userAuth.user.email,
            uid:userAuth.user.uid,
            displayName:name,
            photoUrl:profilePic,
          }));

      } catch (error) {
        console.log(error);
        alert(error);
      }
  }
    return (
        <div className="login">
            <img 
                src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png"
                alt=""
            />
            <form>
                <input 
                    placeholder="Full name (require for register)"
                    type="text"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                />
                <input
                    placeholder="Profile pic URL (optional)"
                    type="text"
                    value={profilePic}
                    onChange={(e) => setProfilePic(e.target.value)}
                />
                <input
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit" className="login__btn"onClick={loginHandler}>
                    Sign In
                </button>
            </form>
            <button type="submit" className="login__btn" onClick={registerHandler}>
                Register Now
            </button>
        </div>
    );
}

export default Login;