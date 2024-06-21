"use client"

import {Button} from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import {Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue} from '@/components/ui/select'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Telefon',
    description: '(+43) 664 16 16 700',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'ehmannjakob@gmail.com',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Adresse',
    description: 'Graz City',
  }
]

import { motion } from 'framer-motion'
import { Checkbox } from '@/components/ui/checkbox'

const Kontakt = () => {
  return (
    <motion.section 
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
      className='py-6'
    >
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          {/* form */}
          <div className='xl:w-[54%] order-2 xl:order-none'>
            <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
              <h3 className='text-4xl text-accent'>Let's work together</h3>
              <p className='text-white/60'>Ich freue mich darauf, mit Ihnen an spannenden Projekten zu arbeiten! Bitte füllen Sie das untenstehende Formular aus, um mit mir in Kontakt zu treten. Beschreiben Sie Ihr Anliegen so detailliert wie möglich, damit ich Ihnen bestmöglich weiterhelfen kann.<br /> Ich melde mich schnellstmöglich bei Ihnen zurück.</p>

              {/* input */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Input type="firstname" placeholder="Vorname" required="true" />
                <Input type="lastname" placeholder="Nachname" required="true" />
                <Input type="email" placeholder="Email" required="true" />
                <Input type="phone" placeholder="Telefonnummer" />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Leistung wählen" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Wähle eine Leistung</SelectLabel>
                    <SelectItem value="est">Web Entwicklung</SelectItem>
                    <SelectItem value="cst">Wordpress</SelectItem>
                    <SelectItem value="mst">SEO</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea className="h-[200px]" placeholder="Beschreiben Sie Ihr Anliegen so gut wie möglich" />

              {/* checkbox */}
              <div className='flex flex-row gap-4'>
                <Checkbox required="true"/>
                <label className='text-sm text-white/60'>
                Ich akzeptiere Ihre Datenschutzerklärung und stimme zu, dass meine persönlichen Daten, nämlich Vorname, Nachname, E-Mail und Telefonnummer zum Zweck der Bearbeitung Ihrer Anfrage verarbeitet werden. Diese Einwilligung kann jederzeit per E-Mail an ehmannjakob@gmail.com widerrufen werden. Die Daten werden nicht an Dritte weitergegeben.
                </label>
              </div>

              {/* button */}
              <Button size="md" className="mx-w-40]">Senden</Button>
            </form>
          </div>
          {/* info */}
          <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
            <ul className='flex flex-col gap-10'>
              {info.map((item, index) => {
                return (
                  <li key={index} className='flex items-center gap-6'>
                    <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                      <div className='text-[28px]'>{item.icon}</div>
                    </div>
                    <div className='flex-1'>
                      <div className='text-white/60'>{item.title}</div>
                      <p className='text-xl'>{item.description}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Kontakt