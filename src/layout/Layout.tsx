import { Outlet } from "react-router-dom";
import Navbar from "src/components/common/navbar";

const Layout = () => {
  return (
    <>
      <Navbar mode={"light"} hasBackground />

      <Outlet />
    </>
  );
};

export default Layout;
