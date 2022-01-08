import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import TeamMember from "./pages/TeamMember";
import OpinionPage from "./pages/OpinionPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/teammember/:id" element={<TeamMember />} />
        <Route path="/expert" element={<Home />} />
        <Route path="/publications" element={<Home />} />
        <Route path="/activities" element={<Home />} />
        <Route path="/media" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/opinion" element={<OpinionPage />} />
      </Routes>
    </>
  );
}

export default App;
