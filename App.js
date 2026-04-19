import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.js";
import Home from "./Home.js";
import AddPost from "./AddPost.js";
import EditPost from "./EditPost.js";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddPost />} />
        <Route path="/edit/:id" element={<EditPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
