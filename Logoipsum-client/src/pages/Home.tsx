import Hero from "../components/Hero/Hero";
import CategoryList from "../components/home/category/CategoryList/CategoryList";
import styles from "./Home.module.scss";
import BusinessList from "../components/home/business/BusinessList/BusinessList";
import { fetchCategories } from "../../src/api/categories";
import { useState, useEffect } from "react";
import { Category, CategoriesResponse } from "../types/categories";

const Home = () => {
  const [categories, setCategories] = useState<Category[]>([]);

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

  return (
    <div>
      <Hero />
      <CategoryList categories={categories} />
      <h2 className={styles.title}>Popular Business</h2>
      <BusinessList />
    </div>
  );
};

export default Home;
