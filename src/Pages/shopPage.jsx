import Header from "../Components/Header.jsx";
import Cards from "../Components/Cards.jsx";
import Footer from "../Components/Footer.jsx";
import SearchBar from "../Components/SearchBar.jsx";
import { useEffect, useState } from "react";

function ShopPage(props) {
  const [searchValue, setSearchValue] = useState("");

  const HandleSearchValue = (event) => {
    setSearchValue(event.target.value);
    console.log(searchValue);
  };
  return (
    <>
      <Header></Header>

      <SearchBar
        searchValue={searchValue}
        HandleSearchValue={HandleSearchValue}
      ></SearchBar>

      <div className="shopPageCards">
        <Cards searchValue={searchValue} addToCart={props.addToCart}></Cards>
      </div>

      <Footer></Footer>
    </>
  );
}

export default ShopPage;
