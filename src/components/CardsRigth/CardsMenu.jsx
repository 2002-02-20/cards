import React, { useEffect, useState } from 'react';

export default function CardsMenu() {
  const [dataMenuCards, setDataMenuCards] = useState([]);

  async function getData() {
    const fetchData = await fetch(
      'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
    );

    const datajson = await fetchData.json();
    setDataMenuCards(datajson.meals);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="">
        <input type="text" />
        <input type="text" />
        <button type="button">Click</button>
        {dataMenuCards &&
          dataMenuCards.map((user) => (
            <div key={user.idMeal} className=' bg-gray-700 h-90 m-5 rounded-md p-3 max-h-60 overflow-y-auto'>
              <p>{user.strMeal}</p>
              <img src={user.strMealThumb} alt="" className='w-20'/>
            </div>
          ))}
      </div>
    </>
  );
}
