import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
} from "@mui/material";
import KarnatakaImage from "../../assets/Destination/karnataka.png";
import MysoreImage from "../../assets/Destinationimg/karnataka/k1.png";
import HampiImage from "../../assets/Destinationimg/karnataka/k2.png";
import CoorgImage from "../../assets/Destinationimg/karnataka/k3.png";
import ChikmagalurImage from "../../assets/Destinationimg/karnataka/k4.png";
import GokarnaImage from "../../assets/Destinationimg/karnataka/k5.png";
import BandipurImage from "../../assets/Destinationimg/karnataka/k6.png";
import BadamiImage from "../../assets/Destinationimg/karnataka/k7.png";
import DandeliImage from "../../assets/Destinationimg/karnataka/k8.png";
import JogFallsImage from "../../assets/Destinationimg/karnataka/k9.png";
import Footer from "../Footer";
function KarnatakaPage() {
  const places = [
    {
      name: "Mysore",
      img: MysoreImage,
      desc: "City of Palaces, famous for Mysore Palace, gardens, and rich culture",
    },
    {
      name: "Hampi",
      img: HampiImage,
      desc: "UNESCO World Heritage Site with ancient ruins and temples",
    },
    {
      name: "Coorg (Madikeri)",
      img: CoorgImage,
      desc: "A lush hill station known for coffee plantations, waterfalls, and cool climate",
    },
    {
      name: "Chikmagalur",
      img: ChikmagalurImage,
      desc: "Coffee estates, trekking (Mullayanagiri), and waterfalls in the Western Ghats",
    },
    {
      name: "Gokarna",
      img: GokarnaImage,
      desc: "A laid-back beach town with beautiful beaches and temples",
    },
    {
      name: "Bandipur National Park/Nagarhole",
      img: BandipurImage,
      desc: "Wildlife sanctuaries known for tigers, elephants, and rich biodiversity",
    },
    {
      name: "Badami & Aihole",
      img: BadamiImage,
      desc: "Ancient cave temples and Chalukya architecture",
    },
    {
      name: "Dandeli",
      img: DandeliImage,
      desc: "Adventure activities like white-water rafting, trekking, and wildlife spotting",
    },
    {
      name: "Jog Falls",
      img: JogFallsImage,
      desc: "One of India's highest waterfalls, surrounded by scenic beauty",
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
        Karnataka Tourism
      </Box>
      {/* HERO IMAGE */}
      <Box
        sx={{
          height: {
            xs: "40vh",
            sm: "50vh",
            md: "60vh",
          },
          backgroundImage: `url(${KarnatakaImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Box>
      {/* ABOUT */}
      <Box sx={{ p: { xs: 2, sm: 2.5, md: 3 } }}>
        <Typography variant="h4" sx={{ mb: 2, fontSize: { xs: "24px", md: "32px" } }}>
          About Karnataka
        </Typography>

        <Typography sx={{ fontSize: { xs: "16px", md: "18px" }, lineHeight: "30px" }}>
          Karnataka is a state in southern India known for its rich history,
          diverse culture, and natural beauty. It is home to modern cities like
          Bengaluru as well as historic places such as Hampi and Mysuru. The
          state has forests, hills, waterfalls, and a long coastline along the
          Arabian Sea. Kannada is the main language, and Karnataka is famous for
          its festivals, traditional arts, and delicious food like dosa, idli,
          and bisi bele bath.
        </Typography>
      </Box>
      {/* 9 CARDS */}
      // ...existing code...
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

export default KarnatakaPage;
