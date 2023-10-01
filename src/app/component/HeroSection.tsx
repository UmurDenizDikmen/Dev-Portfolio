"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section id="Home">
      <div className="flex flex-col text-center items-center my-8 py-16 sm:py-10  md:flex-row md:space-x-3 md:text-left md:py-40  lg:text-left lg:flex-row ">
        <div className="md:w-1/2 md:mt-2 lg:ml-20 lg:pl-20">
          <Image
            className="rounded-full shadow-2xl lg:w-3/5"
            src="/headshot.jpg"
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className="md:mt-2 md:w-3/5 lg:pr-20 lg:mr-20">
          <h1 className="text-lg mt-4 mb-6">
            <p className="font-bold text-4xl mt-6 md:text-7xl">
              Hi, I&#39;m {"Umur!"}
            </p>
            <span className="font-semibold text-teal-600 md:text-3xl">
              Web Developer{" "}
            </span>
            based in Istanbul, Turkey. Working towards creating new experience
            that makes life easier and more meaningful.
          </h1>
          <Link
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            href={"#projects"}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row justify-center md:py-0">
        <Link href={"#about"}>
          <HiArrowDown className="animate-bounce " size={35} />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
