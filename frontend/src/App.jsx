import { HashRouter Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import NotFound from "./pages/NotFound";
import Navbar from "./components/NavBar";
import EditFavorite from "./pages/EditFavorite";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <div className="container mx-auto p-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/favorites/:id" element={<EditFavorite />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
