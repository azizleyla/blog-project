import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Opinion from "./components/Opinion";
import Home from "./pages/Home";
import Team from "./pages/Team";
import TeamMember from "./pages/TeamMember";
import OpinionPage from "./pages/OpinionPage";
function App() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [currentMember, setCurrentMember] = useState("");
  return (
    <div className="App">
      <Navbar
        isOpenSidebar={isOpenSidebar}
        setIsOpenSidebar={setIsOpenSidebar}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route
          exact
          path="/team"
          element={
            <Team
              currentMember={currentMember}
              setCurrentMember={setCurrentMember}
            />
          }
        />
        <Route
          exact
          path="/teammember/:name"
          element={<TeamMember currentMember={currentMember} />}
        />
        <Route path="/expert" element={<Home />} />
        <Route path="/publications" element={<Home />} />
        <Route path="/activities" element={<Home />} />
        <Route path="/media" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/opinion" element={<OpinionPage />} />
      </Routes>
    </div>
  );
}

export default App;
