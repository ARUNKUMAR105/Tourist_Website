// @ts-nocheck
import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import img1 from "../assets/Gallery/img1.png";
import img2 from "../assets/Gallery/img2.png";
import img3 from "../assets/Gallery/img3.png";
import img4 from "../assets/Gallery/img4.png";
import img5 from "../assets/Gallery/img5.png";
import img6 from "../assets/Gallery/img6.png";
import img7 from "../assets/Gallery/img7.png";
import img8 from "../assets/Gallery/img8.png";
import img9 from "../assets/Gallery/img9.png";

export default function Gallery() {
  const images = [img1,img2,img3,img4,img5,img6,img7,img8,img9,];

  return (
    <Box sx={{ mt: 4, mb: 6 }}>
      <Container
        maxWidth={false}
        disableGutters
        sx={{ px: 0 }} 
      >
        <Box>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              mb: 4,
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Travel Gallery
          </Typography>
          <Grid
            container
            spacing={4}
            sx={{ width: "100%", margin: 0, display: "flex" ,justifyContent: "center"}}
          >
            {images.map((img, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  sx={{
                    height: "260px",
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "0px 6px 20px rgba(0,0,0,0.12)",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "scale(1.03)",
                      boxShadow: "0px 12px 30px rgba(0,0,0,0.2)",
                    },
                  }}
                >
                  <img
                    src={img}
                    alt="travel"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
