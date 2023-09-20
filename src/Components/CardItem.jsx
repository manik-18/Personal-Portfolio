import React from "react";
import Card from "./Card";

const projects = [
  {
    pictureSrc:
      "https://user-images.githubusercontent.com/102967918/247615984-e4ceacd5-3eee-4ff5-89e2-c88ee150fe59.png",
    title: "DailyDigest",
    description:
      "A React project utilizing a news API to display top headlines and various categories, offering real-time news updates and an enhanced user experience.",
    readMoreLink: "https://github.com/manik-18/DailyDigest",
  },
  {
    pictureSrc:
      "https://user-images.githubusercontent.com/102967918/246504363-61615aa4-d1e3-480a-bf29-b03ca440fa3b.png",
    title: "FitVerse",
    description:
      "Empower your fitness journey with our all-in-one website featuring exercise guides, BMI calculator, interactive chatbot, and dedicated support for your wellness goals.",
    readMoreLink: "https://github.com/manik-18/FitVerse",
  },
  {
    pictureSrc:
      "https://user-images.githubusercontent.com/102967918/249750153-796890cf-0e88-457a-8ee5-3a6b7403aea0.png",
    title: "Medical Assistance Software",
    description:
      "e-MAS is a 24x7 Medical Assistance Software for medical emergencies, providing solutions like ambulance booking, doctor appointments, medicine suggestions, lab test booking, and purchasing medical supplies. With a user-friendly interface and Java Swing development, it ensures ease of use and understanding.",
    readMoreLink: "https://github.com/manik-18/Medical-Assistance-Software",
  },
  {
    pictureSrc:
      "https://user-images.githubusercontent.com/102967918/246476702-75d7caa3-0e8d-433e-96fc-f3edec67c405.png",
    title: "Livestock Ledger",
    description:
      "Livestock Ledger is a user-friendly system that helps efficiently manage records of dairy animals and poultry birds. It allows users to easily add, modify, search, and delete important information like admission dates, categories, pet names, owners' details, health issues, and contact information.",
    readMoreLink: "https://github.com/manik-18/Livestock-Ledger",
  },
  {
    pictureSrc:
      "https://user-images.githubusercontent.com/102967918/259405167-478de285-3a23-41f7-80e7-ce038322bd14.png",
    title: "Portfolio",
    description:
      "Explore my portfolio website crafted using React, Vite, and Tailwind CSS, where I proudly present a collection of my work. This platform not only showcases my projects but also highlights my diverse skill set, providing a comprehensive view of my capabilities.",
    readMoreLink: "https://github.com/manik-18/Portfolio",
  },
];

function CardItem() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center ">
      {projects.map((project, index) => (
        <div key={index}>
          <Card {...project} />
        </div>
      ))}
    </div>
  );
}

export default CardItem;
