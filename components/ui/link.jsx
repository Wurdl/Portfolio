"use client"

import Link from 'next/link'
import {BsArrowDownRight} from 'react-icons/bs'


const JeLink = ({service}) => {
  return (
    <Link href={service.href} className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center group-hover:-rotate-45'>
        <BsArrowDownRight className='text-primary text-3xl' />
    </Link>
  )
}

export default JeLink