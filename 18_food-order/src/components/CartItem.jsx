import {useState} from "react";

export  default function CartItem({item, onCountChange}) {


    const [count, setCount] = useState(item.count);

    const handleChange = (e) => {
        e.preventDefault()
        setCount(e.target.value)
    }

    const increaseCount = () => {
        onCountChange(item.id, item.count + 1);
        setCount(item.count + 1);
    }

    const decreaseCount = () => {
        onCountChange(item.id, item.count - 1);
        setCount(item.count - 1);
    }

    const onValueChange = (e) => {
        e.preventDefault();
        const value = parseInt(e.target.value);
        if(isFinite(value)) {
            onCountChange(item.id, value);
        }
        else {
            onCountChange(item.id, item.count);
            setCount(item.count);
        }
    }

    return (
        <li className="cart-item">
            <p>{item.name}</p>
            <div className="cart-item-actions">
                <button onClick={decreaseCount}>
                    -
                </button>
                <div className="control">
                    <input
                        type="number"
                        value={count}
                        onChange={handleChange}
                        onBlur={onValueChange}
                    />
                </div>
                <button onClick={increaseCount}> + </button>
            </div>
        </li>
    )
}