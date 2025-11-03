import SlideleftSection from '@/app/innovations/Components/Slideleft'
import SliderightSection from '@/app/innovations/Components/Slideright'
import Image from 'next/image'
import React from 'react'

export default function Techequipment() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* left Image */}
      <SliderightSection>
        <div className="rounded-xl overflow-hidden shadow-lg md:col-span-1 flex justify-center">
        <Image
          src="/assets/studio/tech3.jpg"
          alt="Telesales Solutions"
          width={600}
          height={200}
          className="object-cover rounded-xl hover:scale-105 transition-transform duration-500"
        />
      </div>
      </SliderightSection>
        {/* right Content */}
        <SlideleftSection>
        <div className="md:col-span-1">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
           Tech-Enabled Shooting Spaces
        </h2>
      
        <p className=' mb-4 text-justify'>
            At Enid Studio, we use professional-grade equipment to ensure every shot meets the highest standards.
             From precision lenses to studio lighting and stabilizers, our setup is built for clarity, consistency,
              and creative control. Whether it’s a brand shoot or product showcase, our tech-driven environment helps
               your visuals stand out.
        </p>
        <p className=' mb-4 text-justify' >
          Beyond equipment, our space is designed for creative flow and technical consistency. From pre-shoot planning 
          to final delivery, we offer a streamlined experience that supports your vision and meets commercial standards.
           With tech-driven precision and a collaborative atmosphere, Enid Studio helps your visuals stand out every time.
        </p>
      </div>
      </SlideleftSection>
      </section>
  )
}
