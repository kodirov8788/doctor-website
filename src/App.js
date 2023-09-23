import Swiper_main from "./components/Swiper_main/Swiper_main";
import { Route, Routes } from "react-router-dom";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="App">
      <Swiper_main />
      <Routes>
        <Route path="/" element={<Main/>}/>
      </Routes>
    </div>
  );
}

export default App;
