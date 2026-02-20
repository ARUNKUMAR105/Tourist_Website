import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
} from "@mui/material";
import RajasthanImage from "../../assets/Destination/rajasthan.png";
import JaipurImage from "../../assets/Destinationimg/rajasthan/r1.png";
import UdaipurImage from "../../assets/Destinationimg/rajasthan/r2.png";
import JaisalmerImage from "../../assets/Destinationimg/rajasthan/r3.png";
import JodhpurImage from "../../assets/Destinationimg/rajasthan/r4.png";
import PushkarImage from "../../assets/Destinationimg/rajasthan/r5.png";
import MountAbuImage from "../../assets/Destinationimg/rajasthan/r6.png";
import BikanerImage from "../../assets/Destinationimg/rajasthan/r7.png";
import ChittorgarhImage from "../../assets/Destinationimg/rajasthan/r8.png";
import AjmerImage from "../../assets/Destinationimg/rajasthan/r9.png";
import Footer from "../Footer";
function RajasthanPage() {
  const places = [
    {
      name: "Jaipur (Pink City)",
      img: JaipurImage,
      desc: "Known for Amber Fort, Hawa Mahal, and City Palace",
    },
    {
      name: "Udaipur (City of Lakes)",
      img: UdaipurImage,
      desc: "Famous for Lake Pichola, City Palace, and romantic ambiance",
    },
    {
      name: "Jaisalmer (Golden City)",
      img: JaisalmerImage,
      desc: "Known for the Jaisalmer Fort and Sam Sand Dunes",
    },
    {
      name: "Jodhpur (Blue City)",
      img: JodhpurImage,
      desc: "Famous for the massive Mehrangarh Fort and Umaid Bhawan Palace",
    },
    {
      name: "Pushkar",
      img: PushkarImage,
      desc: "Known for the Pushkar Lake and the Pushkar Camel Fair",
    },
    {
      name: "Mount Abu",
      img: MountAbuImage,
      desc: "Known for the beautiful mountain range and the famous Dilwara Temples",
    },
    {
      name: "Bikaner",
      img: BikanerImage,
      desc: "Known for the Bikaner Fort and the famous Kishangarh Palace",
    },
    {
      name: "Chittorgarh",
      img: ChittorgarhImage,
      desc: "Known for the Chittorgarh Fort and the famous Rana Sanga Palace",
    },
    {
      name: "Ajmer",
      img: AjmerImage,
      desc: "Known for the Ajmer Sharif Dargah and the famous Amber Fort",
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
          backgroundImage: `url(${RajasthanImage})`,
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
          Rajasthan is a large state in northwestern India known for its
          deserts, royal history, and colorful culture. It is famous for grand
          forts, palaces, and cities like Jaipur, Udaipur, and Jodhpur. The
          state has a rich tradition of folk music, dance, and festivals that
          reflect its heritage. Rajasthani food is flavorful and the people are
          known for their vibrant clothing, hospitality, and strong cultural
          pride.
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

export default RajasthanPage;
