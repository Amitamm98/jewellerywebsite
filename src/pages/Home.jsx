import Hero from "../components/HomeComp/Hero";
import ArrowList from "../components/HomeComp/ArrowList";
import NewProduct from "../components/HomeComp/NewProduct";
import Contact from "../components/HomeComp/Contact";
import FeaturedProduct from "../components/HomeComp/FeaturedProduct";
import People from "../components/HomeComp/People";

const Home = () => {
  return (
    <>
      <Hero />
      <ArrowList />
      <NewProduct />
      <Contact />
      <FeaturedProduct />
      <People />
    </>
  );
};

export default Home;
