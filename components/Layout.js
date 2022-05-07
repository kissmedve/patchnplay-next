import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div className="wrapper">
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
