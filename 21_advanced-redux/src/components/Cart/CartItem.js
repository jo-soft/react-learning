import classes from './CartItem.module.css';
import {useDispatch} from "react-redux";
import { cartActions } from "../../store/cartSlice";
import PropTypes from "prop-types";

const CartItem = ({ title, quantity, total, price } ) => {

    const dispatch = useDispatch();


    const handleRemove = () => {
        dispatch(cartActions.removeFromCart(title));
    }

    const handleAdd = () => {
        dispatch(cartActions.addToCart({title, price}));
    }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleRemove}>-</button>
          <button onClick={handleAdd}>+</button>
        </div>
      </div>
    </li>
  );
};

CartItem.propTypes = {
    title: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
}

export default CartItem;
