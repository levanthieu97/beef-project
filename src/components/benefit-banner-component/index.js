import React from "react";
import { Link } from "react-router-dom";
import { BsCheck } from "react-icons/bs";

const BenefitBannerComponent = (props) => {
  return (
    <section className="featured">
      <div className="component-container featured__benefit">
        <article className="featured-item featured-item-large">
          <div className="featured-item__content">
            <h1 className="benefit-title">HEALTH & BENEFIT</h1>
            <div className="benefit-info">
              <p><BsCheck /> It Lowers Risk of Heart Disease</p>
              <p><BsCheck /> It Reduce Risk of Alzheimer's Disease</p>
              <p><BsCheck /> It Can Help Lower Symptoms of Depression</p>
              <p><BsCheck /> It's a Great Source of Vitamin D</p>
              <p><BsCheck /> It Helps Improve Vision and Flood Health</p>
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
