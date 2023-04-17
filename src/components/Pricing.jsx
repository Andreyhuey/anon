import React from "react";
import { CheckIcon } from "@heroicons/react/solid";

function Pricing() {
  return (
    <div name="pricing" className="w-full text-white my-24">
      <div className="w-full h-[] bg-slate-900 mix-blend-overlay">
        <div className="max-w-[1240px] mx-auto py-12 md:px-24 ">
          <div className="text-center py-8 text-slate-300">
            <h2 className="text-3xl uppercase">Pricing</h2>
            <h3 className="text-5xl text-white py-8 font-bold">
              The right price for your research
            </h3>
            <p className="text-3xl">
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
              Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            </p>
          </div>

          <div className="grid md:grid-cols-2">
            <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
              <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
                Standard
              </span>
              <div>
                <p className="text-6xl font-bold py-4 flex">
                  $200
                  <span className="text-xl text-slate-500 flex flex-col justify-end">
                    /mo
                  </span>
                </p>
              </div>
              <p className="text-2xl py-8 text-slate-500">
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lirem ipsum
              </p>

              <div className="text-2xl">
                <p className="flex py-4 ">
                  <CheckIcon className="w-9 mr-5 text-green-600" />
                  Lorem Ipsum dolor
                </p>
                <p className="flex py-4 ">
                  <CheckIcon className="w-9 mr-5 text-green-600" />
                  Lorem Ipsum dolor sit amet
                </p>
                <p className="flex py-4 ">
                  <CheckIcon className="w-9 mr-5 text-green-600" />
                  Lorem Ipsum dolor sit
                </p>
                <p className="flex py-4 ">
                  <CheckIcon className="w-9 mr-5 text-green-600" />
                  Lorem Ipsum dolor sit
                </p>
                <p className="flex py-4 ">
                  <CheckIcon className="w-9 mr-5 text-green-600" />
                  Lorem Ipsum dolor
                </p>
                <button className="w-full py-4 my-4 rounded-xl transparent">
                  Get Started
                </button>
              </div>
            </div>

            <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
              <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
                Premium
              </span>
              <div>
                <p className="text-6xl font-bold py-4 flex">
                  $500
                  <span className="text-xl text-slate-500 flex flex-col justify-end">
                    /mo
                  </span>
                </p>
              </div>
              <p className="text-2xl py-8 text-slate-500">
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lirem ipsum
              </p>

              <div className="text-2xl">
                <p className="flex py-4 ">
                  <CheckIcon className="w-9 mr-5 text-green-600" />
                  Lorem Ipsum dolor
                </p>
                <p className="flex py-4 ">
                  <CheckIcon className="w-9 mr-5 text-green-600" />
                  Lorem Ipsum dolor sit amet
                </p>
                <p className="flex py-4 ">
                  <CheckIcon className="w-9 mr-5 text-green-600" />
                  Lorem Ipsum dolor sit
                </p>
                <p className="flex py-4 ">
                  <CheckIcon className="w-9 mr-5 text-green-600" />
                  Lorem Ipsum dolor sit
                </p>
                <p className="flex py-4 ">
                  <CheckIcon className="w-9 mr-5 text-green-600" />
                  Lorem Ipsum dolor
                </p>
                <button className="w-full py-4 my-4 rounded-xl transparent">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
