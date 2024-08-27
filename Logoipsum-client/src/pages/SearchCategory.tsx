import { useParams } from "react-router-dom";
import VerticalCategoryList from "../components/categoryVertical/VerticalCategoryList";
import styles from "./SearchCategory.module.scss";
import BusinessList from "../components/home/business/BusinessList/BusinessList";
import { useEffect, useState } from "react";
import { fetchBusinesses } from "../api/businesses";
import { Business, BusinessesResponse } from "../types/business";

const SearchCategory = () => {
  const { category } = useParams();

  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [loading, setLoading] = useState<boolean>(true);


  useEffect(() => {
    fetchBusinesses()
      .then((response: BusinessesResponse) => {
        setBusinesses(response.businesses);
        console.log("home response", response);
      })
      .catch((error) => {
        console.log(error);
        setBusinesses([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  
  return (
    <div className={styles.container}>
      <div className={styles.categories}>
        <VerticalCategoryList />
      </div>
      <div className={styles.categoryContainer}>
        <h2 className={styles.title}>{category}</h2>
        <BusinessList businesses={businesses} category={category} className={styles.businessList} />
      </div>
    </div>
  );
};

export default SearchCategory;
