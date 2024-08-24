import PropTypes from "prop-types";
import styles from "./UrlIcon.module.scss";
import classNames from "classnames";

interface UrlIcon {
  url: string;
  className?: string;
  style: {};
}

const UrlIcon = ({ className, style, url }: UrlIcon) => {
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
