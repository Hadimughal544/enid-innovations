import Image from 'next/image'
import React from 'react'
import StudioSlideshow from './Components/Slideshow'
import Whychoose from './Components/Whychoose'
import Techequipment from './Components/Techequipment'
import ServicesSection from './Components/ServicesSection'
import StudioContact from './Components/StudioContact'
import StudioProjectsSection from './Components/StudioProjectsSection.js'
import Services from './Components/Services'
import StudioVideoBackground from './Components/StudioVideo'
import Projectsslider from './Components/Projectslider'

export default function Studio() {
  return (
    <div >
     <div>
      <StudioVideoBackground/>
      <ServicesSection/>
      <Whychoose/>
      <Projectsslider/>
      <StudioContact/>
      <Techequipment/>
      <StudioProjectsSection/>
      
     </div>
    </div>
  )
}
