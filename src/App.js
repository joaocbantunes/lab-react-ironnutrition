import './App.css';
import { useState } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [searchFood, setSearchFood] = useState(foods);

  const addNewFood = (newFood) => {
    const updatedFoods = [...foodList, newFood];
    setFoodList(updatedFoods);
    setSearchFood(updatedFoods);
  };

  const searchFilter = (search) => {
    let filteredFood = foodList.filter((food) =>
      food.name.toLowerCase().includes(search.toLowerCase())
    );
    setSearchFood(filteredFood);
  };

  const deleteFood = (foodName) => {
    const filteredFood = foodList.filter((food) => {
      return food.name !== foodName;
    });
    setSearchFood(filteredFood);
    setFoodList(filteredFood);
  };

  return (
    <div className="App">
      <h1>Food List</h1>
      <Search searchFilter={searchFilter} />
      <AddFoodForm addNewFood={addNewFood} />

      {searchFood.map((food) => {
        return (
          <div>
            {/*   <FoodBox
                food={{
                  name: element.name,
                  calories: element.calories,
                  image: element.image,
                  servings: element.servings,
                }}
              /> */}

            <FoodBox food={food} clickToDelete={deleteFood} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
