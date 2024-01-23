import React, { useEffect, useState } from "react";
import CardsMenu from "./CardsMenu";

export default function Cards() {
  const [dataMenuCards, setDataMenuCards] = useState([]);

  async function getData() {
    const fetchData = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
    );

    const datajson = await fetchData.json();
    setDataMenuCards(datajson.meals);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="containerCards">
        <input type="text" />
        <input type="text" />
        <button type="button">Click</button>
        {dataMenuCards &&
          dataMenuCards.map((user) => (
            <CardsMenu 
            key={user.idMeal}
            imgCards={user.strMeal} 
            tituloA={user.strMealThumb} />
          ))}
      </div>
    </>
  );
}
