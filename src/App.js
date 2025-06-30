import "./styles.css";
import "./search.css";
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Works from "./pages/works";
import Home from "./pages/home";
import Writing from "./pages/writing";
import Social from "./pages/social";
import AllResults from "./pages/allResults";
import NotFound from "./pages/notFound";
import ProjectsPage from "./pages/projectsPage";
import ImagesPage from "./pages/imagesPage";
import BlogPage from "./pages/blogPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<AllResults />} />
        <Route path="/about" element={<About />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/works" element={<Works />} />
        <Route path="/social" element={<Social />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/images" element={<ImagesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;