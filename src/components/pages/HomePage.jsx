import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import ProductsList from "../Products/ProductsList";
import Information from "../Information/Information";

function HomePage() {
  return (
    <>
      <Banner />
      <Categories />
      <ProductsList />
      <Information />
    </>
  );
}

export default HomePage;
