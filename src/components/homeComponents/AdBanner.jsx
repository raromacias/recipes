import React from "react";
import salmon from "../../assets/salmon.jpg";
import { Link } from "react-router-dom";
import classes from './AdBanner.css'

const AdBanner = () => {
  return (
    <div
      style={{
        background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.8)),
          url(${salmon})`,
        backgroundSize: "cover",
        width: '100%',
        height: '300px',
        color: 'white',
        textAlign: 'center',
        display: 'flex',
      }}
    >
      <div className="ad-banner">
        <h3>New Recipe</h3>
        <h1 style={{color: '#D97236'}}>Pineapple Salmon</h1>
        <h3>
          This recipe consists of fresh wild Alaskan salmon, rubbed in a bbq
          brown sugar rub, baked for 25 minutes on a bed of pineapple, and garnished in butter, garlic, and chives. You won’t want to miss it!
        </h3>
        <Link to="/recipe/3">
          <button className="blue-btn">Check it out</button>
        </Link>
      </div>
    </div>
  );
};

export default AdBanner;
