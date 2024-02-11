import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

type Props = {
    icon: JSX.Element;
    title: string;
    description: string;
    setSelectedPage: (value: SelectedPage) => void;
    linkp:string;
}

const Project = ({ icon, title, description,linkp, setSelectedPage }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-gray-500 p-4">
          {icon}
        </div>
      </div>

      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      {/* <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
       
        href={linkp}
      >
        <p>Learn More</p>
      </AnchorLink> */}
       <a href={linkp} target="_blank" rel="noopener noreferrer" className="project-link text-lg font-bold text-primary-500 underline hover:text-secondary-500">Read more</a>
       
    </motion.div>
  )
}

export default Project