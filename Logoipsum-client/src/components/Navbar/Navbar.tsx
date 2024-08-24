import styles from "./Navbar.module.scss";
import Logo from "../../assets/logo.svg";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { ROUTES } from "../../router/consts";

interface Links {
  id: string;
  label: string;
  href: string;
}
interface LinksProps {
  links: Links[];
}

const Navbar = ({ links }: LinksProps) => {
  return (
    <section className={styles.wrapper}>
      <section className={styles.logoMenuWrapper}>
        <Link to={ROUTES.HOME}>
          <img src={Logo} alt="logo" />
        </Link>
        <nav className={styles.menu}>
          <ul className={styles.links}>
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </section>
      <section className={styles.buttonWrapper}>
        <Link to={ROUTES.LOGIN}>
          <Button> Login / Sign Up</Button>
        </Link>
      </section>
    </section>
  );
};

export default Navbar;
