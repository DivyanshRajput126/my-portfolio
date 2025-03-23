import React, { useEffect } from "react";
import { preLoaderAnim } from "../animations";
import './preloader.css';

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Welcome</span>
        <span>to my</span>
        <span>Portfolio.</span>
      </div>
    </div>
  );
};

export default PreLoader;