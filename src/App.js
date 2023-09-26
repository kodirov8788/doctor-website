import { Route, Routes } from "react-router";
import Main from "./components/main/Main";
import Swiper_main from "./components/Swiper_main/Swiper_main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>} />
      </Routes>
      <Swiper_main />
    </div>
  );
}

export default App;
