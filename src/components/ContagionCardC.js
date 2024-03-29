import { Paper, Grid } from "@material-ui/core";
import React from "react";
import { colors } from "./ColorsD";

function ContagionCardC({ imgg, title, texts }) {
  return (
    <Grid
      style={{ height: 390, width: "100%", marginTop: 10 }}
      item
      sx={12}
      md={4}
      sm={6}>
      <Paper
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-around",
          boxShadow: "0px 5px 80px 0px rgba(0, 0, 0, 0.08)",
          paddingTop: 10,
          paddingBottom: 10,
        }}>
        <img
          src={imgg}
          alt="cardImage"
          style={{
            width: "60%",
            objectFit: "contain",
          }}
        />
        {/* texts */}
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
          <p style={{ fontSize: 20, color: colors.gr, fontWeight: 600 }}>
            {title}
          </p>
          {texts.map((txt, index) => (
            <p
              key={index}
              style={{ fontSize: 12, color: colors.dgr, fontWeight: 400 }}>
              {txt}
            </p>
          ))}
        </div>
      </Paper>
    </Grid>
  );
}

export default ContagionCardC;
