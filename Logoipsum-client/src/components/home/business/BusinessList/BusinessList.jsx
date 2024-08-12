import styles from "./BusinessList.module.scss";
import BusinessCard from "../BusinessCard/BusinessCard";
import classNames from "classnames";
import PropTypes from "prop-types";
import businesses from "../../../../constants/Businesses";

const BusinessList = ({category, className }) => {
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

BusinessList.propTypes = {
  businesses: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ),
  category: PropTypes.string,
  className: PropTypes.string,
};


export default BusinessList;
