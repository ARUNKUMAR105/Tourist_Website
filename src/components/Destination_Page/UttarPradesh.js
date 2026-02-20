import React from "react";
import {Box,Typography,Card,CardMedia,CardContent,Grid,} from "@mui/material";
import UttarPradeshImage from "../../assets/Destination/uttarpradesh.png";
import AgraImage from "../../assets/Destinationimg/uttarpradesh/u1.png";
import VaranasiImage from "../../assets/Destinationimg/uttarpradesh/u2.png";
import LucknowImage from "../../assets/Destinationimg/uttarpradesh/u3.png";
import AyodhyaImage from "../../assets/Destinationimg/uttarpradesh/u4.png";
import MathuraVrindavanImage from "../../assets/Destinationimg/uttarpradesh/u5.png";
import PrayagrajImage from "../../assets/Destinationimg/uttarpradesh/u6.png";
import SarnathImage from "../../assets/Destinationimg/uttarpradesh/u7.png";
import KushinagarImage from "../../assets/Destinationimg/uttarpradesh/u8.png";
import DudhwaNationalParkImage from "../../assets/Destinationimg/uttarpradesh/u9.png";
import Footer from "../Footer";
function UttarPradeshPage() {
  const places = [
    {
      name: "Agra",
      img: AgraImage,
      desc: "Home to the iconic Taj Mahal, Agra Fort, and Fatehpur Sikri (all UNESCO sites)",
    },
    {
      name: "Varanasi",
      img: VaranasiImage,
      desc: "One of the world's oldest cities, famous for its sacred ghats and Ganga Aarti ceremonies",
    },
    {
      name: "Lucknow",
      img: LucknowImage,
      desc: "Known as the City of Nawabs for its rich culture, architecture (Bada Imambara), and kebabs",
    },
    {
      name: "Ayodhya",
      img: AyodhyaImage,
      desc: "A major Hindu pilgrimage site, believed to be Lord Rama's birthplace",
    },
    {
      name: "Mathura-Vrindavan",
      img: MathuraVrindavanImage,
      desc: "Twin cities central to Lord Krishna's life, filled with ancient temples like Banke Bihari",
    },
    {
      name: "Prayagraj (Allahabad)",
      img: PrayagrajImage,
      desc: "Site of the holy Triveni Sangam (confluence of Ganga, Yamuna, Saraswati rivers) and Kumbh Mela",
    },
    {
      name: "Sarnath",
      img: SarnathImage,
      desc: "Where Buddha gave his first sermon; a tranquil Buddhist pilgrimage center near Varanasi",
    },
    {
      name: "Kushinagar",
      img: KushinagarImage,
      desc: "Where Buddha attained Mahaparinirvana, another significant Buddhist site",
    },
    {
      name: "Dudhwa National Park",
      img: DudhwaNationalParkImage,
      desc: "For nature lovers, offering a chance to see tigers, rhinos, and diverse wildlife",
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
        UttarPradesh Tourism
      </Box>

      {/* HERO IMAGE */}
      <Box
        sx={{
          height: {
            xs: "40vh",
            sm: "50vh",
            md: "60vh",
          },
          backgroundImage: `url(${UttarPradeshImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Box>

      {/* ABOUT */}
      <Box sx={{ p: { xs: 2, sm: 2.5, md: 3 } }}>
        <Typography variant="h4" sx={{ mb: 2, fontSize: { xs: "24px", md: "32px" } }}>
          About UttarPradesh
        </Typography>

        <Typography sx={{ fontSize: { xs: "16px", md: "18px" }, lineHeight: "30px" }}>
          Uttar Pradesh is a large state in northern India known for its rich
          history, culture, and religious importance. It is home to famous
          places like the Taj Mahal in Agra, Varanasi, and Ayodhya. The state
          has many rivers, including the Ganga, and plays an important role in
          Indian traditions and festivals. Hindi is the main language, and Uttar
          Pradesh is known for its diverse culture, historic monuments, and
          traditional food.
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
                sx={{ width: "100%", height: { xs: "150px", sm: "180px", md: "200px" }, objectFit: "cover" }}
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
export default UttarPradeshPage;
