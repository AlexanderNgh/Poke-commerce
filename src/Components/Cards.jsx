import Card from "./Card.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

import errorImg from "../assets/error.jpeg"

function Cards(props) {
  const [pokeData, setData] = useState([]);

  useEffect(() => {
    const baseURL = "https://pokeapi.co/api/v2/item/";
    const endpointAmounts = 50;
    const endpointURLS = [];
    for (let i = 1; i <= endpointAmounts; i++) {
      endpointURLS.push(`${baseURL}${i}/`);
    }
    console.log(endpointURLS);

    //new array from mapping the endpointsURL array
    //creates a new array of the results of each enpoint being based to axios.get
    //then spread the data, console.log and set the data to the state
    axios.all(endpointURLS.map((endpoint) => axios.get(endpoint))).then(
      axios.spread((...data) => {
        console.log(data[0].data);
        setData(data);
        console.log(pokeData);
      })
    );
  }, []);

  let filteredPokeData = pokeData;
  if (props.searchValue.length > 0) {
    filteredPokeData = filteredPokeData.filter((data) =>
      String(data.data.name).includes(props.searchValue)
    );
  }

  //  Debug
  //    console.log(props.searchValue)
  //    console.log(filteredPokeData)

  return (
    <>
      {filteredPokeData.length === 0 ? (
        <div className="mainItemContainer">
            <Card
                image={errorImg}
                item="ERROR"
            ></Card>
        </div>
      ) : (
        <div className="mainItemContainer">
          {filteredPokeData.map((data, index) => (
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

Cards.defaultProps = {
    searchValue: ""
}

export default Cards;
