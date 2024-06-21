"use client"

import JeLink from '@/components/ui/link'
import { motion } from 'framer-motion'

const services = [
  {
    num: "01",
    title: "Web Entwicklung",
    description: "Professionelle Entwicklung von benutzerfreundlichen und performanten Websites, maßgeschneidert auf die Bedürfnisse Ihrer Zielgruppe.",
    href: ""
  },
  {
    num: "02",
    title: "SEO",
    description: "Effektive Strategien zur Verbesserung Ihres Google-Rankings und zur Steigerung der Online-Sichtbarkeit Ihres Unternehmens.",
    href: ""
  },{
    num: "03",
    title: "Wordpress",
    description: "Erstellung und Anpassung von WordPress-Websites und -Plugins für eine optimale Performance und Funktionalität.",
    href: ""
  },{
    num: "04",
    title: "Support / Schulungen",
    description: "Persönlicher Support und maßgeschneiderte Schulungen für Ihr Team, um das Beste aus Ihren Webprojekten herauszuholen.",
    href: ""
  }
]


const Leistungen = () => {

  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className="container mx-auto">
        <motion.div 
          initial={{opacity: 0}}
          animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
          className=''
        >
          <h1 className='text-5xl font-extrabold my-[150px]'>Meine Leistungen im Bereich
            <span className='text-5xl font-extrabold text-outline-accent text-transparent text-nowrap'> Web Entwicklung </span>
             & <span className='text-5xl font-extrabold text-outline-accent text-transparent text-nowrap'>SEO </span>
            in Graz
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
          {services.map((service, index) => {
            return (
              <div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
                {/* top */}
                <div className='w-full flex justify-between items-center'>
                  <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{service.num}</div>
                  <JeLink service={service} />
                </div>

                {/* title */}
                <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{service.title}</h2>

                {/* description */}
                <p className='text-white/60'>{service.description}</p>

                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Leistungen