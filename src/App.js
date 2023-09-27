import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Footer/>} />
      </Routes>
    </div>
  );
}

export default App;
