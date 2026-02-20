import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

function PlanYourTrip() {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [people, setPeople] = useState("");
  const [display, setDisplay] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Trip Planned to ${destination} on ${date} for ${people} people!`);
    setDisplay({
      destination,
      date,
      people,
    });

    setDestination("");
    setDate("");
    setPeople("");

    const data = {
      destination: destination,
      date: date,
      people: people,
    };

    localStorage.setItem("data", JSON.stringify(data));
  };

  return (
    <>
      <Box
        sx={{
          maxWidth: 500,
          mx: "auto",
          mt: 8,
          p: 3,
          boxShadow: 4,
          borderRadius: 2,
        }}
      >
        <Typography
          align="center"
          sx={{ mb: 2, fontSize: 24, fontWeight: "bold" }}
        >
          Plan Your Trip
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            required
            label="Destination"
            fullWidth
            margin="normal"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />

          <TextField
            required
            type="date"
            fullWidth
            margin="normal"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <TextField
            required
            label="Number of People"
            type="number"
            fullWidth
            margin="normal"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
          />

          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Submit
          </Button>
        </form>
      </Box>
      {display && (
        <Box
          sx={{
            maxWidth: 500,
            mx: "auto",
            mt: 8,
            p: 3,
            boxShadow: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="body1">
            Destination: {display.destination}
          </Typography>
          <Typography variant="body1">Date: {display.date}</Typography>
          <Typography variant="body1">People: {display.people}</Typography>
        </Box>
      )}
    </>
  );
}

export default PlanYourTrip;
