import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import { colors } from "./ColorsD";

const useStyle = makeStyles((theme) => ({
  priImgR: {
    height: "100%",
    objectFit: "contain",
    position: "absolute",
    right: 0,
    top: 0,
    opacity: 1,
    [theme.breakpoints.down("md")]: {
      opacity: 0.5,
    },
  },
  priImgL: {
    height: "100%",
    objectFit: "contain",
    position: "absolute",
    left: 0,
    top: 0,
    opacity: 1,
    [theme.breakpoints.down("md")]: {
      opacity: 0.5,
    },
  },
}));

function WhatShouldWeDoCardC({ dirctImgR, image, title, imageNbr, text }) {
  const classes = useStyle();
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "row",
        height: 400,
        position: "relative",
        alignItems: "center",
        justifyContent: dirctImgR ? "flex-start" : "flex-end",
      }}
      maxWidth="md">
      {/* 1 */}
      {/* left */}
      <img
        src={image}
        className={dirctImgR ? classes.priImgR : classes.priImgL}
        alt="1"
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}>
          <img
            src={imageNbr}
            style={{
              width: 50,
              objectFit: "contain",
              marginRight: 20,
              marginLeft: -10,
            }}
            alt="imageNbr"
          />
          <p
            style={{
              fontSize: 35,
              color: colors.gr,
              fontWeight: 400,
            }}>
            {title}
          </p>
        </div>
        <p
          style={{
            color: colors.dgr,
            fontWeight: 400,
            marginTop: 20,
            marginLeft: 50,
          }}>
          {text}
        </p>
      </div>
    </Container>
  );
}

export default WhatShouldWeDoCardC;
