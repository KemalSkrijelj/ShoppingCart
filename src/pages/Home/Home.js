import { NavLink } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="homepage">
        <div className="text-homepage">
          <h1>
            Enjoy. High-quality.{" "}
            <NavLink
              style={{ color: "white", textDecoration: "none" }}
              to="/products"
            >
              Buy.
            </NavLink>
          </h1>
          <p>
            Welcome to ShoppingCart, your ultimate destination for a seamless and
            enjoyable shopping experience. Discover and buy from our vast
            selection of high-quality products tailored to your unique tastes
            and needs.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
