import React, { useState } from "react";
import Img1 from "../../images/BMC_logo.png";
import { Link } from "react-router-dom";
import NavbarSearch from "./search/NavbarSearch";
import Navbar_Item from "./Navbar_Item";
import { nav_data } from "./static_data";

function Navbar({}) {
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const [modalText, setModalText] = useState(false);
// console.log(menu)
  const ModalMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className="bg-[url('./images/doctor.png')] w-full h-screen bg-cover">
      {/* Search page started */}
      {search ? <NavbarSearch search={search} setSearch={setSearch} /> : ""}
      <div className="bg-[rgb(0,133,122)] text-white pr-20 py-2 hidden lg:block">
        <ul className="lg:flex lg:justify-end gap-5">
          <li className="hover:underline">
            <Link to={"#"}>MyChart</Link>
          </li>
          <li className="hover:underline">
            <Link to={"#"}>Donate</Link>
          </li>
          <li className="hover:underline">
            <Link to={"#"}>Refer a patient</Link>
          </li>
          <li className="hover:underline">
            <Link to={"#"}>Request an appointed</Link>
          </li>
        </ul>
      </div>
      {/* Search page finished */}
      {/* Navbar started */}
      <nav className="lg:bg-black/40 bg-[rgb(24,24,24)]  hover:bg-[rgb(24,24,24)] ease-out duration-100 text-white flex
       justify-around items-center py-5 h-[105px]">
        <div className="flex items-center">
          <img src={Img1} alt="" className="w-[163px] h-[70px]" />
          {nav_data.map((data) => (
            <Navbar_Item data={data} modalText={modalText}setModalText={setModalText}  />
          ))}
        </div>
        <div className="flex items-center">
          <div className="hover:bg-black w-10 h-10 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-20 h-20"
              onClick={() => setSearch(true)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          {menu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
              onClick={() => ModalMenu()}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <div className="w-10 h-10 block lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-full h-full"
                onClick={() => ModalMenu()}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          )}
        </div>
      </nav>
      {/* Navbar finished */}
      <div className=""></div>
      {/* Menubar started */}
      {menu ? (
        <div>
          <div>
            <ul className="bg-[rgb(24,24,24)] h-[400px]">
              <li className="hover:bg-black w-full h-14 flex justify-between px-5 items-center text-white">
                <Link to={"#"}>About BMC</Link>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </li>
              <li className="hover:bg-black w-full h-14 flex justify-between px-5 items-center text-white">
                <Link to={"#"}>Departments & Conditions</Link>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </li>
              <li className="hover:bg-black w-full h-14 flex justify-between px-5 items-center text-white">
                <Link to={"#"}>Patients & Visitors</Link>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </li>
              <li className="hover:bg-black w-full h-14 flex justify-between px-5 items-center text-white">
                <Link to={"#"}>For Medical Professionals</Link>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </li>
              <li className="hover:bg-black w-full h-14 flex justify-between px-5 items-center text-white">
                <Link>Research</Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </li>
            </ul>
          </div>
          <div className="bg-[rgb(0,133,122)] text-white">
            <ul className="gap-5">
              <li className="hover:bg-[rgb(9,56,52)] w-full h-14 flex items-center pl-5">
                <Link to={"#"}>MyChart</Link>
              </li>
              <li className="hover:bg-[rgb(9,56,52)] w-full h-14 flex items-center pl-5">
                <Link to={"#"}>Donate</Link>
              </li>
              <li className="hover:bg-[rgb(9,56,52)] w-full h-14 flex items-center pl-5">
                <Link to={"#"}>Refer a patient</Link>
              </li>
              <li className="hover:bg-[rgb(9,56,52)] w-full h-14 flex items-center pl-5">
                <Link to={"#"}>Request an appointed</Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
      {/* Menubar finished*/}
    </div>
  );
}

export default Navbar;
