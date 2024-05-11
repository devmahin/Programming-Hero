import { Outlet } from "react-router-dom";
import Nav from "../component/Nav";
import Footer from "../component/Footer";

function Layout() {
  return (
    <div>
      <div className="container mx-auto">
        <Nav></Nav>
        <div className="min-h-[calc(100vh-284px)]">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
