import React from "react";
import {Box,Typography,Card,
CardMedia,
  CardContent,
  Grid,
} from "@mui/material";
import Footer from "../Footer";
import GoaImage from "../../assets/Destination/goa.png";
import BeachImage from "../../assets/Destinationimg/goa/goa1.png";
import CalanguteImage from "../../assets/Destinationimg/goa/goa2.png";
import PalolemImage from "../../assets/Destinationimg/goa/goa3.png";
import VagatorImage from "../../assets/Destinationimg/goa/goa4.png";
import ChaporaImage from "../../assets/Destinationimg/goa/goa5.png";
import FortAguadaImage from "../../assets/Destinationimg/goa/goa6.png";
import DudhsagarImage from "../../assets/Destinationimg/goa/goa7.png";
import BasilicaImage from "../../assets/Destinationimg/goa/goa8.png";
import FontainhasImage from "../../assets/Destinationimg/goa/goa9.png";

function GoaPage() {
  const places = [
    {
      name: "Baga Beach",
      img: BeachImage,
      desc: "Famous for its lively atmosphere, water sports, shacks like Britto's, and nightlife",
    },
    {
      name: "Calangute Beach",
      img: CalanguteImage,
      desc: "Known as the 'Queen of Beaches', it's the largest beach in North Goa with vibrant markets and water activities",
    },
    {
      name: "Palolem Beach",
      img: PalolemImage,
      desc: " A picturesque beach in South Goa, known for its crescent shape, calm waters, and relaxed vibe",
    },
    {
      name: "Vagator Beach",
      img: VagatorImage,
      desc: "Offers dramatic red cliffs, a bohemian vibe, and sunset views, especially from nearby Thalassa",
    },
    {
      name: "Chapora Fort",
      img: ChaporaImage,
      desc: 'The iconic "Dil Chahta Hai" fort, providing panoramic views over Vagator and the Arabian Sea',
    },
    {
      name: "Fort Aguada",
      img: FortAguadaImage,
      desc: "A 17th-century Portuguese fort with a lighthouse and sweeping ocean vistas.",
    },
    {
      name: "Dudhsagar Falls",
      img: DudhsagarImage,
      desc: "A majestic, multi-tiered waterfall inside a wildlife sanctuary, accessed via a thrilling jeep ride",
    },
    {
      name: "Basilica of Bom Jesus",
      img: BasilicaImage,
      desc: "A UNESCO World Heritage site in Old Goa, housing the relics of St. Francis Xavier",
    },
    {
      name: "Fontainhas, Panjim",
      img: FontainhasImage,
      desc: "Panjim's charming old quarter with colorful, narrow streets and Portuguese-style houses",
    },
  ];

  return (
    <Box>
      {/* HEADER */}
      <Box
        sx={{
          bgcolor: "#333",
          color: "white",
          p: {
            xs: 1.5,
            sm: 2,
            md: 2.5,
          },
          textAlign: "center",
          fontSize: {
            xs: "20px",
            sm: "24px",
            md: "28px",
          },
        }}
      >
        Goa Tourism
      </Box>

      {/* HERO IMAGE */}
      <Box
        sx={{
          height: {
            xs: "40vh",
            sm: "50vh",
            md: "60vh",
          },
          backgroundImage: `url(${GoaImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Box>

      {/* ABOUT */}
      <Box sx={{ p: { xs: 2, sm: 2.5, md: 3 } }}>
        <Typography variant="h4" sx={{ mb: 2, fontSize: { xs: "24px", md: "32px" } }}>
          About Goa
        </Typography>

        <Typography sx={{ fontSize: { xs: "16px", md: "18px" }, lineHeight: "30px" }}>
          Goa is a small and beautiful state in India located near the sea,
          famous for its sandy beaches, pleasant weather, and relaxed lifestyle.
          It has a unique culture influenced by both Indian and Portuguese
          traditions, which can be seen in its churches, houses, festivals, and
          food. Goa is popular for beaches like Baga, Calangute, and Anjuna,
          where people enjoy отдых, music, and local activities. The local
          language is Konkani, and the food is known for fish, rice, coconut,
          and spices. Overall, Goa is a popular place for holidays because of
          its natural beauty, rich culture, and friendly atmosphere.
        </Typography>
      </Box>

      {/* 9 CARDS */}
      <Box sx={{ p: { xs: 2, sm: 2.5, md: 3 } }}>
        <Typography variant="h4" sx={{ mb: 2, fontSize: { xs: "24px", md: "32px" } }}>
          Best Places to Visit
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: {
              xs: "16px",
              sm: "20px",
              md: "24px",
            },
          }}
        >
          {places.map((place, index) => (
            <Card key={index} sx={{ height: "100%" }}>
              <CardMedia
                component="img"
                image={place.img}
                sx={{ width: "100%", height: { xs: "150px", sm: "180px", md: "200px" } }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontSize: { xs: "16px", md: "18px" } }}>{place.name}</Typography>
                <Typography variant="body2" sx={{ fontSize: { xs: "14px", md: "16px" } }}>{place.desc}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
      <Footer />
    </Box>
    
  );
}
export default GoaPage;
