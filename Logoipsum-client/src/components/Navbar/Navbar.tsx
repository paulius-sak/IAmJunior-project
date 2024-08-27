import styles from "./Navbar.module.scss";
import Logo from "../../assets/logo.svg";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { ROUTES } from "../../router/consts";
import { User } from "../../types/users";
import Avatar from "../Avatar/Avatar";

interface Links {
  id: string;
  label: string;
  href: string;
}
interface NavbarProps {
  links: Links[];
  user: User | null;
}

const Navbar = ({ links, user }: NavbarProps) => {
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
        {user ? (
          <Avatar>{user.email[0]}</Avatar>
        ) : (
          <Link to={ROUTES.LOGIN}>
            <Button> Login / Sign Up</Button>
          </Link>
        )}
      </section>
    </section>
  );
};

export default Navbar;
