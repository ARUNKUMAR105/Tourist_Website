import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';

import Tajmahal from '../assets/Cards/Tajmahal.png';
import Goa from '../assets/Cards/Goa.png';
import Sikkim from '../assets/Cards/Mountain.png';
import Tamilnadu from '../assets/Cards/Sivan.png';
import Karnataka from '../assets/Cards/Karnataka.png';
import Kerala from '../assets/Cards/Boat.png';
import AndhraPradesh from '../assets/Cards/Temple.png';
import Maharashtra from '../assets/Cards/Fort.png';

function Cards({
  states = [
    {
      id: 1,
      title: 'Uttar Pradesh',
      desc: 'Famous marble mausoleum in Agra.',
      img: Tajmahal,
      price: '₹9,999',
      duration: '3 Days / 2 Nights',
      rating: 4.7
    },
    {
      id: 2,
      title: 'Goa',
      desc: 'Sunny beaches and relaxed vibes.',
      img: Goa,
      price: '₹12,999',
      duration: '4 Days / 3 Nights',
      rating: 4.6
    },
    {
      id: 3,
      title: 'Sikkim',
      desc: 'Majestic mountains and trekking routes.',
      img: Sikkim,
      price: '₹15,499',
      duration: '5 Days / 4 Nights',
      rating: 4.8
    },
    {
      id: 4,
      title: 'Tamil Nadu',
      desc: 'Famous temples and rich culture.',
      img: Tamilnadu,
      price: '₹11,999',
      duration: '4 Days / 3 Nights',
      rating: 4.5
    },
    {
      id: 5,
      title: 'Karnataka',
      desc: 'Home to Bangalore, Mysore palaces and beautiful hill stations like Coorg.',
      img: Karnataka,
      price: '₹13,499',
      duration: '5 Days / 4 Nights',
      rating: 4.6
    },
    {
      id: 6,
      title: 'Kerala',
      desc: 'Known for backwaters, houseboats, beaches and lush hill stations.',
      img: Kerala,
      price: '₹14,999',
      duration: '5 Days / 4 Nights',
      rating: 4.8
    },
    {
      id: 7,
      title: 'Andhra Pradesh',
      desc: 'Coastal state with historic sites, beaches and rich Telugu culture.',
      img: AndhraPradesh,
      price: '₹10,999',
      duration: '4 Days / 3 Nights',
      rating: 4.4
    },
    {
      id: 8,
      title: 'Maharashtra',
      desc: 'Home to Mumbai, Ajanta & Ellora caves, and diverse landscapes from coast to hills.',
      img: Maharashtra,
      price: '₹13,999',
      duration: '5 Days / 4 Nights',
      rating: 4.6
    }
  ]
}) {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <Box component="section" sx={{ py: 4}}>
      <Grid 
        container
        sx={{
          width: '100%',
          maxWidth: '1600px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        {states.map((state) => (
          <Grid item key={state.id} size={{lg:3,md:3,sm:12,xs:12}} sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                width: '95%',
                bgcolor: '#ffffffff',
                transition: 'transform 180ms ease, box-shadow 180ms ease',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)'
                }
              }}
            >
              <CardMedia 
                component="img"
                image={state.img}
                alt={state.title}
                sx={{ height: 200, objectFit: 'cover' }}
              />

              <CardContent sx={{ bgcolor: '#c7c2c5ff' }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {state.title}
                </Typography>

                <Typography variant="body2" color="#4f4949ff" sx={{ mt: 1 }}>
                  {state.desc}
                </Typography>

                <Button
                  fullWidth
                  size="small"
                  sx={{ mt: 1 }}
                  onClick={() => handleToggle(state.id)}
                >
                  {openId === state.id ? 'Hide Package Details' : 'View Package Details'}
                </Button>

                <Collapse in={openId === state.id}>
                  <Divider sx={{ my: 1 }} />

                  <Typography variant="body2">
                    Duration: {state.duration}
                  </Typography>

                  <Typography variant="body2">
                    Price: {state.price}
                  </Typography>

                  <Typography variant="body2">
                    Rating: {state.rating}
                  </Typography>

                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 1,
                      backgroundColor: '#6c7ae0',
                      '&:hover': { backgroundColor: '#5a68d8' }
                    }}
                  >
                    Book Now
                  </Button>
                </Collapse>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Cards;
