import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
} from "@mui/material";
import TamilnaduHero from "../../assets/Destination/tamilnadu.png";
import ChennaiMarina from "../../assets/Destinationimg/tamilnadu/t1.png";
import MeenakshiTemple from "../../assets/Destinationimg/tamilnadu/t2.png";
import OotyHillStation from "../../assets/Destinationimg/tamilnadu/t3.png";
import Kanyakumari from "../../assets/Destinationimg/tamilnadu/t4.png";
import Salem from "../../assets/Destinationimg/tamilnadu/t5.png";
import RameswaramTemple from "../../assets/Destinationimg/tamilnadu/t6.png";
import Coimbatore from "../../assets/Destinationimg/tamilnadu/t7.png";
import Kodaikanal from "../../assets/Destinationimg/tamilnadu/t8.png";
import Thanjavur from "../../assets/Destinationimg/tamilnadu/t9.png";
import Footer from "../Footer";
function TamilnaduPage() {
  const places = [
    {
      name: "Chennai Marina Beach",
      img: ChennaiMarina,
      desc: "Known for its long stretch of beach and vibrant coastal atmosphere",
    },
    {
      name: "Meenakshi Temple, Madurai",
      img: MeenakshiTemple,
      desc: "Famous for its towering gopurams and intricate architecture",
    },
    {
      name: "Ooty Hill Station",
      img: OotyHillStation,
      desc: "Known for its scenic beauty and pleasant climate",
    },
    {
      name: "Kanyakumari",
      img: Kanyakumari,
      desc: "Known for its unique geographical location where three seas meet",
    },
    {
      name: "Salem",
      img: Salem,
      desc: "Known for its historical significance and beautiful landscapes",
    },
    {
      name: "Rameswaram Temple",
      img: RameswaramTemple,
      desc: "Known for its spiritual significance and beautiful architecture",
    },
    {
      name: "Coimbatore",
      img: Coimbatore,
      desc: "Known for its textile industry and beautiful hill stations",
    },
    {
      name: "Kodaikanal",
      img: Kodaikanal,
      desc: "Known for its scenic beauty and pleasant climate",
    },
    {
      name: "Thanjavur",
      img: Thanjavur,
      desc: "Known for its rich cultural heritage and historical significance",
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
        Tamil Nadu Tourism
      </Box>

      {/* HERO IMAGE */}
      <Box
        sx={{
          height: {
            xs: "40vh",
            sm: "50vh",
            md: "60vh",
          },
          backgroundImage: `url(${TamilnaduHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Box>

      {/* ABOUT */}
      <Box sx={{ p: { xs: 2, sm: 2.5, md: 3 } }}>
        <Typography variant="h4" sx={{ mb: 2, fontSize: { xs: "24px", md: "32px" } }}>
          About Tamil Nadu
        </Typography>

        <Typography sx={{ fontSize: { xs: "16px", md: "18px" }, lineHeight: "30px" }}>
          Tamil Nadu, located in South India, is known for its rich culture,
          ancient temples, hill stations, beaches & traditional arts. It blends
          spirituality, history & natural beauty with modern lifestyle. Major
          cities include Chennai, Madurai, Coimbatore & Trichy.
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
export default TamilnaduPage;
