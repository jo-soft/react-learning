import classes from './meal-grid.module.css';
import MealItemDetails from "@/components/meals/grid/item/meal-item";

export default function MealGrid({ meals}) {
    return (
        <ul className={classes.meals}>
            {meals.map((meal) => (
                <li key={meal.id}>
                    <MealItemDetails {...meal} />
                </li>
            ))}
        </ul>
    )
}