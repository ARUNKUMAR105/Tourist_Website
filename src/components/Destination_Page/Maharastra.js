import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Container,
} from "@mui/material";
import MaharastraImage from "../../assets/Destination/maharastra.png";
import MahabaleshwarImg from "../../assets/Destinationimg/maharastra/m1.png";
import LonavalaKhandalaImg from "../../assets/Destinationimg/maharastra/m2.png";
import MumbaiImg from "../../assets/Destinationimg/maharastra/m3.png";
import AjantaElloraCavesImg from "../../assets/Destinationimg/maharastra/m4.png";
import PuneImg from "../../assets/Destinationimg/maharastra/m5.png";
import AlibaugImg from "../../assets/Destinationimg/maharastra/m6.png";
import PanchganiImg from "../../assets/Destinationimg/maharastra/m7.png";
import MatheranImg from "../../assets/Destinationimg/maharastra/m8.png";
import TarkarliGanpatipuleImg from "../../assets/Destinationimg/maharastra/m9.png";
import Footer from "../Footer";
function MaharastraPage() {
  const places = [
    {
      name: "Mahabaleshwar",
      img: MahabaleshwarImg,
      desc: "The Strawberry Capital offers cool climates, dense forests, valleys, and viewpoints like Arthur's Seat",
    },
    {
      name: "Lonavala & Khandala",
      img: LonavalaKhandalaImg,
      desc: "Popular hill stations known for scenic views, waterfalls, and trekking trails in the Western Ghats",
    },
    {
      name: "Mumbai",
      img: MumbaiImg,
      desc: "India's financial hub, famous for Bollywood, Gateway of India, and vibrant city life",
    },
    {
      name: "Ajanta & Ellora Caves",
      img: AjantaElloraCavesImg,
      desc: "UNESCO World Heritage Sites featuring ancient rock-cut Buddhist, Hindu, and Jain cave temples",
    },
    {
      name: "Pune",
      img: PuneImg,
      desc: "A cultural and educational hub known for its historic sites, universities, and vibrant nightlife",
    },
    {
      name: "Alibaug",
      img: AlibaugImg,
      desc: "A coastal town known for its beaches, forts, and water sports activities",
    },
    {
      name: "Panchgani",
      img: PanchganiImg,
      desc: "A serene hill station famous for its tableland, strawberry farms, and colonial architecture",
    },
    {
      name: "Matheran",
      img: MatheranImg,
      desc: "A quaint hill station known for its toy train, viewpoints, and eco-friendly environment",
    },
    {
      name: "Tarkarli/Ganpatipule",
      img: TarkarliGanpatipuleImg,
      desc: "Coastal destinations known for pristine beaches, water sports, and tranquil surroundings",
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
        Rajasthan Tourism
      </Box>

      {/* HERO IMAGE */}
      <Box
        sx={{
          height: {
            xs: "40vh",
            sm: "50vh",
            md: "60vh",
          },
          backgroundImage: `url(${MaharastraImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Box>

      {/* ABOUT */}
      <Box sx={{ p: { xs: 2, sm: 2.5, md: 3 } }}>
        <Typography variant="h4" sx={{ mb: 2, fontSize: { xs: "24px", md: "32px" } }}>
          About Rajasthan
        </Typography>

        <Typography sx={{ fontSize: { xs: "16px", md: "18px" }, lineHeight: "30px" }}>
          Maharashtra is a state in western India known for its rich history,
          culture, and economic importance. It is home to Mumbai, the financial
          capital of India, as well as historical sites like Ajanta and Ellora
          Caves. The state has a diverse landscape with beaches, hills, and
          fertile plains. Marathi is the main language, and Maharashtra is
          famous for its festivals, traditional arts, and foods like vada pav
          and poha.
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
export default MaharastraPage;
