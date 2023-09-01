import "./Services.css";
import { FcMindMap } from "react-icons/fc";
import { FcCollaboration } from "react-icons/fc";
import { FcComboChart } from "react-icons/fc";
const Services = () => {
  return (
    <div className="services" id="services">
      <div className=" container">
        <p className="services-title">Services</p>
        <p className="services-subtitle">
          Our terrific team excels in providing
        </p>
        <div className="services-cards">
          <div className="service-card">
            <p className="service-icon">
              <FcMindMap />
            </p>
            <p className="service-card-title">Custom Software Development</p>
            <p className="service-card-subtitle">
              Our specialized offering entails crafting bespoke software
              solutions designed to tackle distinct business hurdles and fulfill
              exclusive needs. Encompassing the entire journey from
              conceptualization and design to development, rigorous testing, and
              seamless integration, this service guarantees a final product that
              impeccably matches the client's requirements.
            </p>
          </div>

          <div className="service-card">
            <p className="service-icon">
              <FcCollaboration />
            </p>
            <p className="service-card-title">
              {" "}
              Technology Consulting and IT Strategy
            </p>
            <p className="service-card-subtitle">
              Offering expert advice on selecting the right technologies,
              platforms, and tools for a given project or business, along with
              developing a comprehensive IT strategy aligned with the client's
              long-term goals. This service helps clients make informed
              technology decisions and achieve maximum efficiency and growth.
            </p>
          </div>
          <div className="service-card">
            <p className="service-icon">
              <FcComboChart />
            </p>
            <p className="service-card-title">
              {" "}
              Digital Transformation and Modernization{" "}
            </p>
            <p className="service-card-subtitle">
              Assisting organizations in embracing digital technologies,
              streamlining processes, and adopting cloud-based solutions to
              drive innovation, improve productivity, and stay competitive in
              the rapidly evolving tech landscape. This service empowers
              businesses to undergo successful digital transformations and stay
              ahead in their industries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
