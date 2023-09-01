import "./Home.css";
import img1 from "/homeimage1.png";
import img2 from "/homeimage2.jpg";

const Home = () => {
  return (
    <section className="home-section ">
      <div className=" content-wrapper container">
        <div className="home-details">
          <div className="home-title">CODE THE WORLD YOU WANT TO LIVE IN.</div>
          <div className="home-text">
            DCoding Labs is an innovative consulting, design, and development
            powerhouse, empowering businesses with cutting-edge web design,
            branding, and personalized software solutions. Our full-service
            offerings redefine industry standards, leading the way in mobile
            applications, SEO services, and crafting the digital world you
            envision living in.
          </div>
          <button className="button">Contact Us</button>
        </div>
        <div className="home-images">
          <img className="image1" src={img1} alt="" />
          <img className="image2" src={img2} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Home;
