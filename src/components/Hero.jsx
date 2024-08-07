import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          {/* Circle */}
          <div
            className={`${styles.remarkColour} w-3 h-4 custom-triangle remark-colour`}
          />
          {/* Line */}
          <div className="reversed-custom-triangle w-3 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm{" "}
            <span className={`${styles.tertiaryColourFont} anarch-font`}>
              Carlos
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a Front-End Engineer dedicated to refining
            <br className="sm:block hidden" /> user interfaces and enhancing
            user experiences . <br className="sm:block hidden" />
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center self-end">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 rounded-full bg-[#cc2936] mb-1"
            ></motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
