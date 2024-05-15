import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  //Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

import { styles } from "./styles";

const App = () => {
  return (
    <BrowserRouter>
      <div className={`${styles.backgroundColour} relative z-0`}>
        {/* To Do Update / Remove Background */}
        {/* <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center"> */}
        <Navbar />
        <Hero />
        {/* </div> */}
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
