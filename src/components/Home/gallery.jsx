import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

// Sample gallery items
const galleryItems = [
  { title: "Sports day", image: require("../../assets/sports day.jpg") },
  // { title: "", image: require("../../assets/sport 1.jpg") },
  { title: "Graduation day", image: require("../../assets/graduation.jpg") },
  // { title: "", image: require("../../assets/graduation.jpg") },
  { title: "Extra circular", image: require("../../assets/extra.webp") },
  { title: "Tour", image: require("../../assets/Schooltours.png") },
  { title: "Virtual Reality", image: require("../../assets/tour 1.jpg") },
  { title: "Exhibitions", image: require("../../assets/graduation.jpg") },
  { title: "Annual day", image: require("../../assets/anual day.jpg") },
  { title: "Dance Program", image: require("../../assets/annual 2.jpg") },
];

const Gallery = () => {
  return (
    <div className="py-5 mt-5 mb-4 "
     style={{
    background:' #FFF3E2E5'
  }}>
      <h2 className="text-center fw-bold mb-4">GALLERY</h2>
      <div className="container">
        <div className="row g-4">
          {galleryItems.map((item, index) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
              <div className="card h-100 border-0 shadow-sm">
                <img
                  src={item.image}
                  alt={item.title || `Gallery image ${index + 1}`}
                  className="card-img-top"
                  style={{ objectFit: "cover", height: "200px" }}
                />
                {item.title && (
                  <div className="card-body p-2">
                    <p className="card-text text-center small fw-medium text-dark">{item.title}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <button className="btn btn-warning text-white fw-bold px-4 py-2 rounded-pill">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
