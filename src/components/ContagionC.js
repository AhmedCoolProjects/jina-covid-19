import { Grid, Container } from "@material-ui/core";
import React from "react";
import { colors } from "./ColorsD";
import ContagionCardC from "./ContagionCardC";
import il1 from "../assets/Illustration3.svg";
import il2 from "../assets/Illustration4.svg";
import il3 from "../assets/Illustration5.svg";
import p11 from "../assets/coronapp2.svg";

const gridItems = [
  {
    title: "Air Transmission",
    texts: [
      "Objectively evolve tactical expertise before ",
      "extensible initiatives. Efficiently simplify",
    ],
    imgg: il1,
  },
  {
    title: "Human Contacts",
    texts: ["Washing your hands is one of thesimplest", "ways you can protect"],
    imgg: il2,
  },
  {
    title: "Containted Objects",
    texts: [
      "Use the tissue while sneezing,In this way,",
      "you can protect your droplets.",
    ],
    imgg: il3,
  },
];
function ContagionC() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        height: 520,
        position: "relative",
        alignItems: "center",
        justifyContent: "space-between",
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
        }}>
        <p style={{ fontSize: 15, color: colors.rd, fontWeight: 700 }}>
          COVID-19
        </p>
        <p style={{ fontSize: 30, color: colors.gr, fontWeight: 700 }}>
          Contagion
        </p>
        <p style={{ color: colors.dgr, fontWeight: 400, marginTop: 15 }}>
          Corona viruses are a type of virus. There are many different kinds,
          and
          <br />
          some cause disease. A newly identified type
        </p>
      </div>

      {/* grid */}
      <Container style={{ position: "relative" }} maxWidth="md">
        <img
          src={p11}
          style={{
            height: 300,
            objectFit: "contain",
            position: "absolute",
            left: -140,
            bottom: -50,
            zIndex: -1,
          }}
          alt="p11"
        />
        <Grid container spacing={3}>
          {gridItems.map((gItem, index) => (
            <ContagionCardC
              key={index}
              title={gItem.title}
              imgg={gItem.imgg}
              texts={gItem.texts}
            />
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default ContagionC;
