import React from "react";
import LineGradient from "@components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title }) => {
  const projectTitleFormatted = title.split(" ").join("-").toLowerCase();
  const overlayStyles = `absolute h-full w-full opacity-0 
  hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  return (
    <motion.div className="relative" variants={projectVariant}>
      <div className={overlayStyles}>
        <p className="text-2xl font-roboto">{title}</p>
        <p className="mt-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nulla laborum placeat ut repudiandae alias eaque dolorum doloribus. Laudantium
          reprehenderit harum soluta error atque quibusdam qui sequi delectus molestiae ab.
        </p>
      </div>
      <img src={`assets/${projectTitleFormatted}.jpeg`} alt={`${projectTitleFormatted}`} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projets" className="pt-48 pb-48">
      {/* Headings */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}>
        <div className="">
          <p className="font-roboto font-semibold text-4xl ">
            MES <span className="text-red">PROJETS</span>
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, magni, impedit dolores temporibus velit asperiores placeat praesentium iure
          distinctio, aliquam corrupti. Voluptate aspernatur culpa delectus obcaecati esse provident expedita officiis.
        </p>
      </motion.div>

      {/* Projects */}
      <div className="flex justify-center ">
        <motion.div className="sm:grid sm:grid-cols-3" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={container}>
          {/* Row 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red 
          max-w-[400px] max-h-[400px] text-2xl font-roboto font-semibold">
            BEAUTIFUL USER INTERFACES
          </div>
          <Project title="Project 2" />
          <Project title="Project 3" />

          {/* Row 2 */}
          <Project title="Project 4" />
          <Project title="Project 5" />
          <Project title="Project 6" />
          {/* Row 3 */}
          <Project title="Project 7" />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue 
          max-w-[400px] max-h-[400px] text-2xl font-roboto font-semibold">
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
