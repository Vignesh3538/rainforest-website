import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Threats from './Threats';
import ConservationEfforts from './ConservationEfforts';
import Gallery from './Gallery';
import GetInvolved from './GetInvolved';
import AchievementsTreePlanting from './AchievementsTreePlanting';
import ExoticSpeciesInfo from './ExoticSpeciesInfo';
import ForestBiodiversity from './ForestBiodiversity';
import LatestSpeciesInfo from './LatestSpeciesInfo';
import PreviousEvents from './PreviousEvents';
import TrendingBiodiversityChanges from './TrendingBiodiversityChanges';
import LatestForestFires from './LatestForestFires';
import TouristAttractions from './TouristAttractions'; 

import Ooty from './Ooty';
import Coorg from './Coorg';
import Chikmagalur from './Chikmagalur';
import Gokarna from './Gokarna';
import Shimoga from './Shimoga';
import Coonoor from './Coonoor';
import Kochi from './Kochi';
import Thekkady from './Thekkady';
import Wayanad from './Wayanad';
import Yercaud from './Yercaud';
import Munnar from './Munnar';
import Alappuzha from './Alappuzha';
import DudhsagarWaterfalls from './DudhsagarWaterfalls';
import OldGoa from './OldGoa';
import BagaBeach from './BagaBeach';
import Kodaikanal from './Kodaikanal';

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
          <Route path='/achievements-tree-planting' element={<AchievementsTreePlanting />} />
          <Route path='/exotic-species-info' element={<ExoticSpeciesInfo />} />
          <Route path='/forest-biodiversity' element={<ForestBiodiversity />} />
          <Route path='/latest-species-info' element={<LatestSpeciesInfo />} />
          <Route path='/previous-events' element={<PreviousEvents />} />
          <Route path='/trending-biodiversity-changes' element={<TrendingBiodiversityChanges />} />
          <Route path='/latest-forest-fires' element={<LatestForestFires />} />
          
          <Route path='/attractions' element={<TouristAttractions />} />
          <Route path='/attractions/ooty' element={<Ooty />} />
          <Route path='/attractions/coorg' element={<Coorg />} />
          <Route path='/attractions/chikmagalur' element={<Chikmagalur />} />
          <Route path='/attractions/gokarna' element={<Gokarna />} />
          <Route path='/attractions/shimoga' element={<Shimoga />} />
          <Route path='/attractions/coonoor' element={<Coonoor />} />
          <Route path='/attractions/kochi' element={<Kochi />} />
          <Route path='/attractions/thekkady' element={<Thekkady />} />
          <Route path='/attractions/wayanad' element={<Wayanad />} />
          <Route path='/attractions/yercaud' element={<Yercaud />} />
          <Route path='/attractions/munnar' element={<Munnar />} />
          <Route path='/attractions/alappuzha' element={<Alappuzha />} />
          <Route path='/attractions/old-goa' element={<OldGoa />} />
          <Route path='/attractions/baga-beach' element={<BagaBeach />} />
          <Route path='/attractions/dudhsagar-waterfalls' element={<DudhsagarWaterfalls />} />
          <Route path='/attractions/kodaikanal' element={<Kodaikanal />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

export default App;
