import React from "react";
import { Link } from "react-router-dom";

const BenefitBannerComponent = (props) => {
  return (
    <section className="featured">
      <div className="component-container featured__benefit">
        <article className="featured-item featured-item-large">
          <div className="featured-item__content">
            <h1 className="benefit-title">HEALTH & BENEFIT</h1>
            <div className="benefit-info">
              <p> It Lowers Risk of Heart Disease</p>
              <p> It Reduce Risk of Alzheimer's Disease</p>
              <p> It Can Help Lower Symptoms of Depression</p>
              <p> It's a Great Source of Vitamin D</p>
              <p> It Helps Improve Vision and Flood Health</p>
            </div>
            <Link to="#" className="btn btn--rounded">Learn More</Link>
          </div>
        </article>
        <article
          style={{ backgroundImage: "url('/beef/images/benefit.jpg')" }}
          className="featured-item featured-item-small-first"
        ></article>
      </div>
    </section>
  );
};

export default React.memo(BenefitBannerComponent);
