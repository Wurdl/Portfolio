import Link from 'next/link'

import {FaGithub, FaLinkedinIn, FaInstagram} from 'react-icons/fa'

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/Wurdl' },
  { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/jakob-ehmann-2bb548271/' },
  // { icon: <FaInstagram />, path: '' }
]

const Social = ({containerStyles, iconStyle}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return <Link key={index} href={item.path} target="_blank" className={iconStyle}>
          {item.icon}
        </Link>
      })}
    </div>
  )
}

export default Social