// Navbar.js
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Destination from "./Destination";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Dialog from "@mui/material/Dialog";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

const Navbar = ({ logoText = "✈️ TourHub" }) => {
  const [open, setOpen] = useState(false);
  const [mobileAnchorEl, setMobileAnchorEl] = useState(null);
  const openMobileMenu = Boolean(mobileAnchorEl);
  const [mobileDestOpen, setMobileDestOpen] = useState(false);

  const handleMobileMenuOpen = (event) => setMobileAnchorEl(event.currentTarget);
  const handleMobileMenuClose = () => setMobileAnchorEl(null);
  const closeDropdown = () => setOpen(false);

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeDropdown();
    handleMobileMenuClose();
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: "#6878bfff",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.12)",
        borderRadius: "0 0 16px 16px",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Mobile icon at start (visible on xs) */}
        <Box sx={{ display: { xs: "flex", sm: "none" }, alignItems: "center", mr: 1 }}>
          <IconButton color="inherit" onClick={handleMobileMenuOpen} edge="start">
            <MoreVertIcon />
          </IconButton>
          <Menu
            anchorEl={mobileAnchorEl}
            open={openMobileMenu}
            onClose={handleMobileMenuClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <MenuItem component={Link} to="/" onClick={handleHomeClick}>
              Home
            </MenuItem>
            <MenuItem onClick={() => { handleMobileMenuClose(); setMobileDestOpen(true); }}>
              Destinations
            </MenuItem>
            <MenuItem component={Link} to="/gallery" onClick={handleMobileMenuClose}>
              Gallery
            </MenuItem>
            <MenuItem component={Link} to="/about" onClick={handleMobileMenuClose}>
              About Us
            </MenuItem>
            <MenuItem component={Link} to="/planyourtrip" onClick={handleMobileMenuClose}>
              PlanYourTrip
            </MenuItem>
            <MenuItem component={Link} to="/login" onClick={handleMobileMenuClose}>
              LOGIN
            </MenuItem>
          </Menu>
        </Box>

        <Dialog fullWidth open={mobileDestOpen} onClose={() => setMobileDestOpen(false)}>
          <List>
            {[
              { name: "Goa", path: "/goa" },
              { name: "Gujarat", path: "/gujarat" },
              { name: "Himachal Pradesh", path: "/himachal" },
              { name: "Karnataka", path: "/karnataka" },
              { name: "Kerala", path: "/kerala" },
              { name: "Maharashtra", path: "/maharastra" },
              { name: "Rajasthan", path: "/rajasthan" },
              { name: "Tamil Nadu", path: "/tamilnadu" },
              { name: "Uttar Pradesh", path: "/uttarpradesh" },
              { name: "Uttarakhand", path: "/uttarakhand" },
            ].map((item) => (
              <ListItem key={item.path} disablePadding>
                <ListItemButton component={Link} to={item.path} onClick={() => setMobileDestOpen(false)}>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Dialog>

        <Typography variant="h6" component="div" sx={{ fontWeight: 700, fontSize: "1.5rem" }}>
          {logoText}
        </Typography>

        {/* Desktop buttons (hidden on xs) */}
        <Box sx={{ display: { xs: "none", sm: "flex" }, flex: 1, justifyContent: "space-evenly" }}>
          <Button component={Link} to="/" color="inherit" sx={{ fontSize: "1rem" }} onClick={handleHomeClick}>
            Home
          </Button>

          <Button color="inherit" sx={{ fontSize: "1rem" }}>
            <Destination open={open} setOpen={setOpen} />
          </Button>

          <Button component={Link} to="/gallery" color="inherit" sx={{ fontSize: "1rem" }} onClick={closeDropdown}>
            Gallery
          </Button>

          <Button component={Link} to="/about" color="inherit" sx={{ fontSize: "1rem" }} onClick={closeDropdown}>
            About Us
          </Button>

          <Button component={Link} to="/planyourtrip" color="inherit" sx={{ fontSize: "1rem" }}>
            PlanYourTrip
          </Button>
        </Box>

        <Button component={Link} to="/login" color="inherit" variant="outlined" sx={{ borderColor: "inherit", textTransform: "none", fontSize: "1rem" }}>
          LOGIN
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;