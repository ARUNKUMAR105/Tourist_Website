import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
} from "@mui/material";
import GujaratImage from "../../assets/Destination/Gujarat.png";
import RannOfKutchImage from "../../assets/Destinationimg/gujarat/g1.png";
import StatueOfUnityImage from "../../assets/Destinationimg/gujarat/g2.png";
import GirNationalParkImage from "../../assets/Destinationimg/gujarat/g3.png";
import DwarkaImage from "../../assets/Destinationimg/gujarat/g4.png";
import SomnathImage from "../../assets/Destinationimg/gujarat/g5.png";
import AhmedabadImage from "../../assets/Destinationimg/gujarat/g6.png";
import SaputaraImage from "../../assets/Destinationimg/gujarat/g7.png";
import VadodaraImage from "../../assets/Destinationimg/gujarat/g8.png";
import ChampanerPavagadhImage from "../../assets/Destinationimg/gujarat/g9.png";
import Footer from "../Footer";
function GujaratPage() {
  const places = [
    {
      name: "Rann of Kutch (Great Rann of Kutch)",
      img: RannOfKutchImage,
      desc: "A vast salt marsh, famous for its stunning white desert landscapes, especially magical during the Rann Utsav festival",
    },
    {
      name: "Statue of Unity",
      img: StatueOfUnityImage,
      desc: "The world's tallest statue, honoring Sardar Vallabhbhai Patel, located near Kevadiya, offering spectacular views",
    },
    {
      name: "Gir National Park",
      img: GirNationalParkImage,
      desc: "Asia's only home to the Asiatic Lion, a must-visit for wildlife enthusiasts and nature lovers.",
    },
    {
      name: "Dwarka",
      img: DwarkaImage,
      desc: "One of India's sacred Char Dham pilgrimage sites, home to the ancient Dwarkadhish Temple",
    },
    {
      name: "Somnath",
      img: SomnathImage,
      desc: "A revered Jyotirlinga shrine, featuring the magnificent Somnath Mahadev Temple on the coastline.",
    },
    {
      name: "Ahmedabad",
      img: AhmedabadImage,
      desc: "Gujarat's largest city, a UNESCO World Heritage City, boasting Sabarmati Ashram, Adalaj Stepwell, and vibrant culture",
    },
    {
      name: "Saputara",
      img: SaputaraImage,
      desc: "Gujarat's only hill station, perfect for nature walks, boating, and relishing cool breezes",
    },
    {
      name: "Vadodara (Baroda)",
      img: VadodaraImage,
      desc: "Known for its royal heritage, exemplified by the grand Laxmi Vilas Palace, and rich cultural scene",
    },
    {
      name: "Champaner-Pavagadh Archaeological Park",
      img: ChampanerPavagadhImage,
      desc: "A UNESCO World Heritage site featuring ancient ruins, temples, and mosques set against a scenic backdrop",
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
        Gujarat Tourism
      </Box>

      {/* HERO IMAGE */}
      <Box
        sx={{
          height: {
            xs: "40vh",
            sm: "50vh",
            md: "60vh",
          },
          backgroundImage: `url(${GujaratImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Box>

      {/* ABOUT */}
      <Box sx={{ p: { xs: 2, sm: 2.5, md: 3 } }}>
        <Typography variant="h4" sx={{ mb: 2, fontSize: { xs: "24px", md: "32px" } }}>
          About Gujarat
        </Typography>

        <Typography sx={{ fontSize: { xs: "16px", md: "18px" }, lineHeight: "30px" }}>
          Gujarat is a state located in the western part of India and is known
          for its rich culture, history, and strong business spirit. It has a
          long coastline along the Arabian Sea and is famous for places like the
          Rann of Kutch, Gir National Park, and historic cities such as
          Ahmedabad and Vadodara. Gujarat is the birthplace of Mahatma Gandhi,
          and his values are reflected in the state’s traditions and lifestyle.
          The culture of Gujarat is colorful, with festivals like Navratri and
          dances such as Garba and Dandiya being widely celebrated. Gujarati
          cuisine is popular for dishes like dhokla, thepla, and fafda, and the
          people are known for their hospitality and simplicity.
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

export default GujaratPage;
