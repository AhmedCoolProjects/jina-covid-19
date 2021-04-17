import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import logo from "../assets/Logo.svg";
import { Button, Grid, Paper } from "@material-ui/core";
import p1 from "../assets/Illustration1.svg";
import { colors } from "./ColorsD";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    height: 50,
    objectFit: "contain",
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
}));
function StartC() {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>
      <MenuItem>
        <p style={{ fontSize: 15, color: colors.rd, fontWeight: 500 }}>
          Overview
        </p>
      </MenuItem>
      <MenuItem>
        <p style={{ fontSize: 15, color: colors.rd, fontWeight: 500 }}>
          Contagion
        </p>
      </MenuItem>
      <MenuItem>
        <p style={{ fontSize: 15, color: colors.rd, fontWeight: 500 }}>
          Symptomps
        </p>
      </MenuItem>
      <MenuItem>
        <p style={{ fontSize: 15, color: colors.rd, fontWeight: 500 }}>
          Prevention
        </p>
      </MenuItem>
      <MenuItem>
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
          <img src={logo} alt="logo" className={classes.logo} />
          <div className={classes.grow} />
          {/* desktop */}
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
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit">
              <MoreIcon />
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
        {/* left */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
            height: "100%",
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
        {/* right */}
        <img
          src={p1}
          style={{
            height: "100%",
            objectFit: "contain",
            position: "absolute",
            right: 0,
            top: 0,
          }}
          alt="p1"
        />
      </Paper>
    </div>
  );
}

export default StartC;
