import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;
