"use client"

import JeLink from '@/components/ui/link'
import { motion } from 'framer-motion'

const services = [
  {
    num: "01",
    title: "Web Entwicklung",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti consectetur similique.",
    href: ""
  },
  {
    num: "02",
    title: "SEO",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti consectetur similique.",
    href: ""
  },{
    num: "03",
    title: "Wordpress",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti consectetur similique.",
    href: ""
  },{
    num: "04",
    title: "UI/UX Design",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti consectetur similique.",
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
          <h1 className='text-5xl font-extrabold my-[150px]'>Meine Leistungen als&nbsp;
            <span className='text-5xl font-extrabold text-outline-accent text-transparent text-nowrap'>Web Entwickler</span>&nbsp;
            & <span className='text-5xl font-extrabold text-outline-accent text-transparent text-nowrap'>SEO Experte</span>&nbsp;
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