// import Homepage from "./components/Homepage/Homepage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import { Route } from "react-router-dom";
import Header from "./components/Header/Header.js";
import Product from "./pages/Product/Product";
import Footer from "./components/Footer/Footer";
import Blog from "./pages/Blog/Blog";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import Error from "./pages/Error/Error";
import Cartoverview from "./pages/Cartoverview/Cartoverview";
import Checkout from "./pages/Checkout/Checkout";
import HomePage from "./pages/HomePage/HomePage";
import CartProvider from "./store/CartProvider";
import ScrollToTop from "./Helper/ScrollToTop";

function App() {
  return (
    <>
      <CartProvider>
        <ScrollToTop>
          <Header />

          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/HomePage" exact>
            <HomePage />
          </Route>

          <Route path="/product" exact>
            <Product />
          </Route>

          <Route path="/Blog" exact>
            <Blog />
          </Route>

          <Route path="/BlogDetails" exact>
            <BlogDetails />
          </Route>

          <Route path="/Error" exact>
            <Error />
          </Route>

          <Route path="/Cart" exact>
            <Cartoverview />
          </Route>

          <Route path="/Checkout" exact>
            <Checkout />
          </Route>

          <Footer />
        </ScrollToTop>
      </CartProvider>
    </>
  );
}

export default App;
