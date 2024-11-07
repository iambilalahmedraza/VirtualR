import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 ">
      <h1 className="text-4xl tracking-wide text-center sm:text-6xl lg:text-7xl">
        VirtualR Build Tools
        <span className="text-transparent bg-gradient-to-r from-orange-500 to-red-800 bg-clip-text">
          {" "}
          For Developers
        </span>
      </h1>
      <p className="max-w-4xl mt-10 text-lg text-center text-neutral-500">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive developement tools. Get started today and turn your
        imagination into immersive reality!
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="px-4 py-3 mx-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
        >
          Start For Free
        </a>
        <a href="#" className="px-4 py-3 mx-3 border rounded-md ">
          Documentation
        </a>
      </div>
      <div className="flex justify-center mt-10 ">
        <video
          className="w-1/2 mx-2 my-4 border border-orange-700 rounded-lg shadow-orange-700"
          autoPlay
          loop
          muted
        >
          <source src={video1} type="video/mp4" />
          your browser does not support video tag
        </video>
        <video
          className="w-1/2 mx-2 my-4 border border-orange-700 rounded-lg shadow-orange-700"
          autoPlay
          loop
          muted
        >
          <source src={video2} type="video/mp4" />
          your browser does not support video tag
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
