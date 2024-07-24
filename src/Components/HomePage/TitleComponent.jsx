import react, { useEffect, useState } from 'react';
import diamondImg from '../../../Icons/icons8-diamond-80.png';
import necklacePhoto from '../../../Images/Image_4.jpeg';
import portraitPhoto from '../../../Images/pexels-pixabay-219550.jpg';
import ringPhoto from '../../../Images/Image.png';
import earringPhoto from '../../../Images/img4.png';
import typesOfJewelry from '../../../Images/img5.png';
import portraitOfWoman2 from '../../../Images/img6.png';
import goldEarringPhoto from '../../../Images/img7.png';
import earringPhoto2 from '../../../Images/img9.png';
import rubyPhoto from '../../../Images/ruby-img.png';

const images = [
  [necklacePhoto, portraitPhoto, ringPhoto],
  [earringPhoto, typesOfJewelry, portraitOfWoman2],
  [goldEarringPhoto, rubyPhoto, earringPhoto2],
];

export default function TitleComponent() {
  const [index, setIndex] = useState(0);

  const handleNext = (currentValue) => {
    if (currentValue === images.length - 1) {
      return 0;
    } else {
      return currentValue + 1;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => handleNext(index));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="main-title-section-wrapper">
        <div className="main-title-subtitle-container">
          <h3 className="title-component-header-text-styles">Discover the finest FashionGems</h3>
          <h6> Let us help you look and feel your best!</h6>
          <h6>
            We want you to shine like a diamond!
            <img src={diamondImg} className="diamond-img-title-component"></img>
          </h6>

          <div className="images-container">
            {images[index].map((img, i) => {
              return (
                <>
                  <img key={i} src={img} alt="img" className="img-styles-title-component" />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
