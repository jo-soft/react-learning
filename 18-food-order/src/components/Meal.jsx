import {useContext} from "react";
import {CARD_CTX} from "../context/CardCtxProvider.jsx";

export  default function Meal( {meal} ) {
    const { items,  addItem } = useContext(CARD_CTX);

    const imageUrl = `http://localhost:3000/${meal.image}`

    const mealAmount = items.get(meal.id)?.count ?? 0;

    const onMealClick = (e) => {
        e.preventDefault();
        addItem(meal);
    }

    return (
        <li className="meal-item">
            <article>
                { mealAmount > 0 && <div className="badge"> { mealAmount }</div> }
                <img src={imageUrl} alt="Meal" />
                <h3>{meal.title}</h3>
                <p className="meal-item-description">{meal.description}</p>
                <p className="meal-item-price">${meal.price}</p>
                <div className="meal-item-actions">
                    <button onClick={onMealClick}>Add</button>
                </div>
            </article>
        </li>
    )
}