import Footer from "./Footer";
import Header from "./Header";
import Router from "next/router";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
