import React from 'react';
import onlineImg from '../../assets/ias.jpg';
import childImg from '../../assets/Lkg.jpg';
import robotImg from '../../assets/tech.jpg';
import yogaImg from '../../assets/chess.jpg';
import schoolImg from '../../assets/school.jpg';
import madamImg from '../../assets/parent 1.jpg';
import nextIcon from '../../assets/next.png';

const academics = [
  {
    title: 'Brammaas IAS Academy',
    description: 'Brammaas IAS Academy (Unit of Brammaas Group of Schools) has been',
    image: onlineImg,
  },
  {
    title: "KG’S",
    description: 'Brammaas Group of Schools offers Quality and Holistic education in the',
    image: childImg,
  },
  {
    title: 'Primary World of Tech For',
    description: 'Brammaas offers smart and exceptional quality education aiming to nurture',
    image: robotImg,
  },
  {
    title: 'Yoga for Focus',
    description: 'Mindfulness and focus through regular guided yoga sessions',
    image: yogaImg,
  },
  {
    title: 'Smart Classrooms',
    description: 'Tech-enabled learning spaces for the future',
    image: schoolImg,
  },
  {
    title: 'Inspired Teaching',
    description: 'Experienced mentors creating transformational experiences',
    image: madamImg,
  },
];

const AcademicCarousel = () => {
  return (
    <div className="container-fluid py-5" style={{ background: '#FFF3E2' }}>
      <h2 className="fw-bold text-primary mb-4 text-center">POPULAR ACADEMICS</h2>

      <div id="multiCardCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* Split array into chunks of 3 */}
          {academics.reduce((acc, curr, idx) => {
            const chunkIndex = Math.floor(idx / 3);
            if (!acc[chunkIndex]) acc[chunkIndex] = [];
            acc[chunkIndex].push(curr);
            return acc;
          }, []).map((group, i) => (
            <div className={`carousel-item ${i === 0 ? 'active' : ''}`} key={i}>
              <div className="row justify-content-center px-2">
                {group.map((item, idx) => (
                  <div className="col-12 col-md-4 mb-4" key={idx}>
                    <div className="card shadow border-0 rounded-4 h-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="card-img-top rounded-top-4"
                        style={{ height: '250px', objectFit: 'cover' }}
                      />
                      <div className="card-body text-center d-flex flex-column">
                        <h5 className="fw-bold">{item.title}</h5>
                        <p>{item.description}</p>
                        <button className="btn btn-warning text-white mt-auto mx-auto">
                          View More <img src={nextIcon} alt="next" className="ms-1" width="18" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#multiCardCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon bg-dark rounded-circle p-3" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#multiCardCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon bg-dark rounded-circle p-3" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default AcademicCarousel;
