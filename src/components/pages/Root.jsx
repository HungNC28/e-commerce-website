import { Outlet } from "react-router-dom";

import NavBar from "../Layout/NavBar";
import Footer from "../Layout/Footer";
import LiveChat from "../LiveChat/LiveChat";
import { useSelector } from "react-redux";
function RootLayout() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <LiveChat />
    </>
  );
}

export default RootLayout;
