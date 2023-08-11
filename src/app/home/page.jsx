"use client";
import React from "react";
import men from "../../../public/images/class-men.png";
import search from "../../../public/images/search.svg";
import b1 from "../../../public/images/b-1.png";
import b2 from "../../../public/images/b-2.png";
import Image from "next/image";
import Footer from "@/components/Footer";

const page = () => {
  const val = [
    "Data Science",
    "WEB 3",
    "AI",
    "Prompt Engineering",
    "VFX",
    "Business",
    "Computer Science",
    "Data Model",
    "Langauge Model",
    "VR",
    "Neural Network",
    "Unity",
    "UI UX",
    "NLP",
  ];
  return (
    <div>
      <div className="flex justify-between items-center px-7 py-4 border-b border-[#ededed]">
        <div className="text-2xl font-bold">MMIT UNIVERSITY</div>
        <div className="text-lg font-medium">Login User With MMIT Domain</div>
      </div>
      <div className="py-11 px-28 flex items-center justify-evenly">
        <div>
          <Image src={men} width={305} height={280} alt="pic" />
        </div>
        <div className="w-[50%]">
          <h1 className="text-[40px] font-bold text-[#0a2540] mb-3">
            Find your next course.
          </h1>
          <div className="inp-search">
            <Image src={search} alt="pic" />
            <input
              type="text"
              placeholder="Search 150,000 courses"
              className=""
            />
          </div>
          <div className="flex mt-3 justify-between text-[#0a2540] text-lg px-[5px] font-normal">
            <div>Or browse by subject or university</div>
            <div>Learn more</div>
          </div>
          <div className="text-2xl font-bold px-[5px] mt-4">
            Popular courses
          </div>
          <div className="mt-1 flex justify-start gap-2  flex-wrap">
            {val.map((val, ind) => {
              return (
                <div
                  key={ind}
                  className="py-[5px] px-3 border border-[#ededed] bg-[#f9fafc] rounded-3xl mb-2"
                >
                  {val}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="bg-[#f6f2ff] py-8">
        <h1 className="text-[40px] text-[#2B0380] text-center font-bold">
          Find the best courses, wherever they exist
        </h1>
      </div>
      <div className="bg-[#fff6ed] py-[60px]">
        <div className="text-[40px] font-bold text-center">Rankings</div>
        <p className="text-[21px] font-semibold text-center w-[450px] m-auto">
          Over 220K reviews written by Class Central users help you pick the
          best course.
        </p>
        <div className="flex justify-center gap-5 mt-12">
          <div className="w-[395px] h-[295px]">
            <Image src={b1} alt="pic" />
          </div>
          <div className="w-[395px] h-[295px]">
            <Image src={b2} alt="pic" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
