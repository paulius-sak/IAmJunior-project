import { useNavigate, generatePath } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./CategoryCard.module.scss";
import UrlIcon from "../../../common/UrlIcon";
import { ROUTES } from "../../../../router/consts";

interface Category {
  id: number;
  name: string;
  color: string;
  url: string;
}

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const { name } = category;
  const navigate = useNavigate();

  const categoryPath = generatePath(ROUTES.SEARCH_CATEGORY, { category: name });

  return (
    <section className={styles.wrapper} onClick={() => navigate(categoryPath)}>
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
