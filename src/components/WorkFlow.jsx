import React from "react";
import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";

const WorkFlow = () => {
  return (
    <div className="mt-20 ">
      <h2 className="text-3xl sm:text-5xl lg:text6xl text-center mt-6 tracking-wide">
        Accelerate Your
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          {" "}
          Coding Work Flow.
        </span>
      </h2>
      <div className="flex flex-wrap justify-center ">
        <div className="p-2 w-full lg:w-1/2">
          <img src={codeImg} alt="" />
        </div>
        <div className="pt-12 w-full lg:w-1/2 ">
          {checklistItems.map((checkItems, index) => (
            <div key={index} className="flex mb-12 ">
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 items-center rounded-full justify-center">
                <CheckCircle2 />
              </div>
              <div className="">
                <h1 className="mt-1 mb-2 text-xl">{checkItems.title}</h1>
                <p className="text-md text-neutral-500">
                  {checkItems.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
