import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
} from "@mui/material";
import KeralaImage from "../../assets/Destination/kerala.png";
import MunnarImage from "../../assets/Destinationimg/kerala/kl1.png";
import AlleppeyImage from "../../assets/Destinationimg/kerala/kl2.png";
import WayanadImage from "../../assets/Destinationimg/kerala/kl3.png";
import KochiImage from "../../assets/Destinationimg/kerala/kl4.png";
import ThekkadyImage from "../../assets/Destinationimg/kerala/kl5.png";
import KovalamImage from "../../assets/Destinationimg/kerala/kl6.png";
import KumarakomImage from "../../assets/Destinationimg/kerala/kl7.png";
import VarkalaImage from "../../assets/Destinationimg/kerala/kl8.png";
import VagamonImage from "../../assets/Destinationimg/kerala/kl9.png";
import Footer from "../Footer";
function KeralaPage() {
  const places = [
    {
      name: "Munnar",
      img: MunnarImage,
      desc: "Famous for tea plantations, cool climate, and rolling hills, perfect for nature lovers",
    },
    {
      name: "Alleppey (Alappuzha)",
      img: AlleppeyImage,
      desc: "Known for its serene backwaters, houseboat cruises, and picturesque canals",
    },
    {
      name: "Wayanad",
      img: WayanadImage,
      desc: "A green paradise in the Western Ghats, offering dense forests, waterfalls, and wildlife",
    },
    {
      name: "Kochi (Cochin)",
      img: KochiImage,
      desc: "A vibrant port city with a mix of colonial history, Chinese fishing nets, and cultural diversity",
    },
    {
      name: "Thekkady",
      img: ThekkadyImage,
      desc: "Home to the Periyar Wildlife Sanctuary, known for its elephants, boating, and spice plantations",
    },
    {
      name: "Kovalam",
      img: KovalamImage,
      desc: "A popular beach destination with golden sands, lighthouses, and water sports",
    },
    {
      name: "Kumarakom",
      img: KumarakomImage,
      desc: "Another backwater gem on Vembanad Lake, ideal for birdwatching and quiet relaxation",
    },
    {
      name: "Varkala",
      img: VarkalaImage,
      desc: "Famous for its cliffs, natural springs, and beautiful beaches with a laid-back vibe",
    },
    {
      name: "Vagamon",
      img: VagamonImage,
      desc: "A tranquil hill station known for its meadows, pine forests, and adventure activities",
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
        Kerala Tourism
      </Box>

      {/* HERO IMAGE */}
      <Box
        sx={{
          height: {
            xs: "40vh",
            sm: "50vh",
            md: "60vh",
          },
          backgroundImage: `url(${KeralaImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Box>

      {/* ABOUT */}
      <Box sx={{ p: { xs: 2, sm: 2.5, md: 3 } }}>
        <Typography variant="h4" sx={{ mb: 2, fontSize: { xs: "24px", md: "32px" } }}>
          About Kerala
        </Typography>

        <Typography sx={{ fontSize: { xs: "16px", md: "18px" }, lineHeight: "30px" }}>
          Kerala is a state in southern India known for its natural beauty,
          greenery, and peaceful environment. It is famous for its backwaters,
          beaches, hill stations, and wildlife. The state has a rich culture and
          traditions, with festivals like Onam and Vishu being widely
          celebrated. Malayalam is the main language, and Kerala is also known
          for its healthy lifestyle, Ayurveda, and tasty food made with rice,
          coconut, and spices.
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
export default KeralaPage;
