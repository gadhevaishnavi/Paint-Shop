import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Offer from './Services'
import '../assets/css/Home.css'
import FloatingIcon from '../components/FloatingIcon'
import { HardHat, CheckCircle, Palette, ShieldCheck, Eye, Wrench } from "lucide-react";
const Home = () => {
  const features = [
    { icon: <HardHat size={40} />, title: "Trained Professional" },
    { icon: <CheckCircle size={40} />, title: "Technical Site Evaluation" },
    { icon: <Palette size={40} />, title: "Personalized Colour Consultation" },
    { icon: <ShieldCheck size={40} />, title: "Stringent Safety Protocol" },
    { icon: <Eye size={40} />, title: "Supervised Painting" },
    { icon: <Wrench size={40} />, title: "Mechanized Tools" }
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

