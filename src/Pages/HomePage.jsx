import Header from "../Components/Header.jsx";
import FeaturedCards from "../Components/FeatureCards.jsx";
import Footer from "../Components/Footer.jsx";
import { Link } from "react-router-dom";

function HomePage(props) {
  const introduction = `My name is Alexander Pham!\n
    I am a computer science student at the University of Nevada Las Vegas.\n
    I am currently in my third year and I am enjoying exploring different parts of computer science, in particular, front-end development with react!`;
    
  const text1 = `Welcome to Pokemon Online Marketplace project!\n
    I decided to do this project to work on my React.js skills while incorporating one of my favorite games.\n 
    In order to make this website, I focused on trying to create reusable components and reinforce fundamental concepts. \n
    I also used a free RESTful API, the pokeAPI, which allowed me to access all of these items, their images, and in-game costs. \n
    I also wanted to allow users to add items to the cart as well as search for items because there are so many!\n
    I hope you enjoy!
  `;
  return (
    <>
      <Header></Header>
      <div className="HomePageCards">
        <h1>FEATURED ITEMS</h1>

        <FeaturedCards addToCart={props.addToCart}></FeaturedCards>

        <h3>FREE RETURNS</h3>

        <p>at any participating pokemon center!</p>

        <p>
          participating merchandise only, please note that any permanant buff
          items are not applicable for refunds
        </p>

        <p>
          items include, but are not limited to: rare candies, protein, pp-up,
          and calcium
        </p>

        <Link to="/shop">
          <button className="mainBtn">Shop Now</button>
        </Link>
      </div>

      <div className="HomePageDiv">
        <div className="mainText">
            <p>{introduction}</p>
            <p>{text1}</p>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default HomePage;
