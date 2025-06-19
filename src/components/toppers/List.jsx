import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./TopScorers.css";

import ribbon from "../../assets/ribbon.png";
import badgeBg from "../../assets/score.png"; // Red badge image

const students = [
  { name: "K. Saschendri", grade: "XII CBSE", profession: "Top Scorer", image: require("../../assets/1.jpg"), score: "453" },
  { name: "K. Padmavarsihini", grade: "X CBSE", profession: "Top Scorer", image: require("../../assets/1.jpg"), score: "435" },
  { name: "J.D.S. Jyothishwari", grade: "X CBSE", profession: "Top Scorer", image: require("../../assets/1.jpg"), score: "429" },
  { name: "S. Lokesh", grade: "X CBSE", profession: "Top Scorer", image: require("../../assets/1.jpg"), score: "426" },
  { name: "T. Mugilmathi", grade: "X CBSE", profession: "Top Scorer", image: require("../../assets/1.jpg"), score: "414" },
  { name: "E.A. Mohammed Hibban", grade: "XII CBSE", profession: "Top Scorer", image: require("../../assets/1.jpg"), score: "403" },
  { name: "G. Keerthana", grade: "X CBSE", profession: "Top Scorer", image: require("../../assets/1.jpg"), score: "402" },
  { name: "J. Malick Roshan", grade: "XII CBSE", profession: "Top Scorer", image: require("../../assets/1.jpg"), score: "396" },
  { name: "M. Tharun Vijay", grade: "XII CBSE", profession: "Top Scorer", image: require("../../assets/1.jpg"), score: "393" },
  { name: "J.D.D. Parameshwari", grade: "XII CBSE", profession: "Top Scorer", image: require("../../assets/1.jpg"), score: "390" },
];

const TopScorers = () => {
  return (
    <div className="container-fluid py-4" style={{background:' #FFF3E2'}}>
      <h2 className="text-center text-primary fw-bold">100% RESULT IN CBSE EXAMINATION</h2>
      <h4 className="text-center text-danger mb-5">GRADE X & XII (2024–2025)</h4>

      <div className="row justify-content-center">
        {students.map((student, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5 d-flex justify-content-center">
            <div className="text-center w-100 position-relative">

              {/* Profile with badge overlay */}
              <div className="position-relative mx-auto" style={{ width: '300px' }}>
                <img
                  src={student.image}
                  alt={student.name}
                  className="img-fluid "
                  style={{height:'300px',width:'300px',borderRadius:'50%',border:'8px double gold'}}
                />

                {/* Score Badge Overlay */}
                <div className="position-absolute" style={{ top: '-15px', right: '-10px' }}>
                  <img src={badgeBg} alt="Badge" className="img-fluid" style={{width:'140px',height:'140px'}} />
                  <div className=" row position-absolute top-50 start-50 translate-middle text-white fw-bold text-center" style={{display:'flex',flexDirection:'column', fontSize: '10px',marginLeft:'-2px' }}>
                    {student.score} <span className="divider " style={{marginTop:'10px',marginLeft:'-1px'}}></span>500
                  </div>
                </div>
              </div>

              {/* Ribbon with text */}
              <div className="position-relative mt-3 mx-auto" style={{  }}>
                <img src={ribbon} alt="Ribbon" className="img-fluid" style={{width:'650px',height:'450px', marginTop:'-200px'}}/>
                <div className="position-absolute top-50 start-50 translate-middle text-center text-dark fw-bold" style={{ fontSize: "12px",marginTop:'-70px' }}>
                  <p className="mb-0">{student.grade}</p>
                  <p className="mb-0">{student.name}</p>
                  <p className="mb-0">{student.profession}</p>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopScorers;
