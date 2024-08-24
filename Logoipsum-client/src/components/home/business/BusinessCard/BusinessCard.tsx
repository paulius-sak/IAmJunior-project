import styles from "./BusinessCard.module.scss";
import Button from "../../../Button/Button";
import { FaRegStar } from "react-icons/fa";
// import { FaStar } from "react-icons/fa";

interface Image {
  url: string;
}

interface Business {
  _id: string;
  name: string;
  about?: string;
  address: string;
  category: string;
  contactPerson: string;
  email: string;
  images: Image[];
}

interface BusinessCardProps {
  business: Business;
}

const BusinessCard = ({ business }: BusinessCardProps) => {
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


export default BusinessCard;
