import React from "react";
import { Box, Typography, Container, Grid, Card, CardContent } from "@mui/material";

export default function About() {
  return (
    <Box
      sx={{
        mt: 0,
        mb: 5,
        py: 6,
        backgroundColor: "#c9bcbcff",
        borderRadius: "16px",
      }}
    >
      <Container maxWidth="lg">
        
        <Typography
          variant="h4"
          align="center"
          sx={{ mb: 3, fontFamily: "Poppins, sans-serif", letterSpacing: "0.5px" }}
        >
          About Us
        </Typography>

        <Typography
          variant="body1"
          align="center"
          sx={{
            maxWidth: 950,
            mx: "auto",
            mb: 6,
            px: 2,
            lineHeight: 1.8,
            fontSize: 17,
            fontFamily: "Poppins, sans-serif",
            color: "#444",
          }}
        >
          Welcome to our Travel and Tourism website, your trusted guide for discovering the best destinations,
          unique experiences, and unforgettable journeys. We aim to make travel simple, enjoyable, and accessible
          for everyone with well-curated information and detailed trip ideas.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
  
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                p: 2,
                borderRadius: 2,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-8px) scale(1.02)",
                  boxShadow: "0px 10px 25px rgba(0,0,0,0.15)",
                  backgroundColor: "#d2c9f1ff",
                  color: "#fff",
                  fontWeight: 600,
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ mb: 1, fontSize: 22, fontFamily: "Poppins" }}>
                  Our Mission
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.7, fontSize: 17, color: "#555" }}>
                  Our mission is to help travelers explore incredible destinations with ease. We provide accurate
                  details, travel tips, and complete guidance to ensure a smooth and enjoyable travel experience.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                p: 2,
                borderRadius: 2,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-8px) scale(1.02)",
                  boxShadow: "0px 10px 25px rgba(0,0,0,0.15)",
                  backgroundColor: "#abbf80ff",
                  color: "#fff",
                  fontWeight: 600,
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ mb: 1, fontSize: 22, fontFamily: "Poppins" }}>
                  Our Vision
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.7, fontSize: 17, color: "#555" }}>
                  Our vision is to become a leading travel platform that inspires people to explore the world. We aim
                  to connect travelers with meaningful adventures and unforgettable experiences.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Typography
          variant="h5"
          align="center"
          sx={{ mt: 7, mb: 3, fontFamily: "Poppins", letterSpacing: "0.5px" }}
        >
          Why Choose Us
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {[
            { title: "Verified Info", desc: "Accurate destination details for better planning." },
            { title: "Easy Navigation", desc: "Search, compare, and explore places quickly." },
            { title: "Top Destinations", desc: "Discover popular attractions curated for travelers." },
            { title: "User Friendly", desc: "Smooth interface for a better browsing experience." },
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  textAlign: "center",
                  p: 2,
                  borderRadius: 2,
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 1, fontFamily: "Poppins" }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ lineHeight: 1.7, color: "#555" }}>
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
