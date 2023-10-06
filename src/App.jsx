import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Home, HotelDetailed } from "./components";

export default function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home/:title" element={<Home />} />

        <Route path="/:name/:id" element={<HotelDetailed />} />
      </Routes>
    </Router>
  );
}
