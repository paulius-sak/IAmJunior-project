import PropTypes from "prop-types";
import styles from "./UrlIcon.module.scss";
import classNames from "classnames";

const UrlIcon = ({ className, style = {}, url }) => {
  return (
    <div
      className={classNames(styles.icon, className)}
      style={{
        maskImage: `url(${url})`,
        WebkitMaskImage: `url(${url})`,
        ...style,
      }}
    ></div>
  );
};

UrlIcon.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  url: PropTypes.string.isRequired,
};

export default UrlIcon;
