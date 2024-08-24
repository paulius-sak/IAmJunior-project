import { useParams } from "react-router-dom";
import VerticalCategoryList from "../components/categoryVertical/VerticalCategoryList";
import styles from "./SearchCategory.module.scss";
import BusinessList from "../components/home/business/BusinessList/BusinessList";

const SearchCategory = () => {
  const { category } = useParams();
  
  return (
    <div className={styles.container}>
      <div className={styles.categories}>
        <VerticalCategoryList />
      </div>
      <div className={styles.categoryContainer}>
        <h2 className={styles.title}>{category}</h2>
        <BusinessList category={category} className={styles.businessList} />
      </div>
    </div>
  );
};

export default SearchCategory;
