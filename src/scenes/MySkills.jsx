import React from "react";
import LineGradient from "@components/LineGradient";
import useMediaQuery from "@hooks/useMediaQuery";
import { motion } from "framer-motion";
import skillsImage from "@assets/skills-image.png";

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="compétences" className="pt-10 pb-24">
      {/* Header, image */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}>
          <p className="font-roboto font-semibold text-4xl mb-5 ">
            MES <span className="text-red">COMPÉTENCES</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, magni, impedit dolores temporibus velit asperiores placeat praesentium iure
            distinctio, aliquam corrupti. Voluptate aspernatur culpa delectus obcaecati esse provident expedita officiis.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 
                before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]">
              <img src={skillsImage} alt="skills" className="z-10" />
            </div>
          ) : (
            <img src={skillsImage} alt="skills" className="z-10" />
          )}
        </div>
      </div>

      {/* Skills */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* Experience */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}>
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-roboto font-semibold text-5xl">01</p>
              <p className="font-roboto font-semibold text-3xl mt-3">Expériences</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure ut obcaecati unde esse voluptas sed voluptatum veritatis accusamus. Ipsam fuga minus
            eum sapiente sunt dolorum maxime quos eaque quia iure.
          </p>
        </motion.div>
        {/* Innovative */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}>
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-roboto font-semibold text-5xl">02</p>
              <p className="font-roboto font-semibold text-3xl mt-3">Innovatif</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure ut obcaecati unde esse voluptas sed voluptatum veritatis accusamus. Ipsam fuga minus
            eum sapiente sunt dolorum maxime quos eaque quia iure.
          </p>
        </motion.div>
        {/* Imaginative */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}>
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-roboto font-semibold text-5xl">03</p>
              <p className="font-roboto font-semibold text-3xl mt-3">Imaginatif</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32  bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure ut obcaecati unde esse voluptas sed voluptatum veritatis accusamus. Ipsam fuga minus
            eum sapiente sunt dolorum maxime quos eaque quia iure.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
