import React, { useState } from "react";
import ResearchCenter from "../ResearchCenter";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Layout = ({ children }) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  return (
    <div>
      <Navbar
        isOpenSidebar={isOpenSidebar}
        setIsOpenSidebar={setIsOpenSidebar}
      />
      <main>{children}</main>
      <ResearchCenter />
      <Footer />
    </div>
  );
};

export default Layout;
