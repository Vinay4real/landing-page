// src/components/Timer.js
import { Box, Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(60 * 60 * 24);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}:${m}:${s}`;
  };

  return (
    <Box sx={{ textAlign: "center", padding: "2rem", backgroundColor: "#fff" }}>
      <Typography variant="h5">
        Unlock Growth with 70% Off – Limited Time Offer!
      </Typography>
      <Typography variant="h6">Time Left: {formatTime(timeLeft)}</Typography>
      {/* <Button variant="contained" color="primary" sx={{ marginTop: "1rem" }}>
        Claim Offer Now
      </Button> */}
    </Box>
  );
};

export default Timer;
