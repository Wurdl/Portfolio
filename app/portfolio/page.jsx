"use client"

import {motion} from 'framer-motion'
import React, {useState} from 'react'

import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'

import {BsArrowUpRight, BsGit, BsGithub} from 'react-icons/bs'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import Link from 'next/link'
import Image from 'next/image'

//components
import WorkSliderBtns from '@/components/WorkSliderBtns'
import SeoKeywordList from '@/components/SeoKeywordList'

const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'Portfolio',
    description: 'Next.js für serverseitiges Rendering und schnelle Performance, Tailwind CSS für ein flexibles und anpassbares Design sowie Framer Motion für reibungslose und beeindruckende Animationen. Durch diese Kombination wird eine optimierte Benutzererfahrung geschaffen, die sowohl ästhetisch ansprechend als auch funktional ist.',
    stack: [
      {name: 'Next.js'}, {name: 'Tailwind.css'}, {name: 'React.js'}
    ],
    image: '/assets/work/portfolio-website.png',
    live: '',
    github: 'https://github.com/Wurdl/Portfolio'
  },
  {
    num: '02',
    category: 'seo',
    title: 'Praxis Celebi',
    description: 'Für das Projekt praxis-celebi.at habe ich eine umfassende SEO-Optimierung durchgeführt. Innerhalb von 6 Monaten konnten die Klicks und Impressionen mehr als verdoppelt werden. Durch gezielte Keyword-Optimierung und strategische SEO-Maßnahmen erreichten mehrere Keywords ein Ranking von 1-10 in den Suchmaschinen. Diese Verbesserungen haben die Sichtbarkeit der Website erheblich gesteigert und den Online-Traffic signifikant erhöht.',
    stack: [
      {name: 'SEO'}
    ],
    image: '/assets/work/thumb3.png',
    live: 'https://praxis-celebi.at',
    github: '',
    keywords: [
      {
        name: 'venenärztin graz',
        ranking: '1'
      },
      {
        name: 'venenspezialist graz',
        ranking: '7'
      },
      {
        name: 'eiseninfusion graz',
        ranking: '4'
      },
      {
        name: 'vitamin c infusion graz',
        ranking: '4'
      },
      {
        name: 'abnehmen graz',
        ranking: '2'
      },
      {
        name: 'mikronährstoffanalyse graz',
        ranking: '3'
      },
      {
        name: 'colon hydro therapie graz',
        ranking: '2'
      },
    ]
  },
]

const Portfolio = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;

    // update project state based on current slide index
    setProject(projects[currentIndex]);

  }

  return (
    <motion.section 
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'}}}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
    >
      <div className="container mx-auto">
        <h1></h1>
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[100%] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              {/* outline num */}
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                {project.num}
              </div>
              {/* project category */}
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>{project.category} Projekt</h2>
              {/* project description */}
              <p className='text-white/60'>{project.description}</p>
              {/* stack */}
              <ul className='flex gap-4'>
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className='text-xl text-accent'>
                      {item.name}
                      {index !== project.stack.length -1 && ","}
                    </li>
                  )
                })}
              </ul>

              {/* border */}
              <div className='border border-white/20'></div>
                <div className='flex items-center gap-4'>
                  {/* live project button */}
                  <Link target='_blank' href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                          <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Projekt</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  {/* github project button */}
                  {project.github !== "" &&
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                          <BsGithub className='text-white text-3xl group-hover:text-accent' />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  }
                </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper 
              spaceBetween={30} 
              slidesPerView={1} 
              className='xl:h-[520px] mb-12'
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className='w-full'>
                    <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                      {/* overlay */}
                      <div className='absolute top-0 bottom-0 w-full h-full z-10'></div>
                      {/* image */}
                      <div className='relative w-full h-full bg-primary'>
                        <Image src={project.image} fill className='object-contain' alt='' />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
              {/* slider buttons */}
              <WorkSliderBtns 
                containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'
                btnStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all'
              />
            </Swiper>
          </div>
        </div>
        {/* SEO Keywords */}
        { project.keywords && <SeoKeywordList keywords={project.keywords} /> }

      </div>
    </motion.section>
  )
}

export default Portfolio