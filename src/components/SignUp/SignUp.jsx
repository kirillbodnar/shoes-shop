import React, { useState } from "react";
import styles from "./SignUp.module.css";

const SignUp = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agreeToTerms: false,
  });

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    if (!formData.agreeToTerms) {
      e.preventDefault();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabContainer}>
        <button
          className={`${styles.tab} ${
            activeTab === "login" ? styles.activeTab : ""
          }`}
          onClick={() => handleTabSwitch("login")}
        >
          Log in
        </button>
        <button
          className={`${styles.tab} ${
            activeTab === "signup" ? styles.activeTab : ""
          }`}
          onClick={() => handleTabSwitch("signup")}
        >
          Create account
        </button>
      </div>
      {activeTab === "login" ? (
        <form className={styles.form}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={styles.input}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={styles.input}
            required
          />
          <div className={styles.options}>
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className={styles.link}>
              Forgot password
            </a>
          </div>
          <button type="submit" className={styles.button}>
            Login
          </button>
          <p className={styles.terms}>
            By logging into my account, I agree to the{" "}
            <a href="#" className={styles.link}>
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a href="#" className={styles.link}>
              Privacy Policy
            </a>
            .
          </p>
        </form>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            className={styles.input}
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            className={styles.input}
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={styles.input}
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={styles.input}
            value={formData.password}
            onChange={handleChange}
            required
            pattern="(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
            title="Password must be at least 8 characters long, contain at least one uppercase letter, one number, and one special character (!@#$%^&*)."
          />
          <div className={styles.passwordRequirements}>
            <p>Password requirements:</p>
            <ul>
              <li>Minimum 8 characters</li>
              <li>At least one capital letter</li>
              <li>At least one number</li>
              <li>At least one special character (! @ # $ % & *)</li>
            </ul>
          </div>
          <label className={styles.checkboxContainer}>
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              required
            />{" "}
            By checking the box, you are creating an account with Orix and you
            agree to the{" "}
            <a href="#" className={styles.link}>
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a href="#" className={styles.link}>
              Privacy Policy
            </a>
            .
          </label>
          <button type="submit" className={styles.button}>
            Create account
          </button>
        </form>
      )}
    </div>
  );
};

export default SignUp;
