// src/components/StepGuide.js
import { Box, Typography, Grid, Stepper, Step, StepLabel } from "@mui/material";
import { UploadFile, AccountCircle, Star } from "@mui/icons-material";

const steps = [
  { label: "Choose your business type", icon: <AccountCircle /> },
  { label: "Set up your profile", icon: <UploadFile /> },
  { label: "Start growing your sales", icon: <Star /> },
];

const StepGuide = () => (
  <Box sx={{ padding: "2rem", backgroundColor: "#fff" }}>
    <Typography variant="h4" gutterBottom textAlign="center">
      Get Started in 3 Simple Steps
    </Typography>
    <Stepper alternativeLabel>
      {steps.map((step, index) => (
        <Step key={index}>
          <StepLabel icon={step.icon}>{step.label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  </Box>
);

export default StepGuide;
