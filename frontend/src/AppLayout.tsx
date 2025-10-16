import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function AppLayout() {

  return(
    <div className="flex flex-col min-h-screen pt-16">
      <Header />
      
      <main>
        <Outlet />
      </main>

      {/* <Footer /> */}
      <Footer />
    </div>
  );
}

export default AppLayout;