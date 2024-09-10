import { useParams } from "react-router-dom";
import { fetchBusinessesById } from "../api/businesses";
import { useEffect, useState } from "react";
import { Business as BusinessType } from "../types/business";
import Spinner from "../components/common/Spinner";
import BusinessCredentials from "../components/BusinessId/BusinessCredentials";
import Description from "../components/BusinessId/Description";
import Gallery from "../components/BusinessId/Gallery";
import styles from "./Business.module.scss";
import Appointment from "../components/BusinessId/Appointment";
import SimilarBusiness from "../components/BusinessId/SimilarBusiness";



const Business = () => {
  const [business, setBusiness] = useState<BusinessType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;
      try {
        const response = await fetchBusinessesById(id);
        setBusiness(response.business);
        console.log(response.business);
      } catch (err) {
        setError("Failed to fetch business");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <Spinner />;
  if (error) return <div>{error}</div>;
  if (!business) return <div>No business found.</div>;
  return (
    <section className={styles.businessWrapper}>
      <section className={styles.mainBusinessInfo}>
        <BusinessCredentials business={business} />
        <Description business={business} />
        <h2>Gallery</h2>
        <Gallery business={business} />
      </section>
      <section className={styles.secondaryBusinessInfo}>
        <Appointment business={business}/>
        {business.category && (
          <SimilarBusiness category={business.category} currentBusinessId={business._id} />
        )}
      </section>

      
    </section>
  );
};

export default Business;
