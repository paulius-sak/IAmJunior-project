import  categories  from "../../constants/Categories";
import CategoryCard from "./CategoryCard";
import styles from "./VerticalCategoryList.module.scss";

const VerticalCategoryList = () => {
  return <section>
    <h2 className={styles.title}>Categories</h2>
    {categories.map((category) => (
        <CategoryCard key={category.id} category={category}/>
    ))}
    
  </section>;
};

export default VerticalCategoryList;
