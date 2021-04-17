import React from "react";
import { colors } from "./ColorsD";
import il7 from "../assets/Illustration7.svg";
import il8 from "../assets/Illustration8.svg";
import il9 from "../assets/Illustration9.svg";
import il10 from "../assets/Illustration10.svg";
import onep from "../assets/one.svg";
import twop from "../assets/two.svg";
import threep from "../assets/three.svg";
import fourp from "../assets/four.svg";
import WhatShouldWeDoCardC from "./WhatShouldWeDoCardC";

const data_ = [
  {
    id: 0,
    image: il7,
    title: "Wear Masks",
    imageNbr: onep,
    text: (
      <p>
        Continually seize impactful vortals rather than future-proof supply
        <br /> chains. Uniquely exploit emerging niches via fully tested
        <br /> meta-services. Competently pursue standards compliant leadership
        <br /> skills vis-a-vis pandemic "outside the box" thinking. Objectively
      </p>
    ),
  },
  {
    id: 1,
    image: il8,
    title: "Wash Your Hands",
    imageNbr: twop,
    text: (
      <p>
        Continually seize impactful vortals rather than future-proof supply
        <br />
        chains. Uniquely exploit emerging niches via fully tested
        <br />
        meta-services. Competently pursue standards compliant leadership
        <br />
        skills vis-a-vis pandemic "outside the box" thinking. Objectively
        <br />
        Continually seize impactful vortals
      </p>
    ),
  },
  {
    id: 2,
    image: il9,
    title: "Use Nose - Rag",
    imageNbr: threep,
    text: (
      <p>
        Continually seize impactful vortals rather than future-proof supply
        <br />
        chains. Uniquely exploit emerging niches via fully tested
        <br />
        meta-services. Competently pursue standards compliant leadership
        <br />
        skills vis-a-vis pandemic "outside the box" thinking. Objectively
      </p>
    ),
  },
  {
    id: 3,
    image: il10,
    title: "Avoid contacts",
    imageNbr: fourp,
    text: (
      <p>
        Continually seize impactful vortals rather than future-proof supply
        <br />
        chains. Uniquely exploit emerging niches via fully tested
        <br />
        meta-services. Competently pursue standards compliant leadership
        <br />
        skills vis-a-vis pandemic
      </p>
    ),
  },
];

function WhatShouldWeDoC() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        marginTop: 32,
        alignItems: "center",
      }}>
      {/* top */}
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          marginBottom: 32,
        }}>
        <p style={{ fontSize: 30, color: colors.gr, fontWeight: 700 }}>
          What should we do
        </p>
        <p style={{ color: colors.dgr, fontWeight: 400, marginTop: 15 }}>
          Corona viruses are a type of virus. There are many different kinds,
          and some <br />
          cause disease. A newly identified type has caused
        </p>
      </div>
      {data_.map((cont) => (
        <WhatShouldWeDoCardC
          image={cont.image}
          imageNbr={cont.imageNbr}
          title={cont.title}
          text={cont.text}
          dirctImgR={cont.id % 2 === 0}
          key={cont.id}
        />
      ))}
    </div>
  );
}

export default WhatShouldWeDoC;
