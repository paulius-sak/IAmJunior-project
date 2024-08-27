import styles from "./LoginForm.module.scss";
import { useState } from "react";
import Button from "../Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../router/consts";
import LoginSocial from "./LoginSocial/LoginSocial";
import { FetchLoginUser } from "../../api/users";
import { useUser } from "../../context/UserContext"; // Import the useUser hook

const LoginForm = () => {
  const [isError, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const navigate = useNavigate();
  const { login } = useUser(); // Get the login function from context

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email || !password) {
      setError(true);
      setErrorMessage("* Please fill all inputs");
      return;
    }

    try {
      const response = await FetchLoginUser(email, password);

      // Assuming FetchLoginUser returns an object with token and user info
      const { token, user } = response;

      // Save token to local storage
      localStorage.setItem('token', token);

      // Set user data in context
      login(user);

      // Redirect to home page
      navigate(ROUTES.HOME);
    } catch (error) {
      console.error("Login failed:", error);
      setError(true);
      setErrorMessage("* Email or password is incorrect.");
    }
  };

  return (
    <>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <div className={styles.wrapper}>
          <h3 className={styles.title}>Please enter your email and password</h3>
          <div className={styles.input}>
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <small className={styles.error}>{isError && !email && "Email is required"}</small>
          </div>
          <div className={styles.input}>
            <input
              placeholder="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <small className={styles.error}>{isError && !password && "Password is required"}</small>
          </div>
          <Button type="submit">Login</Button>
          {isError && (
            <small className={styles.error}>{errorMessage}</small>
          )}
          <LoginSocial />
        </div>
        <Link className={styles.link} to={ROUTES.SIGN_IN}>Don’t have an account? Sign up</Link>
      </form>
    </>
  );
};

export default LoginForm;