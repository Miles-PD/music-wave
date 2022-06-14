import Home from "./pages/Home";
import HeaderBar from "./HeaderBar";
import Sidebar from "./Sidebar";
import AlbumTemplate from "./pages/music/AlbumTemplate";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/AlbumTemplate" element={<AlbumTemplate />} />
        <Route path="/HeaderBar" element={<HeaderBar />} />
        <Route path="/Sidebar" element={<Sidebar />} /> 
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
