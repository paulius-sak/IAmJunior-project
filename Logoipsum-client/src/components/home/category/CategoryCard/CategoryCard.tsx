import { useNavigate, generatePath } from "react-router-dom";
import styles from "./CategoryCard.module.scss";
import UrlIcon from "../../../common/UrlIcon";
import { ROUTES } from "../../../../router/consts";
import { Category } from "../../../../types/categories";


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


export default CategoryCard;
