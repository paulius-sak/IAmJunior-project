import Hero from "../components/Hero/Hero";
import CategoryList from "../components/home/category/CategoryList/CategoryList";
import styles from "./Home.module.scss";
import BusinessList from "../components/home/business/BusinessList/BusinessList";
import { fetchCategories } from "../../src/api/categories";
import { useState, useEffect } from "react";
import { Category, CategoriesResponse } from "../types/categories";
import { Business, BusinessesResponse } from "../types/business";
import { fetchBusinesses } from "../api/businesses";
import Spinner from "../components/common/Spinner";

const Home = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchCategories()
      .then((response: CategoriesResponse) => {
        setCategories(response.categories);
      })
      .catch((error) => {
        console.log(error);
        setCategories([]);
      });
  }, []);

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
    <div>
      <Hero />
      <CategoryList categories={categories} />
      <h2 className={styles.title}>Popular Business</h2>
      {loading ? <Spinner /> : <BusinessList businesses={businesses} />}
    </div>
  );
};

export default Home;
