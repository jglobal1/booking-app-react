import React from 'react'
import Nav from './componets/NavBar/Nav'
import OffersSection from './componets/OffersSection/OffersSection'
import PropertySection from './componets/PropertySection/PropertySection'
import ExploreSection from './componets/ExploreSection/ExploreSection'
import BrowseSection from './componets/BrowseSection/BrowseSection'
import QuickSection from './componets/QuickSection/QuickSection.jsx'
import DealSection from './componets/DealsSection/DealSection.jsx'
import InspirationSection from './componets/InspirationSection/InspirationSection.jsx'

import DestinationSection from './componets/DestinationSection/DestinationSection.jsx'
import DiscoverSection from './componets/DiscoverSection/Discoversection.jsx'
import AnotherDeal from './componets/AnotherDeal/AnotherDeal.jsx'
import FooterSection from './componets/FooterSection/FooterSection.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css';
import AOS from "aos";
import 'aos/dist/aos.css';



const App = () => {

React.useEffect(()=>{
  AOS.init({
    offset: 100,
    duration: 800,
    easing: "ease-in-shine",  // Add a comma here
    delay: 100,
  });
    AOS.refresh();
}, [])


  return (
    <div>
        <Nav />
        <OffersSection />
        <PropertySection />
        <ExploreSection />
        <BrowseSection />
        <QuickSection />
        <DiscoverSection />
        <AnotherDeal />
        <InspirationSection />
        <DealSection />
        <ExploreSection />
        <DestinationSection />
        <FooterSection />
    </div>
  )
}

export default App
