import { Button, Container, Link, Typography } from "@material-ui/core";
import logo from "../assets/Logo.svg";
import React from "react";
import { colors } from "./ColorsD";

function FooterC() {
  return (
    <Container
      style={{
        position: "relative",
        height: 150,
        marginTop: 32,
        marginBottom: 32,
      }}
      maxWidth="md">
      <img src={logo} alt="logo" className="footer_logo2" />
      <img src={logo} alt="logo" className="footer_logo" />
      <div
        style={{
          height: 50,
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}>
        <Button>
          <p style={{ fontSize: 12, color: colors.gr, fontWeight: 500 }}>
            Overview
          </p>
        </Button>
        <Button color="inherit">
          <p style={{ fontSize: 12, color: colors.gr, fontWeight: 500 }}>
            Contagion
          </p>
        </Button>
        <Button color="inherit">
          <p style={{ fontSize: 12, color: colors.gr, fontWeight: 500 }}>
            Symptomps
          </p>
        </Button>
        <Button color="inherit">
          <p style={{ fontSize: 12, color: colors.gr, fontWeight: 500 }}>
            Prevention
          </p>
        </Button>
        <Button color="inherit">
          <p style={{ fontSize: 12, color: colors.gr, fontWeight: 500 }}>
            Contact
          </p>
        </Button>
      </div>
      {/* links */}

      <Typography
        style={{ marginTop: 32 }}
        variant="body2"
        color="textSecondary"
        align="center">
        {"Copyright © "}
        {new Date().getFullYear()} {"."}
        <br />
        {"Designed By: "}
        <Link
          target="blank_"
          color="inherit"
          style={{ fontWeight: 700 }}
          href="https://dribbble.com/shamimanasrin?ref=uistore.design">
          Shamima Nasrin
        </Link>{" "}
        {"Developed By:  "}
        <Link
          target="blank_"
          style={{ fontWeight: 700 }}
          color="inherit"
          href="https://www.linkedin.com/in/bargady-ahmed-082b30177">
          Ahmed BARGADY
        </Link>{" "}
      </Typography>
    </Container>
  );
}

export default FooterC;
