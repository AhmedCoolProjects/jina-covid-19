import React from "react";
import StartC from "../components/StartC";
import AboutUsC from "../components/AboutUsC";
import ContagionC from "../components/ContagionC";
import SymptompsC from "../components/SymptompsC";
import WhatShouldWeDoC from "../components/WhatShouldWeDoC";
import MapStatisticsC from "../components/MapStatisticsC";
import SubscribC from "../components/SubscribC";
import FooterC from "../components/FooterC";

function DashboardP() {
  return (
    <div>
      <StartC />
      <AboutUsC />
      <ContagionC />
      <SymptompsC />
      <WhatShouldWeDoC />
      <MapStatisticsC />
      <SubscribC />
      <FooterC />
    </div>
  );
}

export default DashboardP;
