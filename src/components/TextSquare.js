import { Button } from "@mui/material";

const TextSquare = ({ heading, description }) => {
  return (
    <div
      style={{
        padding: "0 10rem",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "left",
        height: "100%",
      }}
    >
      <h2
        style={{
          fontWeight: 800,
          fontSize: "2.5rem",
        }}
      >
        {heading}
      </h2>
      <p style={{ lineHeight: 1.8, margin: "2rem 0" }}>{description}</p>
      <Button sx={{ width: "8rem" }}>Learn More</Button>
    </div>
  );
};

export default TextSquare;
