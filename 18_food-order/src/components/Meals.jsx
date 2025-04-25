import useMeals from "../hooks/useMealsHook.js";
import Meal from "./Meal.jsx";

export  default  function Meals () {

    const {meals, isLoading, error} = useMeals();

    const errorEl =
        <div className="error">
            <h2> Something went wrong</h2>
            <p> please retry...</p>
        </div>

    return (
        <main>
            {isLoading ? <p>Loading...</p> : (
                error ? {errorEl} :
                    <ul id="meals">
                        {meals.map((meal) => (
                            <Meal
                                key={meal.id} meal={meal}
                            />)
                        )}
                    </ul>
                )
            }

        </main>
    )
}