// src/components/CTA.js
import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Use useNavigate for routing in react-router-dom v6+

const CTA = ({ businessType }) => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleRedirect = () => {
    let redirectUrl = "";

    // Redirect based on the business type
    if (businessType === "Retail") {
      redirectUrl = "https://wafrelcorp.ca/retail-plan/";
    } else if (businessType === "Local") {
      redirectUrl = "https://wafrelcorp.ca/local-plan/";
    } else if (businessType === "Ecommerce") {
      redirectUrl = "https://wafrelcorp.ca/e-commerce-plan/";
    }

    // Perform the redirection
    if (redirectUrl) {
      window.location.href = redirectUrl; // Use window.location.href for external redirects
    }
  };

  return (
    <Box sx={{ textAlign: "center", padding: "2rem", backgroundColor: "#fff" }}>
      <Button
        variant="contained"
        color="primary"
        onClick={handleRedirect}
        sx={{ marginTop: "1rem" }}
      >
        Claim Offer now
      </Button>
    </Box>
  );
};

export default CTA;
