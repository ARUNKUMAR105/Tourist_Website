import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
} from "@mui/material";
import UttarakhandImage from "../../assets/Destination/uttarakhand.png";
import RishikeshImage from "../../assets/Destinationimg/uttarakhand/ut1.png";
import NainitalImage from "../../assets/Destinationimg/uttarakhand/ut2.png";
import AuliImage from "../../assets/Destinationimg/uttarakhand/ut3.png";
import ChoptaImage from "../../assets/Destinationimg/uttarakhand/ut4.png";
import MussoorieImage from "../../assets/Destinationimg/uttarakhand/ut5.png";
import JimCorbettImage from "../../assets/Destinationimg/uttarakhand/ut6.png";
import KedarnathBadrinathImage from "../../assets/Destinationimg/uttarakhand/ut7.png";
import AlmoraRanikhetImage from "../../assets/Destinationimg/uttarakhand/ut8.png";
import HaridwarImage from "../../assets/Destinationimg/uttarakhand/ut9.png";
import Footer from "../Footer";
function UttarakhandPage() {
  const places = [
    {
      name: "Rishikesh",
      img: RishikeshImage,
      desc: "Adventure capital for rafting, yoga, and spiritual vibes, with ashrams and riverside views",
    },
    {
      name: "Nainital",
      img: NainitalImage,
      desc: "Famous for its picturesque Naini Lake, boating, and pleasant climate",
    },
    {
      name: "Auli",
      img: AuliImage,
      desc: "A premier ski destination with stunning Himalayan vistas, especially in winter",
    },
    {
      name: "Chopta",
      img: ChoptaImage,
      desc: 'Known as "Mini Switzerland", ideal for trekking (Tungnath) and lush meadows',
    },
    {
      name: "Mussoorie",
      img: MussoorieImage,
      desc: 'The "Queen of Hills," offering colonial charm, Kempty Falls, and crisp mountain air. ',
    },
    {
      name: "Jim Corbett National Park",
      img: JimCorbettImage,
      desc: "India's oldest national park, perfect for tiger safaris and wildlife",
    },
    {
      name: "Kedarnath & Badrinath",
      img: KedarnathBadrinathImage,
      desc: "Key Char Dham pilgrimage sites, offering profound spiritual experiences amidst majestic scenery",
    },
    {
      name: "Almora & Ranikhet",
      img: AlmoraRanikhetImage,
      desc: "Guaint, less crowded hill stations known for panoramic views, culture, and tranquility",
    },
    {
      name: "Haridwar",
      img: HaridwarImage,
      desc: "A sacred city on the banks of the Ganges, known for its spiritual significance and ghats",
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
        Uttarakhand Tourism
      </Box>

      {/* HERO IMAGE */}
      <Box
        sx={{
          height: {
            xs: "40vh",
            sm: "50vh",
            md: "60vh",
          },
          backgroundImage: `url(${UttarakhandImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Box>

      {/* ABOUT */}
      <Box sx={{ p: { xs: 2, sm: 2.5, md: 3 } }}>
        <Typography variant="h4" sx={{ mb: 2, fontSize: { xs: "24px", md: "32px" } }}>
          About Uttarakhand
        </Typography>

        <Typography sx={{ fontSize: { xs: "16px", md: "18px" }, lineHeight: "30px" }}>
          Uttarakhand is a state in northern India known for its natural beauty,
          mountains, and spiritual importance. It is home to the Himalayas,
          sacred rivers like the Ganga and Yamuna, and famous pilgrimage places
          such as Haridwar, Rishikesh, and Kedarnath. The state is also popular
          for hill stations, forests, and adventure activities. Uttarakhand has
          a simple culture, peaceful environment, and people known for their
          devotion and hospitality.
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

export default UttarakhandPage;
