import React from "react";

import Hero from "../components/Hero.tsx";
import Benefits from "../components/Benefits.tsx";
import Promotional from "../components/Promotional.tsx";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="mt-12"> {/* Added spacing between Hero and Promotional */}
        <Promotional />
      </div>
      <Benefits />
    </div>
  );
};

export default Home;
