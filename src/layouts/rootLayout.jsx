import { Outlet } from "react-router-dom";
import Footer from "../constants/footer";
import Navbar from "../constants/navbar";

const RootLayout = () => {
  return (<>
  <Navbar/>
  <Outlet/>
  <Footer/>

  </>
  )
};

export default RootLayout;



