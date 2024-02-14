import Name from '@/shared/Name';
import { ProjectType, SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion';
import React from 'react'
import {
    MapPinIcon,
    GlobeAmericasIcon,
    HeartIcon
    
  } from "@heroicons/react/24/solid";
import Project from './Project';

const projects: Array<ProjectType> =[
    {
        icon: <MapPinIcon className="h-6 w-6 text-white"  />,
        title: "Redesigned blueBikes",
        description:
          "Revamped the Blue bikes app on Figma by enhancing user interactions, and introducing new features to create a more user-centric and feature-rich experience.",
        linkp: "https://www.figma.com/proto/1YQ7AeKnEXw3LrLNPgsgPU/Bluebikes-redesign?type=design&node-id=16-12&t=IJ1oMBKXpgHytxQh-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=16%3A12&show-proto-sidebar=1",
      },
      {
        icon: <GlobeAmericasIcon className="h-6 w-6 text-white" />,
        title: "Travel Website",
        description:
          "Developed a dynamic Travel website with Node.js and React, featuring a responsive design using HTML, CSS, and Bootstrap for enhanced user engagement and interactive content.",
          linkp:"https://github.com/KeerthanaJagana/NEU_TRAVEL_APP_WEBD_FINAL_PROJECT",
      },
      {
        icon: <HeartIcon className="h-6 w-6 text-white" />,
        title: "MindLink",
        description:
          "Developing a mental health app using Swift UI. Focusing on features and introducing new features to create a more user-centric and feature-rich experience.",
          linkp:"https://github.com/KeerthanaJagana/SwiftUI_Project_MindLink",
      },
];

const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };
  
type Props = {
    setSelectedPage : (value :SelectedPage) => void
  
};

const Projects = ({setSelectedPage}: Props) => {
  return (
   <section id='projects' className="mx-auto min-h-full w-5/6 py-40">
   <motion.div 
    onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
    >
    {/* HEADER */}
   <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Name>Projects</Name>
          
        </motion.div>

        {/* PROJECTS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex text-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
          
        >
          {projects.map((project: ProjectType) => (
              <motion.div             
              key={project.title}
              whileHover={{ scale: 1.05 }} // Scale up on hover
            >
              <Project
                icon={project.icon}
                title={project.title}
                description={project.description}
                linkp={project.linkp}
                setSelectedPage={setSelectedPage}
              />
            </motion.div>

          ))}
        </motion.div>
   </motion.div>
   

   </section>
  )
}

export default Projects