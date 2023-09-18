import React from "react";
import Img1 from "../../../images/BMC_logo.png";

function NavbarSearch({ search, setSearch }) {
  return (
    <div className="absolute bg-[rgb(24,24,24)] w-full h-full">
      <div>
        <div className="flex justify-end p-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-[rgb(166,166,166)]"
            onClick={() => setSearch(!search)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src={Img1} alt="" className="w-52" />
        </div>
        <div className="flex justify-center gap-5 mt-24">
          <input
            type="text"
            className="bg-[rgb(197,197,197)] hover:bg-white p-3 w-64 sm:w-96 md:w-[30%] lg:w-[40%] xl:w-[45%] 2xl:w-[50%] rounded-md"
            placeholder="Search"
          />
          <button className="w-14 h-14 bg-[rgb(0,133,122)] rounded-md pl-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
        <div className="w-96 sm:w-[25%] md:w-[30%] lg:w-[40%] xl:w-[45%] 2xl:w-full text-white">
          <h1 className="text-xl text-center mr-[43%] mt-10">
            POPULAR SEARCHES
          </h1>
          <div className="flex justify-center gap-5 mt-5 mr-[18%] flex-wrap">
            <p className="underline cursor-pointer hover:text-[rgb(165,171,181)]">
              Adult Primary Care
            </p>
            <p className="underline cursor-pointer hover:text-[rgb(165,171,181)]">
              Neurology
            </p>
            <p className="underline cursor-pointer hover:text-[rgb(165,171,181)]">
              Psychiatry
            </p>
            <p className="underline cursor-pointer hover:text-[rgb(165,171,181)]">
              Orthopedic Surgery
            </p>
            <p className="underline cursor-pointer hover:text-[rgb(165,171,181)]">
              Radiology
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarSearch;
