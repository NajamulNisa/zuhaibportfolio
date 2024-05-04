import React from "react";
import css from "../assets/css.png";
import github from "../assets/github.png";
import mongodb from "../assets/mongodb.png"
import pymongo from "../assets/mongodb.png"
import python from "../assets/python.png";
import html from "../assets/html.png";
import vscode from "../assets/vscode.png";
import cplus from "../assets/cplus.jpg"
const Experience = () => {
  const techs = [
    {
      id: 1,
      src: python,
      title: "Python",
      style: "shadow-purple-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: html,
      title: "HTML",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: vscode,
      title: "vscode",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: pymongo,
      title: "PyMongo",
      style: "shadow-green-400",
    },
    {
      id: 6,
      src: cplus,
      title: "C++",
      style: "shadow-white",
    },
  
    {
      id: 7,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    
    {
      id: 8,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-500",
    },
    
      
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen experience"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="pb-2">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
           Skills 
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
