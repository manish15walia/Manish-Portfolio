import React from "react";

import todolist from "../assets/portfolio/todolist.png"
import advenista from "../assets/portfolio/advenista.png"
import cineFlix from "../assets/portfolio/cineflix.png"
import weatherapp from "../assets/portfolio/weather-app.png";
import expenseTracker from "../assets/portfolio/expensetracker.png";

const Portfolio = () => {
  const portfolios = [
    {
      id:1,
      src:advenista,
      link:"https://tours-travels-zfsl.onrender.com/",
      repo:"https://github.com/manish15walia/Tours-and-Travel-Booking-Website",
    },
    {
      id:2,
      src: cineFlix,
      link: 'https://cine-flix-movies-shows-app.vercel.app/',
      repo: 'https://github.com/manish15walia/CineFlix---Movies-Shows-App'
    },
    {
      id:3,
      src:expenseTracker,
      link:"https://expensestracker-2023.netlify.app/",
      repo:"https://github.com/manish15walia/Expense-Tracker",
    },
    {
      id:4,
      src:todolist,
      link:"https://todo-list-manish.netlify.app/",
      repo:"https://github.com/manish15walia/ToDo-List",
    },
    {
      id: 5,
      src: weatherapp,
      link: 'https://my-weather-app-reactttt.netlify.app',
      repo: 'https://github.com/nakul412/weather-app'
    },
    
    
   
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
