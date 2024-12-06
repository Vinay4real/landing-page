// src/components/Quiz.js
import { Box, Typography, Button } from "@mui/material";
import { useState } from "react";

const questions = [
  { question: "What is your primary goal?", options: ["Sales", "Visibility"] },
  { question: "What industry are you in?", options: ["Retail", "Tech"] },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleNext = () => setCurrentQuestion(currentQuestion + 1);

  return (
    <Box sx={{ padding: "2rem", textAlign: "center" }}>
      {currentQuestion < questions.length ? (
        <>
          <Typography variant="h6">
            {questions[currentQuestion].question}
          </Typography>
          {questions[currentQuestion].options.map((option, index) => (
            <Button key={index} onClick={handleNext} sx={{ margin: "0.5rem" }}>
              {option}
            </Button>
          ))}
        </>
      ) : (
        <Typography variant="h5">Thank you! Here’s how we can help!</Typography>
      )}
    </Box>
  );
};

export default Quiz;
