import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import logo from "../assets/Logo.svg";
import { Button, Paper } from "@material-ui/core";
import bigPicture from "../assets/Illustration1.svg";
import { colors } from "./ColorsD";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  bigPic: {
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
}));
function StartC() {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  // close in mobile mode
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  // open event for mobile mode
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  // the menu in modile mode
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>
      <MenuItem onClick={handleMobileMenuClose}>
        <p style={{ fontSize: 15, fontWeight: 500 }}>Overview</p>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <p style={{ fontSize: 15, fontWeight: 500 }}>Contagion</p>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <p style={{ fontSize: 15, fontWeight: 500 }}>Symptomps</p>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <p style={{ fontSize: 15, fontWeight: 500 }}>Prevention</p>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <p>Contact</p>
      </MenuItem>
    </Menu>
  );
  return (
    <div>
      {/* app bar */}
      <AppBar
        elevation={0}
        style={{
          paddingLeft: 0,
          width: "80%",
          zIndex: 1,
          backgroundColor: "transparent",
          position: "relative",
          marginLeft: "10%",
          marginBottom: 50,
        }}>
        <Toolbar>
          {/* logo */}
          <img
            src={logo}
            alt="logo"
            style={{
              height: 50,
              objectFit: "contain",
            }}
          />
          <div className={classes.grow} />
          {/* desktop toolbar*/}
          <div className={classes.sectionDesktop}>
            <Button>
              <p style={{ fontSize: 12, color: colors.rd, fontWeight: 500 }}>
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
          {/* modile toolbar */}
          <div className={classes.sectionMobile}>
            <IconButton aria-haspopup="true" onClick={handleMobileMenuOpen}>
              <MoreIcon style={{ color: colors.rd }} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {/* big pic */}
      <Paper
        style={{
          width: "90%",
          height: "80vh",
          marginLeft: "10%",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          position: "relative",
        }}
        elevation={0}>
        {/* text in the overBigPic */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
            height: "100%",
            zIndex: 10,
          }}>
          <p style={{ fontSize: 25, color: colors.rd, fontWeight: 500 }}>
            COVID-19 Alert
          </p>
          <p style={{ fontSize: 35, color: colors.gr, fontWeight: 700 }}>
            Stay at Home quarantine
          </p>
          <p style={{ fontSize: 35, color: colors.gr, fontWeight: 700 }}>
            To stop Corona virus
          </p>
          <p style={{ color: colors.dgr, fontWeight: 400, marginTop: 35 }}>
            There is no specific medicine to prevent or treat coronavirus
            <br />
            disease (COVID-19). People may need supportive care to .
          </p>
          <Button
            style={{
              color: "#fff",
              backgroundColor: colors.rd,
              marginTop: 35,
              borderRadius: 65,
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 25,
              paddingRight: 25,
              width: "fit-content",
            }}>
            Let Us Help
          </Button>
        </div>
        {/* overBigPic image */}
        <img src={bigPicture} className={classes.bigPic} alt="BigPic" />
      </Paper>
    </div>
  );
}

export default StartC;
