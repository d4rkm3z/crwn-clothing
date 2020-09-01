import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitForm = (event) => {
    event.preventDefault();
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <div>
        <form>
          <FormInput
            label="Email"
            type="email"
            name="email"
            value={email}
            handleChange={({ target }) => setEmail(target.value)}
            required
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            value={password}
            handleChange={({ target }) => setPassword(target.value)}
            required
          />

          <input type="submit" value="Submit Form" />
        </form>
      </div>
    </div>
  );
}
