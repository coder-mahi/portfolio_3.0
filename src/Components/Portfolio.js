import React, { useRef } from 'react';
import Slider from 'react-slick';
import './css/Portfolio.css';

// Import images
import githubImage from '../assets/github.png';

function Portfolio() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,        // Ensure autoplay is true
    autoplaySpeed: 2500,   // Speed of the autoplay
    arrows: false,         // No default arrows
  };
  

  const projects = [
    {
      title: 'Memo Application',
      description: 'Developed a Memo application in Android...',
      link: 'https://link-to-memo-app.com',
      image: githubImage,
    },
    {
      title: 'YouTube to MP3 Converter',
      description: 'Developed a YouTube to MP3 converter...',
      link: 'https://link-to-youtube-mp3-converter.com',
      image: githubImage,
    },
    {
      title: 'Student Mentoring Application',
      description: 'Developed a student mentoring application...',
      link: 'https://link-to-student-mentoring-app.com',
      image: githubImage,
    },
    {
      title: 'Portfolio Website',
      description: 'Developed a portfolio website...',
      link: 'https://link-to-portfolio-website.com',
      image: githubImage,
    },
  ];

  return (
    <div className="portfolio">
      <h2>My Portfolio</h2>
      <Slider {...settings} ref={sliderRef} className="portfolio-slider">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-slide">
            <img src={project.image} alt={project.title} className="portfolio-image" />
            <div className="portfolio-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="portfolio-link" target="_blank" rel="noopener noreferrer">Visit Project</a>
            </div>
          </div>
        ))}
      </Slider>
      <div className="custom-buttons">
        <button className="button-prev" onClick={() => sliderRef.current.slickPrev()}>
          {'Previous'}
        </button>
        <button className="button-next" onClick={() => sliderRef.current.slickNext()}>
            {'Next'}
        </button>
      </div>
    </div>
  );
}

export default Portfolio;
