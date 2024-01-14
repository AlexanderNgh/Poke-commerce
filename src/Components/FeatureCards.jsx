import Card from "./Card.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

function FeaturedCards(props) {
  const [featuredData, setFeatData] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    const endpointURLS = [
      "https://pokeapi.co/api/v2/item/29/",
      "https://pokeapi.co/api/v2/item/53/",
      "https://pokeapi.co/api/v2/item/23/",
      "https://pokeapi.co/api/v2/item/109/",
    ];

    //new array from mapping the endpointsURL array
    //creates a new array of the results of each enpoint being based to axios.get
    //then spread the data, console.log and set the data to the state
    axios.all(endpointURLS.map((endpoint) => axios.get(endpoint))).then(
      axios.spread((...data) => {
        console.log(data[0].data.name);
        setFeatData(data);
        console.log(featuredData);
      })
    );
  }, []);

  return (
    <>
      {featuredData.length === 0 ? (
        <p>ERROR</p>
      ) : (
        <div className="FeatureItemContainer">
          {featuredData.map((data, index) => (
            <Card
              key={index}
              item={data.data.name}
              image={data.data.sprites.default}
              cost={data.data.cost}
              addToCart={props.addToCart}
            ></Card>
          ))}
        </div>
      )}
    </>
  );
}

export default FeaturedCards;
