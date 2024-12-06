// src/components/BusinessTypeDropdown.js
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

const BusinessTypeDropdown = ({ setBusinessType }) => {
  const [businessType, setLocalBusinessType] = useState("");

  const handleChange = (event) => {
    const selectedType = event.target.value;
    setLocalBusinessType(selectedType);
    setBusinessType(selectedType); // Update the state in parent component
  };

  return (
    <Box sx={{ padding: "2rem", textAlign: "center" }}>
      <FormControl fullWidth sx={{ maxWidth: 300, margin: "0 auto" }}>
        <InputLabel>Choose Your Business Type</InputLabel>
        <Select value={businessType} onChange={handleChange}>
          <MenuItem value="Retail">Retail Chains</MenuItem>
          <MenuItem value="Local">Local Businesses</MenuItem>
          <MenuItem value="Ecommerce">E-commerce</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default BusinessTypeDropdown;
