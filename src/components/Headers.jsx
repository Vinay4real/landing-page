// src/components/Header.js
import { Box, Typography } from "@mui/material";

const Headers = () => (
  <Box
    sx={{ textAlign: "center", padding: "2rem", backgroundColor: "#f5f5f5" }}
  >
    <Typography variant="h3" gutterBottom>
      Grow Your Business Faster with Wafrel – Your All-in-One Business Hub!
    </Typography>
    <Typography variant="h6">
      Upload products, get recognized, and grow your audience in minutes.
    </Typography>
  </Box>
);

export default Headers;
