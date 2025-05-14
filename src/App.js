import React from "react";
import Hero from "./components/Hero";
import ProductReveal from "./components/ProductReveal";
import FeatureHighlights from "./components/FeatureHighlights";

function App() {
  return (
    <div className="min-h-screen bg-darkbase1 text-neutralTextLight font-inter">
      <Hero />
      <ProductReveal />
      <FeatureHighlights />
      {/* Other sections will be added here */}
    </div>
  );
}

export default App;
