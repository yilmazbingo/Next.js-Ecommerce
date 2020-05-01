import React, { useState } from "react";
import useInput from "../../customHooks/formOnChange";
import Input from "./Input";
import CustomButton from "../buttons/CustomButton";

const SignIn = () => {
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Input
          type="email"
          name="email"
          value={email}
          handleChange={setEmail}
          required
          label="email"
        />
        <Input
          type="password"
          name="email"
          value={password}
          handleChange={setPassword}
          required
          label="password"
        />
        <CustomButton type="submit">Sign In</CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
