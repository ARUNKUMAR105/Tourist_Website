import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";


function CenterLabel({ text }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        fontWeight: 600,
        p: 0.5,
      }}
    >
      {text}
    </Box>
  );
}

function Destination({ open, setOpen }) {

  const states = [
    { name: "Goa", path: "/goa" },
    { name: "Gujarat", path: "/gujarat" },
    { name: "Himachal Pradesh", path: "/himachal" },
    { name: "Karnataka", path: "/karnataka" },
    { name: "Kerala", path: "/kerala" },
    { name: "Maharashtra", path: "/maharashtra" },
    { name: "Rajasthan", path: "/rajasthan" },
    { name: "Tamil Nadu", path: "/tamilnadu" },
    { name: "Uttar Pradesh", path: "/uttarpradesh" },
    { name: "Uttarakhand", path: "/uttarakhand" },
  ];

  return (
    <Box sx={{ position: "relative" }}>

      <Button
        color="inherit"
        sx={{ textTransform: "none", fontSize: "1rem" }}
        onClick={() => setOpen(!open)}
        endIcon={<ExpandMoreIcon sx={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 200ms" }} />}
      >
        DESTINATIONS
      </Button>

      {open && (
        <Box
          sx={{
            position: "absolute",
            top: "40px",
            right: "-360px",
            bgcolor: "white",
            boxShadow: 3,
            borderRadius: 4,
            p: 5,
            zIndex: 10,
            minWidth: "750px",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 2,
            color: "black",
          }}
        >
          {states.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}        
              style={{ textDecoration: "none", color: "black" }}
              onClick={() => setOpen(false)} 
            >
              <CenterLabel text={item.name} />
            </Link>
          ))}

        </Box>
      )}
    </Box>
  );
}

export default Destination;
