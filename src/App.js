import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Contact from "./pages/ContactPage";

import DogPage from "./pages/DogPage";
import DogFood from "./pages/dogPage/DogFood";
import DogGoods from "./pages/dogPage/DogGoods";

import Catpage from "./pages/CatPage";
import CatFood from "./pages/catPage/CatFood";
import CatGoods from "./pages/catPage/CatGoods";

import WorkInProgress from "./components/workInProgress/WorkInProgress";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/honden" element={<DogPage />} />
        <Route path="/honden/voedsel" element={<DogFood />} />
        <Route path="/honden/goederen" element={<DogGoods />} />

        <Route path="/katten" element={<Catpage />} />
        <Route path="/katten/voedsel" element={<CatFood />} />
        <Route path="/katten/goederen" element={<CatGoods />} />

        <Route path="/meer" element={<WorkInProgress />} />
        <Route path="/contact" element={<Contact />} />

        {/* <Route path="/workInProgress" element={<WorkInProgress />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
