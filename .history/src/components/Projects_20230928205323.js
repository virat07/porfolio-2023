import React from "react";
import insight1 from "../assets/insight1.png";
import sciklit from "../assets/sciklit.png";
import mernchatbox from "../assets/mernchatbox.png";

const Projects = () => {
  const projects = [
    {
      img: insight1,
      title: "Personality Traits website",
      desc: "Insight Discovery Model to evaluate a person's personality traits.",
      code: "https://github.com/virat07/bizinc-Insight-Discovery/tree/main",
    },
    {
      img: sciklit,
      title: "Salary Data analysis",
      desc: "Salary Data analysis using scikit-learn, matplotlib.",
      code: "https://github.com/virat07/stream-demo1      ",
    },
    {
      img: mernchatbox,
      title: "Mern Chat Box",
      desc: "MERN chat boxes offer a range of features such as instant messaging, group chats, file sharing, and notifications, making them versatile and adaptable to various communication needs",
      code: "https://drive.google.com/drive/folders/1S3cVaQBLljpasW_ffVPveHvm09fmzA42?usp=sharing",
    },
  ];

  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>

          <p className="pb-5">
            These are some of my best projects. I have built these with React,
            NextJs, MERN and vanilla CSS. Check them out.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img src={project.img} alt={project.title} className="h-[80%]"/>
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.code}
                    className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
