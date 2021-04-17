import React from "react";
import { colors } from "./ColorsD";
import il6 from "../assets/Illustration6.svg";

function SymptompsC() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        height: "max-content",
        position: "relative",
        marginTop: 32,
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
          Symptomps
        </p>
        <p style={{ color: colors.dgr, fontWeight: 400, marginTop: 15 }}>
          Corona viruses are a type of virus. There are many different kinds,
          and some cause <br /> disease. A newly identified type has caused a
          recent outbreak of respiratory
        </p>
      </div>

      {/* BigImage */}
      <div className="symptompsc_big_img">
        <img
          src={il6}
          style={{
            width: "100%",
            objectFit: "contain",
            position: "relative",
          }}
          alt="SymptompsCBigImg"
        />
      </div>
    </div>
  );
}

export default SymptompsC;
