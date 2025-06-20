import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import searchIcon from "../../assets/search-icon.png"; 
import helpIcon from "../../assets/help-icon.png";     

const SupportSection = () => {
  return (
    <div className="container-fluid py-5 mb-4"
     style={{
    background: "linear-gradient(to right, #000863,#FF9500D9,#FF9500B2,#000863)",
  }}>
      <div className="row justify-content-center g-4">

        {/* Search Support Card */}
        <div className="col-12 col-md-6">
          <div className="text-center p-4 border rounded shadow h-100 ">
            <img src={searchIcon} alt="Search Icon" className="mb-3" style={{ width: "50px" }} />
            <h4 className="fw-bold">Find Your Academics</h4>
            <p className="text-muted">We have an array of Academics to choose from</p>
            <button className="btn btn-primary px-4 mt-2">BROWSE ACADEMICS</button>
          </div>
        </div>

        {/* Help Support Card */}
        <div className="col-12 col-md-6">
          <div className="text-center p-4 border rounded shadow h-100 ">
            <img src={helpIcon} alt="Help Icon" className="mb-3" style={{ width: "50px" }} />
            <h4 className="fw-bold">Need Help</h4>
            <p className="text-muted">Write your query & we’ll be happy to help</p>
            <button className="btn btn-warning text-white px-4 mt-2">GET IN TOUCH</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SupportSection;
