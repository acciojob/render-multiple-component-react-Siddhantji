import React, { Component, useState } from "react";
import "../styles/App.css";
import ProjectDtls from "./ProjectDtls";
const projectArr = [
  {
    "project-name": "Task Manager",
    "project-description":
      "A web app to manage daily tasks with features like adding, editing, and deleting tasks, built with React.",
  },
  {
    "project-name": "E-commerce Store",
    "project-description":
      "An online store for buying and selling products, featuring product listings, a shopping cart, and checkout process, built using React.",
  },
  {
    "project-name": "Weather Dashboard",
    "project-description":
      "A weather forecasting application that displays current weather conditions and forecasts for multiple locations using React.",
  },
  {
    "project-name": "Social Media Feed",
    "project-description":
      "A social media feed component that displays posts from various users, allowing for likes and comments, built with React.",
  },
  {
    "project-name": "Recipe Finder",
    "project-description":
      "A web app to search and display recipes from an external API, with features like filtering and saving favorite recipes, created using React.",
  },
  {
    "project-name": "Personal Blog",
    "project-description":
      "A blogging platform where users can create, edit, and delete blog posts, with a clean and responsive design using React.",
  },
  {
    "project-name": "Portfolio Website",
    "project-description":
      "A personal portfolio website to showcase projects and skills, featuring a contact form and responsive design, built with React.",
  },
  {
    "project-name": "Expense Tracker",
    "project-description":
      "An application to track personal expenses and incomes, providing visual representations like charts and graphs, developed using React.",
  },
  {
    "project-name": "Fitness Tracker",
    "project-description":
      "A web app for tracking fitness activities, setting goals, and monitoring progress over time, built with React.",
  },
  {
    "project-name": "Event Calendar",
    "project-description":
      "An interactive calendar for managing and viewing events, with features like adding, editing, and deleting events, created using React.",
  },
];

const App = () => {
  return (
    <div id="main">
      {projectArr.map((project, idx) => (
        <ProjectDtls
          key={idx}
          name={project["project-name"]}
          desc={project["project-description"]}
        />
      ))}
    </div>
  );
};

export default App;
