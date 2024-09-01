import styles from "./BusinessCredentials.module.scss";
import { Business as BusinessType } from "../../types/business";

interface BusinessCredentialsProps {
  business: BusinessType;
}

const BusinessCredentials: React.FC<BusinessCredentialsProps> = ({
  business,
}) => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.avatar}>
        <img src={business.images[0]?.url} alt={`${business.name} Image`} />
      </section>
      <section className={styles.credentials}>
        <span className={styles.chip}>{business.category}</span>
        <h2>{business.name}</h2>
        <h4>Address: {business.address}</h4>
        <h4>Email: {business.email}</h4>
      </section>
    </div>
  );
};

export default BusinessCredentials;
