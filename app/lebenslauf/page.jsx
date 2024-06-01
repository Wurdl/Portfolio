"use client"

import {FaHtml5, FaCss3, FaJs, FaReact, FaSearchengin , FaFigma, FaNodeJs, FaWordpress, FaPhp} from 'react-icons/fa'
import {SiTailwindcss, SiNextdotjs} from 'react-icons/si'

//components
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { ScrollArea } from '@/components/ui/scroll-area'
import { motion } from 'framer-motion'


//data
const about = {
  title: 'Über mich',
  description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, ex.',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Jakob Ehmann'
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+43) 664 16 16 700'
    },
    {
      fieldName: 'Email',
      fieldValue: 'ehmannjakob@gmail.com'
    },
    {
      fieldName: 'Erfahrung',
      fieldValue: '6+ Jahre'
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'verfügbar'
    },
    {
      fieldName: 'Sprachen',
      fieldValue: 'Deutsch, Englisch'
    },

  ]
}
// erfahrung
const erfahrung = {
  icon: '/assets/resume/badge.svg',
  title: 'Berufliche Laufbahn',
  description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, nemo?',
  items: [
    {
      company: 'Jack Coleman',
      position: 'Digital content + frontend development',
      duration: '2024 - Heute'
    },
    {
      company: 'Selbstständig',
      position: 'Werbeagentur',
      duration: '2023 - Heute'
    },
    {
      company: 'Intouch',
      position: 'Junior Webentwickler',
      duration: '2020 - 2023'
    },
  ]
}
// skills
const skills = {
  title: 'Meine Skills',
  description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, nemo?',
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'html',
    },
    {
      icon: <FaCss3 />,
      name: 'css',
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwind.css',
    },
    {
      icon: <FaJs />,
      name: 'javascript',
    },
    {
      icon: <FaReact />,
      name: 'react.js',
    },
    {
      icon: <SiNextdotjs />,
      name: 'next.js',
    },
    {
      icon: <FaWordpress />,
      name: 'wordpress',
    },
    {
      icon: <FaPhp />,
      name: 'php',
    },
    {
      icon: <FaSearchengin />,
      name: 'seo',
    },
    
   
  ]
}



const Lebenslauf = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className="container mx-auto">
        <Tabs defaultValue='erfahrung' className='flex flex-col xl:flex-row gap-[60px]'>
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-o gap-6">
            <TabsTrigger value="erfahrung" >Erfahrung</TabsTrigger>
            <TabsTrigger value="skills" >Skills</TabsTrigger>
            <TabsTrigger value="ueber-mich" >Über mich</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className='min-h-[70vh] w-full'>
            {/* erfahrung */}
            <TabsContent value="erfahrung" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h2 className='text-4xl font-bold'>{erfahrung.title}</h2>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{erfahrung.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {erfahrung.items.map((item, index) => {
                      return (
                        <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                          <div className='flex items-center gap-3'>
                            {/* dot */}
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.company}</p>
                          </div>
                        </li>
                      )
                    })}

                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                              <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className='capitalize'>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* über mich */}
            <TabsContent value="ueber-mich" className="w-full text-center xl:text-left">
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                        <span className='text-white/60'>{item.fieldName}</span>
                        <span className='text-xl xl:text-sm'>{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>

        </Tabs>
      </div>
    </motion.div>
  )
}

export default Lebenslauf