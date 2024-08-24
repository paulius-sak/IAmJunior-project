import styles from "./BusinessList.module.scss";
import BusinessCard from "../BusinessCard/BusinessCard";
import classNames from "classnames";
import businesses from "../../../../constants/Businesses";

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

interface BusinessListProps {
  category?: string;
  className?: string;
}

const BusinessList = ({ category, className }: BusinessListProps) => {
  const filteredBusinesses = category
    ? businesses.filter((business) => business.category === category)
    : businesses;
  return (
    <div className={classNames(styles.wrapper, className)}>
      {filteredBusinesses.map((business) => (
        <BusinessCard key={business._id} business={business} />
      ))}
    </div>
  );
};

export default BusinessList;
