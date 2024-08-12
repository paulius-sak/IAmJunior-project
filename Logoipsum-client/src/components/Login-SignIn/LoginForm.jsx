import styles from "./LoginForm.module.scss";
import { useState } from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { ROUTES } from "../../router/consts";
import LoginSocial from "./LoginSocial/LoginSocial";

const LoginForm = () => {
  const [isError, setError] = useState(true);

  // const handleKeyDown = (event) => {
  //   if (event.key === "Enter") {
  //     onLogin();
  //   }
  // };

  return (
    <>
      <form className={styles.loginForm} action="#">
        <div className={styles.wrapper}>
          <h3 className={styles.title}>Please enter your email and password</h3>
          <div className={styles.input}>
            <input
              type="text"
              placeholder="email"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              // onKeyDown={handleKeyDown}
              required
            />
            <small className={styles.error}>error</small>
          </div>
          <div className={styles.input}>
            <input
              type="password"
              placeholder="password"
              // type={showPassword ? "text" : "password"}
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              // onKeyDown={handleKeyDown}
              required
            />
            <small className={styles.error}>error</small>
          </div>
          <Button type="submit">Login</Button>
          {isError && (
            <small className={styles.error}>* please fill all inputs</small>
          )}
          <LoginSocial/>
        </div>
        <Link className={styles.link} to={ROUTES.SIGN_IN}>Don`t have an account? Sign up</Link>
      </form>
      
    </>
  );
};

export default LoginForm;
