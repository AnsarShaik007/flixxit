import React, { useState } from "react";
import "./Signup.css";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { firebaseAuth } from "../../utils/firebase-config";
import { Navigate, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const handelLoginIn = async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (err) {
      console.log(err);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });
  return (
    <>
      <div className="mainsigncont">
        <div className="signcontainer">
          <div className="signcard">
            <h2>Sign up</h2>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formValues.email}
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <input
              type="password"
              name="password"
              value={formValues.password}
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
              placeholder="Password"
              required
            />
            <br />
            <button onClick={handelLoginIn}>Sign up</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
