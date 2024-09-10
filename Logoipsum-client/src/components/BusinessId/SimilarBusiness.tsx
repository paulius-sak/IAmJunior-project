import { useEffect, useState } from "react";
import { Business as BusinessType } from "../../types/business";
import { fetchSimilarBusinesses } from "../../api/businesses";
import styles from "./SimilarBusiness.module.scss";
import { Link } from "react-router-dom";
import { ROUTES } from "../../router/consts";

interface SimilarBusinessProps {
  category: string;
  currentBusinessId: string;
}

const SimilarBusiness = ({
  category,
  currentBusinessId,
}: SimilarBusinessProps) => {
  const [similarBusinesses, setSimilarBusinesses] = useState<BusinessType[]>(
    []
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchSimilarBusinesses(category);

        const filteredBusinesses = response.businesses.filter(
          (business) => business._id !== currentBusinessId
        );
        setSimilarBusinesses(filteredBusinesses);
      } catch (err) {
        setError("Failed to fetch similar businesses");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category, currentBusinessId]);

  if (loading) return <div>Loading similar businesses...</div>;
  if (error) return <div>{error}</div>;
  if (similarBusinesses.length === 0)
    return <div>No similar businesses found.</div>;

  return (
    <section className={styles.similarBusinessWrapper}>
      <h3>Similar Businesses</h3>
      <ul>
        {similarBusinesses.map((business) => (
          <Link to={`${ROUTES.BUSINESS.replace(":id", business._id)}`}>
            <li className={styles.business} key={business._id}>
              <section className={styles.avatarSection}>
                <img
                  className={styles.similarAvatar}
                  src={business.images[0]?.url}
                  alt={`${business.name} Image`}
                />
              </section>
              <section className={styles.contactSection}>
                <h4>{business.name}</h4>
                <p>{business.contactPerson}</p>
                <p>{business.address}</p>
              </section>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default SimilarBusiness;
