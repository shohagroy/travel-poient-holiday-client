import React, { Children, createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthProvaider = createContext();

const GobalContext = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState("");

  const auth = getAuth(app);

  // create user
  const createUserWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   user update
  const userProfileUpdate = (userName, photoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: userName,
      photoURL: photoUrl,
    });
  };

  // user Login
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // user log out
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser("");
        localStorage.removeItem("genius_token");
      })
      .catch((error) => {
        console.error(error);
        setUser("");
      });

    setLoading(false);
  };

  const googleSignIn = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // current user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUserWithEmail,
    userProfileUpdate,
    userLogin,
    userSignOut,
    googleSignIn,
    loading,
  };
  return (
    <AuthProvaider.Provider value={authInfo}>{children}</AuthProvaider.Provider>
  );
};

export default GobalContext;
