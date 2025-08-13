import React, { useEffect } from "react";
import Header from "../../components/ui/Header";
import Footer from "../homepage/components/Footer";
import AboutHero from "./components/AboutHero";
import OurStory from "./components/OurStory";
import OurPhilosophy from "./components/OurPhilosophy";
import OurJourney from "./components/OurJourney";
import OurValues from "./components/OurValues";

const About = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* About Hero Section */}
      <AboutHero />

      {/* Our Story Section */}
      <OurStory />

      {/* Our Philosophy Section */}
      <OurPhilosophy />

      {/* Our Journey Section */}
      {/* <OurJourney /> */}

      {/* Our Values Section */}
      <OurValues />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
