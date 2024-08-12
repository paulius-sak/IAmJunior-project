import styles from "./BusinessCard.module.scss";
import Button from "../../../Button/Button";
import PropTypes from "prop-types";
import { FaRegStar } from "react-icons/fa";
// import { FaStar } from "react-icons/fa";

const BusinessCard = ({ business }) => {
  return (
    <div className={styles.card}>
      {business.images.length && (
        <img
          src={business.images[0].url}
          alt={business.name}
          className={styles.image}
        />
      )}
      <div className={styles.infoContainer}>
        <span className={styles.chip}>{business.category}</span>
        <h3 className={styles.name}>{business.name}</h3>
        <p className={styles.contactPerson}>{business.contactPerson}</p>
        <p className={styles.address}>{business.address}</p>
        <Button>Book now</Button>
      </div>

      <div className={styles.favoritesIconWrapper}>
        <button>
          <FaRegStar className={styles.icon} size="32px" />
        </button>
      </div>
    </div>
  );
};

BusinessCard.propTypes = {
  business: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    about: PropTypes.string,
    address: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    contactPerson: PropTypes.string,
    email: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

export default BusinessCard;
