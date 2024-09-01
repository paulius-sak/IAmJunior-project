
import { Business as BusinessType } from "../../types/business";


interface GalleryProps {
  business: BusinessType;
}

const Gallery = ({business}: GalleryProps) => {
    return (
        
          <section style={{display: 'flex', gap: '2rem', flexWrap: "wrap"}}>

          {business.images.map((image, index) => (
            <div key={index} style={{}}>
              <img  src={image.url} alt={`Slide ${index + 1}`} style={{ width: '10rem', height: '6rem', objectFit: 'cover', borderRadius: '0.5rem' }} />
            </div>
          ))}
          </section>
        
      );
}

export default Gallery