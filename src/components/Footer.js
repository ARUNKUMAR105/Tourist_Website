import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "#5c5d60ff", color: "grey.100", py: { xs: 4, sm: 5, md: 6 }, borderRadius: "12px" }}
    >
      <Box
        sx={{
          width: "92%",
          maxWidth: 1200,
          mx: "auto",
          px: { xs: 1.5, sm: 2, md: 3 },
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: { xs: 3, sm: 3.5, md: 4 },
        }}
      >
        <Box>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, fontSize: { xs: "0.95rem", md: "1.25rem" } }}>
            Services
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Link href="#" color="inherit" underline="hover" sx={{ fontSize: { xs: "0.85rem", md: "1rem" } }}>
              Support
            </Link>
            <Link href="#" color="inherit" underline="hover" sx={{ fontSize: { xs: "0.85rem", md: "1rem" } }}>
              Pricing
            </Link>
            <Link href="#" color="inherit" underline="hover" sx={{ fontSize: { xs: "0.85rem", md: "1rem" } }}>
              Documentation
            </Link>
          </Box>
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, fontSize: { xs: "0.95rem", md: "1.25rem" } }}>
            Products
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Link href="#" color="inherit" underline="hover" sx={{ fontSize: { xs: "0.85rem", md: "1rem" } }}>
              Features
            </Link>
            <Link href="#" color="inherit" underline="hover" sx={{ fontSize: { xs: "0.85rem", md: "1rem" } }}>
              Integrations
            </Link>
            <Link href="#" color="inherit" underline="hover" sx={{ fontSize: { xs: "0.85rem", md: "1rem" } }}>
              Roadmap
            </Link>
          </Box>
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, fontSize: { xs: "0.95rem", md: "1.25rem" } }}>
            About
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Link href="#" color="inherit" underline="hover" sx={{ fontSize: { xs: "0.85rem", md: "1rem" } }}>
              Company
            </Link>
            <Link href="#" color="inherit" underline="hover" sx={{ fontSize: { xs: "0.85rem", md: "1rem" } }}>
              Team
            </Link>
            <Link href="#" color="inherit" underline="hover" sx={{ fontSize: { xs: "0.85rem", md: "1rem" } }}>
              Careers
            </Link>
          </Box>
        </Box>
        <Box>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, fontSize: { xs: "0.95rem", md: "1.25rem" } }}>
            Contact
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Link href="#" color="inherit" underline="hover" sx={{ fontSize: { xs: "0.85rem", md: "1rem" } }}>
              PhoneNumber
            </Link>
            <Link href="#" color="inherit" underline="hover" sx={{ fontSize: { xs: "0.85rem", md: "1rem" } }}>
              Email
            </Link>
            <Link href="#" color="inherit" underline="hover" sx={{ fontSize: { xs: "0.85rem", md: "1rem" } }}>
              Location
            </Link>
          </Box>
        </Box>
      </Box>

      <Box sx={{ mt: { xs: 3, sm: 3.5, md: 4 }, textAlign: "center", color: "rgba(215, 206, 215, 0.2)" }}>
        <Typography variant="body2" sx={{ fontSize: { xs: "0.7rem", md: "0.875rem" } }}>
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
