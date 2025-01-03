import React, { useEffect, useState } from "react";
import "../styles/Banner.scss";

function Banner({ title, subtitle, children }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="banner">
      <div className="banner__overlay"></div>
      <div className={`banner__content ${isLoaded ? "loaded" : ""}`}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {children && <div className="banner__actions">{children}</div>}
      </div>
    </div>
  );
}

export default Banner;
