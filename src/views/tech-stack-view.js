import { Box, Button, Typography } from "@mui/material";
import { ReactComponent as MainImage } from "../assets/svg/watering-website.svg";
import { ReactComponent as CSharpLogo } from "../assets/svg/logos/csharp-plain.svg";
import { ReactComponent as CSSLogo } from "../assets/svg/logos/css3-plain.svg";
import { ReactComponent as FigmaLogo } from "../assets/svg/logos/figma-original.svg";
import { ReactComponent as HTMLLogo } from "../assets/svg/logos/html5-plain.svg";
import { ReactComponent as JSLogo } from "../assets/svg/logos/javascript-plain.svg";
import { ReactComponent as TSLogo } from "../assets/svg/logos/typescript-plain.svg";
import { ReactComponent as JestLogo } from "../assets/svg/logos/jest-plain.svg";
import { ReactComponent as MuiLogo } from "../assets/svg/logos/materialui-original.svg";
import { ReactComponent as NextLogo } from "../assets/svg/logos/nextjs-original.svg";
import { ReactComponent as PhotoshopLogo } from "../assets/svg/logos/photoshop-line.svg";
import { ReactComponent as ReactLogo } from "../assets/svg/logos/react-original.svg";
import { ReactComponent as ReduxLogo } from "../assets/svg/logos/redux-original.svg";
import { ReactComponent as ThreeLogo } from "../assets/svg/logos/threejs-original.svg";
import { ReactComponent as UnityLogo } from "../assets/svg/logos/unity-original.svg";
import { useEffect, useRef } from "react";
import { useIsInViewport } from "../use-is-in-viewport";
import "../App.css";

const logoHeight = "64px";

const LogoContainer = ({ children, label }) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transitionDuration: "0.2s",
        ":hover": {
          transform: "scale(1.2)",
        },
        ":hover .logoLabel": {
          color: "black",
        },
      }}
    >
      {children}
      <Typography className="logoLabel" sx={logoTextStyle}>
        {label}
      </Typography>
    </Box>
  );
};

const logoTextStyle = {
  maxWidth: "72px",
  fontSize: "min(1vw, 10px)",
  fontFamily: "'Roboto Mono', monospace",
  fontWeight: 800,
  color: "white",
  transitionDuration: "0.2s",
};

const headerStyle = {
  fontFamily: "'Roboto Mono', monospace",
  fontSize: 48,
};

const paragraphStyle = {
  fontFamily: "'Roboto Mono', monospace",
  fontSize: 20,
  color: "#6F6F6F",
};

const buttonStyle = {
  height: "48px",
  width: "220px",
  borderRadius: "10000px",
  paddingX: 3,
  paddingY: 0,
  marginX: 0,
  marginY: 0,
  fontSize: 16,
  fontFamily: "'Roboto Mono', monospace",
  textTransform: "none",
  fontStyle: "normal",
  fontWeight: 400,
  color: "#F5E2FF",
  backgroundColor: "#9200ff",
  ":hover": {
    backgroundColor: "#7500ce",
  },
};

export const TechStackView = () => {
  const targetRef = useRef();
  const count = useRef(0);

  const isInViewPort = useIsInViewport(targetRef);

  useEffect(() => {
    if(isInViewPort) count.current += 1
  })


 

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <MainImage ref={targetRef} style={{ height: "60vh" }} className={isInViewPort && count.current === 0 ? "animate-tech-stack-image" : null}/>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "column",
          paddingBottom: 6,
        }}
      >
        <Typography sx={headerStyle} className={isInViewPort && count.current === 0 ? "animate-tech-stack-title" : null}>
          What I do
        </Typography>

        <Typography
          className={isInViewPort && count.current === 0 ? "animate-tech-stack-description" : null}
          sx={{
            ...paragraphStyle,
            marginTop: 2,
            marginBottom: 4,
          }}
        >
          Front-end developer who wants to explore every tech stack
        </Typography>
        <Box
        className={isInViewPort && count.current === 0 ? "animate-tech-stack-logos" : null}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 5,
            maxWidth: "750px",
            marginTop: 4,
            rowGap: 8,
          }}
        >
          <LogoContainer label="HTML">
            <HTMLLogo style={{ height: logoHeight }} />
          </LogoContainer>

          <LogoContainer label="CSS">
            <CSSLogo style={{ height: logoHeight }} />
          </LogoContainer>

          <LogoContainer label="JavaScript">
            <JSLogo style={{ height: logoHeight }} />
          </LogoContainer>

          <LogoContainer label="TypeScript">
            <TSLogo style={{ height: logoHeight }} />
          </LogoContainer>

          <LogoContainer label="React">
            <ReactLogo style={{ height: logoHeight }} />
          </LogoContainer>

          <LogoContainer label="Next">
            <NextLogo style={{ height: logoHeight }} />
          </LogoContainer>

          <LogoContainer label="Material UI">
            <MuiLogo style={{ height: logoHeight }} />
          </LogoContainer>

          <LogoContainer label="Three JS">
            <ThreeLogo style={{ height: logoHeight }} />
          </LogoContainer>

          <LogoContainer label="Redux">
            <ReduxLogo style={{ height: logoHeight }} />
          </LogoContainer>

          <LogoContainer label="Jest">
            <JestLogo style={{ height: logoHeight }} />
          </LogoContainer>

          <LogoContainer label="Unity">
            <UnityLogo style={{ height: logoHeight }} />
          </LogoContainer>

          <LogoContainer label="C#">
            <CSharpLogo style={{ height: logoHeight }} />
          </LogoContainer>

          <LogoContainer label="Photoshop">
            <PhotoshopLogo style={{ height: logoHeight }} />
          </LogoContainer>

          <LogoContainer label="Figma">
            <FigmaLogo style={{ height: logoHeight }} />
          </LogoContainer>
        </Box>
      </Box>
    </Box>
  );
};
