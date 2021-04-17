import React from "react";
import { Button, Container } from "@material-ui/core";
import { colors } from "./ColorsD";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
function SubscribC() {
  return (
    <Container
      style={{
        height: 200,
        alingItems: "center",
        justifyContent: "space-around",
        display: "flex",
        textAlign: "center",
        flexDirection: "column",
        position: "relative",
      }}
      maxWidth="sm">
      <p
        style={{
          fontSize: 35,
          color: colors.gr,
          fontWeight: 400,
        }}>
        Have Question in mind?
        <br />
        Let us help you
      </p>
      <div
        style={{
          display: "flex",
          alingItems: "center",
          padding: 8,
          backgroundColor: "#fff",
          borderRadius: 57,
          marginLeft: 40,
          marginRight: 40,
          flexDirection: "row",
        }}>
        <InputBase
          style={{ flex: 1, marginLeft: 8 }}
          placeholder="jinacoolprojects@gmail.com"
        />
        <Button
          style={{
            paddingLeft: 40,
            paddingRight: 40,
            paddingTop: 8,
            paddingBottom: 8,
            backgroundColor: colors.rd,
            color: "#fff",
            borderRadius: 100,
          }}>
          Send
        </Button>
      </div>
    </Container>
  );
}

export default SubscribC;
