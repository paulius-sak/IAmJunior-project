import styles from "./AvatarMenu.module.scss";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../router/consts";
import { useUser } from "../../../context/UserContext";

interface AvatarMenuProps {

    closeMenu: () => void;
  }

const AvatarMenu = ({ closeMenu}:AvatarMenuProps) => {
  const { logout } = useUser();

  const handleLogout = () => {
    logout(); 
    closeMenu(); 
  };

  const handleLinkClick = () => {
    closeMenu();
  };

  return (
    <section className={styles.wrapper}>
      <Link className={styles.myAccount} to={ROUTES.MYACCOUNT} onClick={handleLinkClick}>
        <strong>My Account</strong>
      </Link>

      <Link className={styles.myBooking} to={ROUTES.MYBOOKINGS} onClick={handleLinkClick}>
        My Bookings
      </Link>

      <button className={styles.logoutBtn} onClick={handleLogout}>
        Logout
      </button>
    </section>
  );
};

export default AvatarMenu;
