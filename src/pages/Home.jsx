import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
//state import from store folder
import state from "../store";
import {CustomButton} from "../components"

const Home = () => {
  // iseSnapshot for using state of "valtio"
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="./threejs.png"
              alt="Logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
         
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                LET'S <br className="xl:block hidden" />
                DO IT.
              </h1>
            </motion.div>
           
            <motion.div className="flex flex-col gap-5" {...headContentAnimation}>
              <p className="max-w-md font-normal text-gray-600 text-base">Create your unique exclusive shirt with our 
                brand-new 3D cusomization tool, <strong>Unleash your 
               imagination</strong>{" "}
               and defind your own style
              </p>

              <CustomButton  
              type="filled"
              title="Customize It"
              handleClick={() => state.intro = false}
              customStyle="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
         
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
