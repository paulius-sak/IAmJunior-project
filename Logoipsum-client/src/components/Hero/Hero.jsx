import Button from "../Button/Button";
import styles from "./Hero.module.scss";
import Search from "./Search/Search";
import { CiSearch } from "react-icons/ci";

const Hero = () => {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>
        Find Home <span className={styles.primary}>Service/Repair</span>
        <br />
        Near You
      </h1>
      <p className={styles.subtitle}>
        Explore Best Home Service & Repair near you
      </p>
      <section className={styles.searchContainer}>
        <Search />
        <Button rounded>
          <div>
            <CiSearch fontSize={24} />
          </div>
        </Button>
      </section>
      
    </section>
  );
};

export default Hero;
