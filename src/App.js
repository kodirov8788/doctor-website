
import { Route, Routes } from "react-router";
import Main from "./components/main/Main";
import Swiper_main from "./components/Swiper_main/Swiper_main";

import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="App">
      <Routes>

        <Route path="/" element={<Main/>} />
      </Routes>
      <Swiper_main />

        <Route path="/" element={<Footer/>} />

    </div>
  );
}

export default App;
