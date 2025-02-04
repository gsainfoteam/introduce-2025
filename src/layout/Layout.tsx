import { Outlet } from "react-router-dom";
import Navbar from "src/components/common/navbar";

const Layout = () => {
  return (
    <>
      <div className="content-wrapper">
        <div className="content">
          <Navbar mode={"light"} />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
