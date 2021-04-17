import { Container } from "@material-ui/core";
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
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          height: 400,
          position: "relative",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
        maxWidth="md">
        {/* 1 */}
        {/* left */}
        <img
          src={il7}
          style={{
            height: "100%",
            objectFit: "contain",
            position: "absolute",
            right: 0,
            top: 0,
          }}
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
              src={onep}
              style={{
                width: 50,
                objectFit: "contain",
                marginRight: 20,
                marginLeft: -10,
              }}
              alt="onep"
            />
            <p
              style={{
                fontSize: 35,
                color: colors.gr,
                fontWeight: 400,
              }}>
              Wear Masks
            </p>
          </div>
          <p
            style={{
              color: colors.dgr,
              fontWeight: 400,
              marginTop: 20,
              marginLeft: 50,
            }}>
            Continually seize impactful vortals rather than future-proof supply
            <br /> chains. Uniquely exploit emerging niches via fully tested
            <br /> meta-services. Competently pursue standards compliant
            leadership
            <br /> skills vis-a-vis pandemic "outside the box" thinking.
            Objectively
          </p>
        </div>
      </Container>
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          height: 400,
          position: "relative",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
        maxWidth="md">
        <img
          src={il8}
          style={{
            height: "100%",
            objectFit: "contain",
            position: "absolute",
            left: 0,
            top: 0,
          }}
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
              src={twop}
              style={{
                width: 50,
                objectFit: "contain",
                marginRight: 20,
                marginLeft: -10,
              }}
              alt="onep"
            />
            <p
              style={{
                fontSize: 35,
                color: colors.gr,
                fontWeight: 400,
              }}>
              Wash Your Hands
            </p>
          </div>
          <p
            style={{
              color: colors.dgr,
              fontWeight: 400,
              marginTop: 20,
              marginLeft: 50,
            }}>
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
        </div>
      </Container>
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          height: 400,
          position: "relative",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
        maxWidth="md">
        {/* 1 */}
        {/* left */}
        <img
          src={il9}
          style={{
            height: "100%",
            objectFit: "contain",
            position: "absolute",
            right: 0,
            top: 0,
          }}
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
              src={threep}
              style={{
                width: 50,
                objectFit: "contain",
                marginRight: 20,
                marginLeft: -10,
              }}
              alt="onep"
            />
            <p
              style={{
                fontSize: 35,
                color: colors.gr,
                fontWeight: 400,
              }}>
              Use Nose - Rag
            </p>
          </div>
          <p
            style={{
              color: colors.dgr,
              fontWeight: 400,
              marginTop: 20,
              marginLeft: 50,
            }}>
            Continually seize impactful vortals rather than future-proof supply
            <br />
            chains. Uniquely exploit emerging niches via fully tested
            <br />
            meta-services. Competently pursue standards compliant leadership
            <br />
            skills vis-a-vis pandemic "outside the box" thinking. Objectively
          </p>
        </div>
      </Container>
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          height: 400,
          position: "relative",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
        maxWidth="md">
        {/* 1 */}
        {/* left */}
        <img
          src={il10}
          style={{
            height: "100%",
            objectFit: "contain",
            position: "absolute",
            left: 0,
            top: 0,
          }}
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
              src={fourp}
              style={{
                width: 50,
                objectFit: "contain",
                marginRight: 20,
                marginLeft: -10,
              }}
              alt="onep"
            />
            <p
              style={{
                fontSize: 35,
                color: colors.gr,
                fontWeight: 400,
              }}>
              Avoid contacts
            </p>
          </div>
          <p
            style={{
              color: colors.dgr,
              fontWeight: 400,
              marginTop: 20,
              marginLeft: 50,
            }}>
            Continually seize impactful vortals rather than future-proof supply
            <br />
            chains. Uniquely exploit emerging niches via fully tested
            <br />
            meta-services. Competently pursue standards compliant leadership
            <br />
            skills vis-a-vis pandemic
          </p>
        </div>
      </Container>
    </div>
  );
}

export default WhatShouldWeDoC;
