// src/pages/LandingPage.js
import { useState } from "react";
import Header from "../components/Headers";
import StepGuide from "../components/StepGuide";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import BusinessTypeDropdown from "../components/BusinessTypeDropdown";
import Quiz from "../components/Quiz";
import Timer from "../components/Timer";
import CTA from "../components/CTA";

const LandingPages = () => {
  const [businessType, setBusinessType] = useState("");

  return (
    <div>
      <Header />
      <StepGuide />
      <TestimonialsCarousel />
      <BusinessTypeDropdown setBusinessType={setBusinessType} />
      <Quiz />
      <Timer />
      <CTA businessType={businessType} /> {/* Pass businessType to CTA */}
    </div>
  );
};

export default LandingPages;
