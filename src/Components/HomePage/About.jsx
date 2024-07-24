import react from 'react';
import Header from './Header';
import Footer from './Footer';
import diamondImg from '../../../Images/diamond-img.jpg';
import amsterdamPhoto from '../../../Images/Amsterdam-photo.jpg';

export default function About({ numberOfCartItems, isOpen, setIsOpen }) {
  return (
    <>
      <Header numberOfCartItems={numberOfCartItems} isOpen={isOpen} setIsOpen={setIsOpen}></Header>

      <div className="about-component-wrapper">
        <h1>Our Story</h1>

        <p>
          We started in 1968 in Amsterdam. Our grandpa, Jan worked very hard to provide the best Jewelry for the
          community. He wanted to create lasting memories and make an impact on every customer. Jan instilled in us the
          service and core values that make our business so unique. Excellent service, knowledge, passion, good humor,
          to go above and beyond to serve you, and to always respect the customer and community. We carry on the legacy
          today and Jan's passion lives through all of us.
        </p>

        <div className="amsterdam-photo-container">
          <img src={amsterdamPhoto} className="amsterdam-photo"></img>
        </div>

        <h1 className="core-values-header-about-page">Our Core Values</h1>

        <div className="core-values-container">
          <ul className="core-values-styles">
            <li>Excellence</li>
            <li>Team work</li>
            <li>Honesty</li>
            <li>Integrity</li>
            <li>Go the extra mile</li>
            <li>Lead by example</li>
            <li>Love and respect your community</li>
          </ul>
        </div>

        <h1>Why Choose Us?</h1>

        <p>
          You will not find a better store that has the finest selection of Jewelry! We are commited to serving you and
          making you a happy customer! Experience and feel the tradition!{' '}
        </p>

        <h1>Let us Help You Shine Like A Diamond!!!</h1>

        <div className="about-component-img-container">
          <img src={diamondImg} className="diamond-img-about-page"></img>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

