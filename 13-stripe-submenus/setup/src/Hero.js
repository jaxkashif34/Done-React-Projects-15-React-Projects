import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <div className="hero-info">
          <h1>Payments infrastructure fot the internet</h1>
          <p>
            Millions of Companies of all-sizes-form startups to Fortune 500s-use
            Stripe's Software and APIs to accept payments, send payouts, and
            manage their business online
          </p>
          <button className="btn">Start now</button>
        </div>
        <div className="hero-images">
          <img src={phoneImg} alt="phone" className="phone-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
