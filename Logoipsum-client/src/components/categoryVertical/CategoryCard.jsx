import { useNavigate, generatePath, useParams } from "react-router-dom";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./CategoryCard.module.scss";
import UrlIcon from "../common/UrlIcon";
import { ROUTES } from "../../router/consts";

const CategoryCard = ({ category }) => {
  const params = useParams();
  const { name } = category;
  const navigate = useNavigate();

  const categoryPath = generatePath(ROUTES.SEARCH_CATEGORY, { category: name });
  const activeCategory = params.category;

  return (
    <section
      className={classNames(
        styles.card,
        activeCategory === name && styles.active
      )}
      onClick={() => navigate(categoryPath)}
    >
      <UrlIcon
        url={category.url}
        style={{ width: 48, height: 48, backgroundColor: category.color }}
      />
      <p className={styles.name}>{name}</p>
    </section>
  );
};

CategoryCard.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default CategoryCard;
