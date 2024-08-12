import styles from "./LoginSocial.module.scss";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const LoginSocial = () => {
  return (
    <section className={styles.wrapper}>
      <h4 className={styles.title}>Or login with</h4>
      <section className={styles.icons}>

        <Link to="/"><FaFacebook size="32px" color="#0866ff" /></Link>
        <Link to="/"><FaInstagram size="32px" color="#d62976" /></Link>
        <Link to="/"><FcGoogle size="32px" /></Link>
      </section>
    </section>
  );
};

export default LoginSocial;
