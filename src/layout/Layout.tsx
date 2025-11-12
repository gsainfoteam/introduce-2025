import { Outlet } from "react-router-dom";
import Footer from "src/components/common/footer";
import Navbar from "src/components/common/navbar";

const Layout = () => {
  return (
    <>
      <Navbar mode={"light"} hasBackground />

      <Outlet />

      <Footer mode={"light"} />
    </>
  );
};

export default Layout;
