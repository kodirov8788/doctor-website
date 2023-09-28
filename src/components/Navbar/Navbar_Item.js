import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar_Item({ data }) {
  const [modalText, setModalText] = useState(false);
  const handleModalText = () => {
    setModalText(!modalText);
  };
  return (
    <div>
      <ul
        className="hidden lg:flex justify-center items-center ml-7"
        onClick={() => handleModalText()}
      >
        <Link
          to={"single"}
          className="w-[115px] text-lg h-[105px] text-center pt-10 hover:bg-black hover:border-b-8 border-[rgb(203,148,29)]"
          key={data?.id}
        >
          {data?.name}
        </Link>
      </ul>
      {modalText
        ? data.object.map((item) => (
            <div
              className="w-full h-5/6 bg-black absolute left-0 top-36 text-white"
              key={item.id}
            >
              <h1>{item.name}</h1>
              <h1>{item.desc}</h1>
            </div>
          ))
        : ""}
    </div>
  );
}

export default Navbar_Item;
