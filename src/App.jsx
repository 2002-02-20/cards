import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Left from "./components/Left";
import Right from "./components/Right";

function App() {
  const [dataMenu, setDataMenu] = useState([]);

  const [filterData, setFilterData] = useState([]);

  const [value, setValue] = useState("");

 
  useEffect(() => {
    async function fetchData() {
      const result = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const datajson = await result.json();
      setDataMenu(datajson.categories);
    }

    fetchData();

    const search = dataMenu.filter((meal) =>
      meal.strCategory.toLowerCase().includes(value.toLowerCase())
    );
    setFilterData(search);
  }, [value]);

  return (
    <>
      <div className="w-screen h-screen flex ">
        <div className="w-80 h-full bg-gray-900">
          <input
            type="text"
            className="w-72 h-8 rounded-md m-5 "
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <ul className="bg-gray-700 h-90 m-5 rounded-md p-3 max-h-60 overflow-y-auto">
            {filterData &&
              filterData.map((user) => (
                <Left
                  key={user.idCategory}
                  nombre={user.strCategory}
                  img={user.strCategoryThumb}
                />
              ))}
          </ul>
        </div>

        <Right />
      </div>
    </>
  );
}

export default App;
