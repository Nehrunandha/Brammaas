import React from "react";
import bannerBg from "../../assets/school.jpg";

const TopBanner = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center text-center text-white"
      style={{
        backgroundImage: `url(${bannerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "300px",
        position: "relative",
      }}
    >
      {/* Optional dark overlay for better text visibility */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          zIndex: 1,
        }}
      ></div>

      <div
        className="position-relative container"
        style={{ zIndex: 2 }}
      >
        <h1 className="fw-bold display-5">OUR TOPPERS</h1>
        <p className="lead">Home &gt; our toppers</p>
      </div>
    </div>
  );
};

export default TopBanner;
