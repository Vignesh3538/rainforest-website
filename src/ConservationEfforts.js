import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Navbar from './components/Navbar'

const ConservationEfforts= () =>{
    const [bgIndex2, setBgIndex2] = useState(4);
    const [currentCardIndex2, setCurrentCardIndex2] = useState(0);
    const changeBackground2 = useCallback(() => setBgIndex2((prevIndex) => (prevIndex < 6 ? prevIndex + 1 : 1)), []);
    useEffect(() => {
        const interval2 = setInterval(changeBackground2, 5000);
        return () => {
          clearInterval(interval2);
        };
      }, [changeBackground2]);

      const handleNavClick = (direction, container) => {
        if (container === 'second') {
          setCurrentCardIndex2((prevIndex) => (direction === 'next' ? (prevIndex + 1) % 3 : (prevIndex + 2) % 3));
        }
      };
    const popularCards = [
        {
          title: 'Achievements of Tree Planting',
          description: 'Plant lakhs of trees yearly in the Western Ghats.',
          image: `${process.env.PUBLIC_URL}/images/plant.jpg`,
          link: '/achievements-tree-planting'
        },
        
        {
          title: 'Previous Events',
          description: 'Explore our past events and initiatives.',
          image: `${process.env.PUBLIC_URL}/images/previous_events.png`,
          link: '/previous-events'
        },
       
        {
          title: 'News on Latest Forest Fires',
          description: 'Updates on recent forest fires.',
          image: `${process.env.PUBLIC_URL}/images/latest_forest_fires.webp`,
          link: '/latest-forest-fires'
        },
      ];
      const bgImage2 = `${process.env.PUBLIC_URL}/images/${bgIndex2}.jpg`;
      return (
        <>
        <Navbar />
        <div className="main-container" style={{ backgroundImage: `url(${bgImage2})` }} onClick={changeBackground2}>
        <div className="content">
          <div className="card">
            <img src={popularCards[currentCardIndex2].image} alt={popularCards[currentCardIndex2].title} className="card-image" />
            <Link to={popularCards[currentCardIndex2].link}>
              <h3>{popularCards[currentCardIndex2].title}</h3>
            </Link>
            <p>{popularCards[currentCardIndex2].description}</p>
          </div>
          <div className="nav-arrows left-arrow" onClick={() => handleNavClick('prev', 'second')}>
            <FaArrowLeft />
          </div>
          <div className="nav-arrows right-arrow" onClick={() => handleNavClick('next', 'second')}>
            <FaArrowRight />
          </div>
        </div>
        </div>
        </>
      );
}

export default ConservationEfforts;