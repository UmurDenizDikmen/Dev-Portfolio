import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import SlideUp from "./SlideUp";

type ProjectsProps = {
  name: string;
  description: string;
  image: string;
  github: string;
  link: string;
};

const projects: ProjectsProps[] = [
  {
    name: "GlowMazon",
    description:
      "Full Stack Ecommerce-Website in React, Typescript, Tailwind CSS, Next.JS, Prisma, MongoDB, NextAuth,DaisyUI",
    image: "/ss-project-glowmazon.png",
    github: "https://github.com/UmurDenizDikmen/E-Commerce-Nextjs",
    link: "https://e-commerce-nextjs-umurdenizdikmen.vercel.app/",
  },
  {
    name: "CoralBikes",
    description:
      "Full Stack Ecommerce-Website in React, Typescript, Tailwind CSS, Next.JS, Prisma, MongoDB, NextAuth",
    image: "/bicycle-ecommerce.png",
    github: "https://github.com/UmurDenizDikmen/Bicycle-E-Commerce-Nextjs",
    link: "https://bicycle-e-commerce-nextjs-umurdenizdikmen.vercel.app/",
  },
  {
    name: "U-Learn",
    description:
      "Building Online education website mainpage with NextJS, TailwindCSS & React",
    image: "/ss-ulearn.png",
    github: "https://github.com/UmurDenizDikmen/ULearn-Nextjs",
    link: "https://u-learn-nextjs-umurdenizdikmen.vercel.app/",
  },
];

const ProjectsSections = () => {
  return (
    <section id="projects">
      <h1 className="text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>
      <div className="flex flex-col space-y-28 items-center">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col md:flex-row md:space-x-12 mt-8 animate-slideUpCubiBezier animation-delay-2 md:ml-12 md:pl-10">
                  <Link href={project.link} target="_blank">
                    <div>
                      <Image
                        src={project.image}
                        alt=""
                        width={900}
                        height={900}
                        className="rounded-xl shadow-xl hover:opacity-70 "
                      />
                    </div>
                  </Link>

                  <div className="mt-12 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4">
                      {project.description}
                    </p>
                    <div className="flex md:flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>

                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSections;
