import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
        Jr.Data Scientist, a versatile professional with a Master's degree in Physics from the University of Kashmir, is a cornerstone of the Chinar Quantum AI (CQAI) team. Currently serving as a Junior Data Scientist, Aaqib adeptly harnesses advanced analytics to drive innovative solutions while also sharing his expertise as an AI Trainer at CQAI's EMERGE Srinagar branch. His commitment to excellence and insatiable curiosity fuel a multifaceted journey marked by years of teaching experience, where he excels in communicating complex concepts and inspiring students. Aaqib's passion for exploration and continuous learning underscores his role as a dedicated explorer, making him an invaluable asset to the CQAI community, embodying excellence and innovation in every endeavor.
        </p>
        <br />

        <p className="text-xl">
        I like to code matters from scratch and love the idea of bringing thoughts to life. Connect with me to get your project done. <br /> 
        I value minimalistic designs, thoughtful branding of the content, and customer relatable experience. Let’s discover together how we can make your project convert better!<br /> <br />
        </p>
      </div>
    </div>
  );
};

export default About;
