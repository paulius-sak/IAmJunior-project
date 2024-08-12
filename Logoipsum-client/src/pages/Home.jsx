import Hero from "../components/Hero/Hero";
import CategoryList from "../components/home/category/CategoryList/CategoryList";
import styles from "./Home.module.scss";
import BusinessList from "../components/home/business/BusinessList/BusinessList";


const Home = () => {
  return (
    <div>
      <Hero />
      <CategoryList />
      <h2 className={styles.title}>Popular Business</h2>
      <BusinessList  />
    </div>
  );
};

export default Home;
