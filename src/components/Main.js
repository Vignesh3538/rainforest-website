import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './Main.css';

const Main = () => {
  const [bgIndex1, setBgIndex1] = useState(1);
  const [currentCardIndex1, setCurrentCardIndex1] = useState(0);
  
  const changeBackground1 = useCallback(() => setBgIndex1((prevIndex) => (prevIndex < 6 ? prevIndex + 1 : 1)), []);
  
  useEffect(() => {
    const interval1 = setInterval(changeBackground1, 5000);
     return () => {
      clearInterval(interval1);
      
    };
  }, [changeBackground1]);

  const handleNavClick = (direction, container) => {
    if (container === 'first') {
      setCurrentCardIndex1((prevIndex) => (direction === 'next' ? (prevIndex + 1) % 4 : (prevIndex + 3) % 4));
    } 
  };

  const mainCards = [
    {
      title: 'Latest Species Info',
      description: 'Discover new species in the Western Ghats.',
      image: `${process.env.PUBLIC_URL}/images/latest_species.jpg`,
      link: '/latest-species-info'
    },
    {
      title: 'Exotic Species Info',
      description: 'Protect endemic species like Malabar Tree Toad.',
      image: `${process.env.PUBLIC_URL}/images/frog.png`,
      link: '/exotic-species-info'
    },
    {
      title: 'Forest and Biodiversity',
      description: 'UNESCO site with 7,000+ plant species.',
      image: `${process.env.PUBLIC_URL}/images/lifecycle.png`,
      link: '/forest-biodiversity'
    },
    {
      title: 'Trending Biodiversity Changes',
      description: 'Observe recent biodiversity shifts.',
      image: `${process.env.PUBLIC_URL}/images/trending_biodiversity.jpg`,
      link: '/trending-biodiversity-changes'
    },
  ];

  const bgImage1 = `${process.env.PUBLIC_URL}/images/${bgIndex1}.jpg`;
  
  return (
    <>
      <div className="main-container" style={{ backgroundImage: `url(${bgImage1})` }} onClick={changeBackground1}>
        <div className="content">
          <h1 id='h1'>Welcome to Western Ghats Explorer</h1>
          <div className="card">
            <img src={mainCards[currentCardIndex1].image} alt={mainCards[currentCardIndex1].title} className="card-image" />
            <Link to={mainCards[currentCardIndex1].link}>
              <h3>{mainCards[currentCardIndex1].title}</h3>
            </Link>
            <p>{mainCards[currentCardIndex1].description}</p>
          </div>
          <div className="nav-arrows left-arrow" onClick={() => handleNavClick('prev', 'first')}>
            <FaArrowLeft />
          </div>
          <div className="nav-arrows right-arrow" onClick={() => handleNavClick('next', 'first')}>
            <FaArrowRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
