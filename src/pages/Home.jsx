import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
// import Cards from '../components/Cards'
import Offer from './Services'
import '../assets/css/Home.css'
import FloatingIcon from '../components/FloatingIcon'
const Home = () => {
  const features = [
    { icon: "👷", title: "Trained Professional" },
    { icon: "✅", title: "Technical Site Evaluation" },
    { icon: "🎨", title: "Personalized Colour Consultation" },
    { icon: "🛡️", title: "Stringent Safety Protocol" },
    { icon: "👀", title: "Supervised Painting" },
    { icon: "🔧", title: "Mechanized Tools" }
  ];
  return (
    <>
    
    <Navbar/>
    <Slider/>
    <Offer/>
    <div className="main-div">
      <h2 className="head">Why choose us?</h2>
      <div className="grid">
        {features.map((feature, index) => (
          <div key={index} className="flex ">
            <div className="icon">{feature.icon}</div>
            <p className="title">{feature.title}</p>
          </div>
        ))}
      </div>
    </div>
    <FloatingIcon/>
    </>
  )
}

export default Home

