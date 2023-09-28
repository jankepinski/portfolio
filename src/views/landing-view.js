import { Box, Button, Typography } from "@mui/material";
import { ReactComponent as WavingHand } from "../assets/svg/waving-hand.svg";
import { ReactComponent as MainImage } from "../assets/svg/developer.svg";
import "../App.css";


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
  color: "white",
  backgroundColor: "#9200ff",
  ":hover": {
    backgroundColor: "#7500ce",
  }
};

export const LandingView = ({handleScroll}) => {
  return (
    <Box 
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
        className="animate-main-text"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={headerStyle}>Hi all</Typography>
          <WavingHand
            style={{
              height: "72px",
              width: "72px",
              marginLeft: "40px",
              marginRight: "40px",
              zIndex: "0"
            }}
          />
          <Typography sx={headerStyle}>I’m Jan</Typography>
        </Box>
        <Typography
        className="animate-main-text"
          sx={{
            ...paragraphStyle,
            maxWidth: "520px",
            textAlign: "justify",
            marginTop: 4,
            marginBottom: 4,
          }}
        >
          A passionate Front-end developer with experience in building Web
          applications with React, JavaScript, TypeScript, HTML, CSS and some
          other cool libraries and frameworks.
        </Typography>
        <Box
        className="animate-main-buttons"
          sx={{
            display: "flex",
            maxWidth: "520px",
            width: "520px",
            justifyContent: "space-between",
          }}
        >
          <Button sx={buttonStyle} variant="contained">
            See my github
          </Button>
          <Button onClick={handleScroll} sx={buttonStyle} variant="contained">
            See my tech stack
          </Button>
        </Box>
      </Box>
      <MainImage className="animate-main-image" style={{ height: "60vh" }} />
    </Box>
  );
};
