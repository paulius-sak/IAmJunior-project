import styles from "./CategoryList.module.scss";
import categories from "../../../../constants/Categories";
import CategoryCard from "../CategoryCard/CategoryCard";


const CategoryList = () => {
  return (
    <section className={styles.wrapper}>
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </section>
  );
};

export default CategoryList;
