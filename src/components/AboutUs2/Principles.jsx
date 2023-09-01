import "./principles.css";

import team2 from "/team2.jpg";
const Principles = () => {
  return (
    <div>
      <div className="our-goals container">
        <div className="principles">
          <div>
            <span>Our principles</span> are transparency, customer service,
            efficient execution, and organization, which remain at the core of
            our business today.
          </div>
        </div>
        <img src={team2} alt="" className="aboutus-image2" />
        <div className="principles">
          <div>
            <span>Our goal</span> is simple: we build partnerships with our
            clients where we work together towards an optimal solution for their
            business.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Principles;
