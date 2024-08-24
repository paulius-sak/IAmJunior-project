import { useNavigate, generatePath, useParams } from "react-router-dom";
import classNames from "classnames";
import styles from "./CategoryCard.module.scss";
import UrlIcon from "../common/UrlIcon";
import { ROUTES } from "../../router/consts";

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


export default CategoryCard;
