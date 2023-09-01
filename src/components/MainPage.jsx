import Home from "./Home/Home";
import AboutUs from "./AboutUs/AboutUs";
import Principles from "./AboutUs2/Principles";
import Services from "./Services/Services";
import ContactUs from "./ContactUs/ContactUs";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const MainPage = () => {
  return (
    <div>
      <Header />
      <Home />
      <AboutUs />
      <Principles />
      <Services />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default MainPage;
