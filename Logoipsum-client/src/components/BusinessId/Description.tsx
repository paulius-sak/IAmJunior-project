import styles from "./Description.module.scss"
import { Business as BusinessType } from "../../types/business";

interface BusinessDescriptionProps {
  business: BusinessType;
}

const Description: React.FC<BusinessDescriptionProps> = ({
    business,
  }) => {
  return (
    <div>
        <h1>Description</h1>
        <p>{business.about}</p>
    </div>
  )
}

export default Description