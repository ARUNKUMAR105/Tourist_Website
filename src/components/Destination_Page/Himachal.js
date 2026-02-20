import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
} from "@mui/material";
import HimachalPradesh from "../../assets/Destination/himachal.png";
import ShimlaImg from "../../assets/Destinationimg/himachal/h1.png";
import ManaliImg from "../../assets/Destinationimg/himachal/h2.png";
import DharamshalaImg from "../../assets/Destinationimg/himachal/h3.png";
import DalhousieImg from "../../assets/Destinationimg/himachal/h4.png";
import SpitiImg from "../../assets/Destinationimg/himachal/h5.png";
import BirBillingImg from "../../assets/Destinationimg/himachal/h6.png";
import TirthanImg from "../../assets/Destinationimg/himachal/h7.png";
import ChambaImg from "../../assets/Destinationimg/himachal/h8.png";
import KasauliImg from "../../assets/Destinationimg/himachal/h9.png";
import Footer from "../Footer";
function HimachalPage() {
  const places = [
    {
      name: "Shimla",
      img: ShimlaImg,
      desc: "The classic hill station, known for its Mall Road, Ridge, Jakhu Temple, and the historic Toy Train ride",
    },
    {
      name: "Manali",
      img: ManaliImg,
      desc: "A hub for adventure, featuring Solang Valley (skiing, paragliding) and proximity to Rohtang Pass, with lush scenery and Beas River banks",
    },
    {
      name: "Dharamshala & McLeod Ganj",
      img: DharamshalaImg,
      desc: "The spiritual home of the Dalai Lama, offering Tibetan culture, monasteries, and waterfalls like Bhagsunagh",
    },
    {
      name: "Dalhousie & Khajjiar",
      img: DalhousieImg,
      desc: 'Offers peaceful colonial-era architecture, lush meadows (Khajjiar, the "Mini Switzerland"), and wildlife sanctuaries',
    },
    {
      name: "Spiti Valley",
      img: SpitiImg,
      desc: "A high-altitude cold desert known for stark landscapes, ancient monasteries (Key Monastery), and Chandratal Lake",
    },
    {
      name: "Bir Billing",
      img: BirBillingImg,
      desc: "Famous globally for paragliding, surrounded by tea gardens and monasteries",
    },
    {
      name: "Tirthan Valley",
      img: TirthanImg,
      desc: "A gateway to the Great Himalayan National Park (UNESCO World Heritage Site), ideal for nature lovers, trekking, and fishing",
    },
    {
      name: "Chamba",
      img: ChambaImg,
      desc: "A historic town on the Ravi River, rich in temples (Lakshmi Narayan) and museums, famous for traditional art (Chamba Rumal)",
    },
    {
      name: "Kasauli",
      img: KasauliImg,
      desc: "A quaint cantonment town with colonial charm, pine forests, and peaceful walking trails",
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
        HimachalPradesh Tourism
      </Box>

      {/* HERO IMAGE */}
      <Box
        sx={{
          height: {
            xs: "40vh",
            sm: "50vh",
            md: "60vh",
          },
          backgroundImage: `url(${HimachalPradesh})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Box>

      {/* ABOUT */}
      <Box sx={{ p: { xs: 2, sm: 2.5, md: 3 } }}>
        <Typography variant="h4" sx={{ mb: 2, fontSize: { xs: "24px", md: "32px" } }}>
          About HimachalPradesh
        </Typography>

        <Typography sx={{ fontSize: { xs: "16px", md: "18px" }, lineHeight: "30px" }}>
          Himachal Pradesh is a beautiful state in northern India known for its
          mountains, cool climate, and natural scenery. It is famous for hill
          stations like Shimla, Manali, and Dharamshala, which attract many
          tourists every year. The state is rich in forests, rivers, and
          snow-covered peaks, making it ideal for nature lovers and adventure
          activities. Himachal Pradesh has a simple lifestyle, diverse culture,
          and traditional food, and the people are known for their warmth and
          hospitality.
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

export default HimachalPage;
