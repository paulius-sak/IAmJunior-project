import styles from "./CategoryList.module.scss";
import CategoryCard from "../CategoryCard/CategoryCard";
import { CategoryListProps } from "../../../../types/categories";


const CategoryList = ({categories}: CategoryListProps ) => {
  return (
    <section className={styles.wrapper}>
      {categories.map((category) => (
        <CategoryCard key={category._id} category={category} />
      ))}
    </section>
  );
};

export default CategoryList;
