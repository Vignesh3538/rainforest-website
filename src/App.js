import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Threats from './Threats';
import ConservationEfforts from './ConservationEfforts';
import Gallery from './Gallery';
import GetInvolved from './GetInvolved';
import TouristAttractions from './TouristAttractions';

import AchievementsTreePlanting from './AchievementsTreePlanting';
import ExoticSpeciesInfo from './ExoticSpeciesInfo';
import ForestBiodiversity from './ForestBiodiversity';
import LatestSpeciesInfo from './LatestSpeciesInfo';
import PreviousEvents from './PreviousEvents';
import TrendingBiodiversityChanges from './TrendingBiodiversityChanges';
import LatestForestFires from './LatestForestFires';

function App() {
  return (
    <React.StrictMode>
     <Router>
          <Routes>
     
            <Route path='/' element={<Home />} />
            <Route path='/threats' element={<Threats />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/getInvolved' element={<GetInvolved />} />
            <Route path='/efforts' element={<ConservationEfforts />} />
            <Route path='/attractions' element={<TouristAttractions />} /> 
            <Route path='/achievements-tree-planting' element={<AchievementsTreePlanting />} />
            <Route path='/exotic-species-info' element={<ExoticSpeciesInfo />} />
            <Route path='/forest-biodiversity' element={<ForestBiodiversity />} />
            <Route path='/latest-species-info' element={<LatestSpeciesInfo />} />
            <Route path='/previous-events' element={<PreviousEvents />} />
            <Route path='/trending-biodiversity-changes' element={<TrendingBiodiversityChanges />} />
            <Route path='/latest-forest-fires' element={<LatestForestFires />} />
          </Routes>
     </Router>
    </React.StrictMode>
  );
}

export default App;
