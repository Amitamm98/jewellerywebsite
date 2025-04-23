import { Route, Routes } from "react-router-dom";
import BagNewsletter from "./components/BagComp/BagNewsletter";
import Footer from "./components/HomeComp/Footer";
import Navbar from "./components/HomeComp/Navbar";
import Bags from "./pages/Bags";
import Carpets from "./pages/Carpets";
import Home from "./pages/Home";
import Jewellery from "./pages/Jewellery";
import Others from "./pages/Others";
import Pashminas from "./pages/Pashminas";
import Statue from "./pages/Statue";
;

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bags" element={<Bags />} />
        <Route path="/jewellery" element={<Jewellery />} />
        <Route path="/others" element={<Others />} />
        <Route path="/pashminas" element={<Pashminas />} />
        <Route path="/statue" element={<Statue />} />
        <Route path="/carpets" element={<Carpets />} />

        
      </Routes>
      <BagNewsletter />
      <Footer />
    </>
  );
};

export default App;
