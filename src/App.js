import React from "react";
import Home from "./Home";
import GoaPage from "./components/Destination_Page/GoaPage";
import Gujarat from "./components/Destination_Page/Gujarat";
import Himachal from "./components/Destination_Page/Himachal";
import RajasthanPage from "./components/Destination_Page/Rajasthan";
import TamilnaduPage from "./components/Destination_Page/Tamilnadu";
import UttarPradeshPage from "./components/Destination_Page/UttarPradesh";
import UttarakhandPage from "./components/Destination_Page/Uttarakhand";
import Karnataka from "./components/Destination_Page/Karnataka";  
import Kerala from "./components/Destination_Page/Kerala";
import MaharastraPage from "./components/Destination_Page/Maharastra";
import About from "./components/About";
import Gallery from "./components/Gallery";
import LoginForm from "./components/LoginForm/Login";
import PlanYourTrip from "./components/PlanYourTrip/Trip";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/goa" element={<GoaPage />} />
      <Route path="/gujarat" element={<Gujarat />} />
      <Route path="/himachal" element={<Himachal />} />
      <Route path="/maharashtra" element={<MaharastraPage />} />
      <Route path="/rajasthan" element={<RajasthanPage />} />
      <Route path="/tamilnadu" element={<TamilnaduPage />} />
      <Route path="/uttarpradesh" element={<UttarPradeshPage />} />
      <Route path="/uttarakhand" element={<UttarakhandPage />} />
      <Route path="/karnataka" element={<Karnataka />} />
      <Route path="/kerala" element={<Kerala />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/planyourtrip" element={<PlanYourTrip />} />
    </Routes>
  );
}

export default App;
