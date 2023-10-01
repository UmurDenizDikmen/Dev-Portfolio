import React from "react";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <hr className="w-full h-0.5 mx-auto mt-8 border-0"></hr>
      <div className="mx-auto p-4 flex flex-col text-center md:flex-row md:justify-between">
        <div>© 2023 Umur Deniz Dikmen</div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1 md:space-x-4">
          <a
            href="https://github.com/UmurDenizDikmen"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer"
              size={30}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/umur-deniz-dikmen-/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer"
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
