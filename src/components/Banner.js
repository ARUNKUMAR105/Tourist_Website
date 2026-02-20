import React, { useState, useEffect } from "react";
import { Box,Typography,} from "@mui/material";

const Data = [
  {
    title: "Discover Amazing Destinations",
    subtitle: "Explore the world's most beautiful places",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
  },
  {
    title: "Plan Your Perfect Trip",
    subtitle: "Travel made easy with TourHub",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
  },
  {
    title: "Create Unforgettable Memories",
    subtitle: "Adventure awaits you",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429"
  }
];

const Banner = () => {
  const [activeStep, setActiveStep] = useState(0);
  const count = Data.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % count);
    }, 4000);
    return () => clearInterval(timer);
  }, [count]);
  return (
    <Box sx={{ position: "relative",mt:1.5,borderRadius:10,overflow:"hidden",ml:2 }}>
      <Box
        sx={{
          height: 450,
          backgroundImage: `url(${Data[activeStep].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center"
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(32, 31, 31, 0.45)",
            p: 4,
            borderRadius: 3,
            color: "#fff"
          }}
        >
          <Typography variant="h3">
            {Data[activeStep].title}
          </Typography>
          <Typography sx={{ mt: 2, mb: 2 }}>
            {Data[activeStep].subtitle}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
