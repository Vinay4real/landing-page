// src/components/TestimonialsCarousel.js
import { Box, Typography, Card, CardContent } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    quote: "Wafrel helped us grow sales by 50% in 2 months!",
    name: "Vendor A",
  },
  {
    quote: "Wafrel helped us grow sales by 50% in 2 months!",
    name: "Vendor A",
  },
  {
    quote: "Our product visibility skyrocketed thanks to Wafrel!",
    name: "Vendor B",
  },
  {
    quote:
      "The insights we gained from Wafrel's platform helped us refine our marketing strategy!",
    name: "Vendor C",
  },
  {
    quote:
      "Wafrel's analytics tools allowed us to make data-driven decisions and increase revenue by 30%.",
    name: "Vendor D",
  },
  {
    quote:
      "With Wafrel, we saw an immediate improvement in our customer engagement and retention.",
    name: "Vendor E",
  },
  {
    quote:
      "Thanks to Wafrel's user-friendly platform, our team was able to optimize our sales funnel with ease.",
    name: "Vendor F",
  },
];

const TestimonialsCarousel = () => {
  const settings = { dots: true, infinite: true, speed: 500, slidesToShow: 1 };

  return (
    <Box sx={{ padding: "2rem", backgroundColor: "#f9f9f9" }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        What Our Vendors Say
      </Typography>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <Card key={index} sx={{ margin: "0 auto", maxWidth: 500 }}>
            <CardContent>
              <Typography variant="h6">{testimonial.quote}</Typography>
              <Typography variant="subtitle1">- {testimonial.name}</Typography>
            </CardContent>
          </Card>
        ))}
      </Slider>
    </Box>
  );
};

export default TestimonialsCarousel;
