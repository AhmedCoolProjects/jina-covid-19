import React from "react";
import p2 from "../assets/Illustration2.svg";
import { colors } from "./ColorsD";
import p3 from "../assets/coronapp1.svg";
import p4 from "../assets/coronapp2.svg";
import { Button } from "@material-ui/core";
function AboutUsC() {
  return (
    <div
      style={{
        width: "100%",
        paddingLeft: "5%",
        paddingRight: "5%",
        display: "flex",
        flexDirection: "row",
        height: "80vh",
        position: "relative",
        alignItems: "center",
        justifyContent: "flex-end",
      }}>
      <img
        src={p3}
        style={{
          height: 200,
          objectFit: "contain",
          position: "absolute",
          right: 0,
          bottom: 40,
        }}
        alt="p2"
      />
      <img
        src={p4}
        style={{
          height: 120,
          objectFit: "contain",
          position: "absolute",
          right: 40,
          bottom: -60,
        }}
        alt="p2"
      />
      {/* left */}
      <img
        src={p2}
        style={{
          height: "100%",
          objectFit: "contain",
          position: "absolute",
          left: 0,
          top: 0,
        }}
        alt="p2"
      />
      {/* right */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          height: "100%",
        }}>
        <p style={{ fontSize: 20, color: colors.rd, fontWeight: 500 }}>
          What is COVID-19
        </p>
        <p style={{ fontSize: 30, color: colors.gr, fontWeight: 700 }}>
          Coronavirus
        </p>
        <p style={{ color: colors.dgr, fontWeight: 400, marginTop: 20 }}>
          Corona viruses are a type of virus. There are many different kinds,
          and <br />
          some cause disease. A newly identified type has caused a recent
          <br />
          outbreak of respiratory illness now called COVID-19.Lauren Sauer,
          M.S.,
          <br /> the director of operations with the Johns Hopkins Office of
          Critical Event
          <br /> Preparedness and Response
        </p>
        <Button
          style={{
            color: colors.rd,
            backgroundColor: colors.lrd,
            marginTop: 20,
            borderRadius: 65,
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 20,
            paddingRight: 20,

            width: "fit-content",
          }}>
          Let Us Help
        </Button>
      </div>
    </div>
  );
}

export default AboutUsC;
