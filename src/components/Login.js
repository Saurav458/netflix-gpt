import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from 'react-redux'
import { addUser,errorUser } from '../utils/userSlice'
import { useNavigate } from "react-router-dom";
import { USER_AVATAR } from "../utils/constants";
const Login = () => {
  const browse="browse"
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);
  const toggleForm = () => {
    setErrorMessage("")
    setIsSignInForm(!isSignInForm);
  };
  const handleChange = () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value,
       fullName?.current?.value
    );
    setErrorMessage(message);
    if (message) return;
    if (isSignInForm) {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const userSignIn = userCredential.user;
          dispatch(addUser(userSignIn))

          navigate("/browse")

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+" -"+errorMessage)
          dispatch(errorUser(errorCode+" -"+errorMessage))

        });

      return;
    }
    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        const userSgnUp = userCredential.user;
        updateProfile(userSgnUp, {
          displayName: fullName.current.value,
          photoURL: "https://avatars.githubusercontent.com/u/62419302?v=4",
        })
          .then(() => {
            // const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(
              addUser( auth.currentUser)
            );
          })
          .catch((error) => {
            setErrorMessage(error.message);
          });
        navigate("/browse")
        // dispatch(addUser(userSgnUp)) 
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + " - " + errorMessage);
        dispatch(errorUser(errorCode+" -"+errorMessage))
      });
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form
        className="absolute p-12 bg-black w-3/12 my-36  mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl py-4 m-2 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="p-2 m-2 w-full bg-gray-800 rounded-lg"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 m-2 w-full bg-gray-800 rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 m-2 w-full bg-gray-800 rounded-lg"
        />
        <p className="text-red-500 p-2">{errorMessage}</p>

        <button
          className="p-4 m-2 bg-red-800 w-full rounded-lg"
          type="submit"
          onClick={handleChange}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleForm}>
          {isSignInForm
            ? " New to Netflix? Sign Up Now"
            : "Already registered Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
