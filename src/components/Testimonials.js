import React from "react";

const Testimonials = () => {
  const testimonialData = [
    {
      image: "./images/image-emily.jpg",
      testimonial:
        "We put our trust in Sunnyside, and they delivered, making sure our needs were meat and the deadlines we're always hit.",
      name: "Emily R.",
      title: "Marketing Director",
    },
    {
      image: "./images/image-thomas.jpg",
      testimonial:
        "Sunnyside's enthusiasm couple with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
      name: "Thomas S.",
      title: "Chief Operating Officer",
    },
    {
      image: "./images/image-jennie.jpg",
      testimonial:
        "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommend!",
      name: "Jennie F.",
      title: "Business Owner",
    },
  ];

  return (
    <div style={{ padding: "0 15rem 10rem 15rem" }}>
      <h3 style={{ textTransform: "uppercase" }}>Client Testimonials</h3>
      <div style={{ display: "flex" }}>
        {testimonialData.map((testimonial) => (
          <div style={{ marginTop: "3rem" }}>
            <img
              src={testimonial.image}
              alt="client-profile"
              style={{ borderRadius: "50%", width: "15%" }}
            />
            <p style={{ lineHeight: 1.8, margin: "4rem 2rem" }}>
              {testimonial.testimonial}
            </p>
            <p style={{ fontWeight: 700, margin: "1rem 0" }}>
              {testimonial.name}
            </p>
            <p>{testimonial.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
