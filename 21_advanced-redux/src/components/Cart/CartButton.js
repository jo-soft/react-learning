import classes from './CartButton.module.css';
import {useDispatch, useSelector} from "react-redux";
import {cartActions} from '../../store/cartSlice';
import {cartCountSelector} from "../../store/selectors";

const CartButton = () => {

  const dispatch = useDispatch();

  const cardCount = useSelector(cartCountSelector);

  const handleButtonClick = () => {
      dispatch(cartActions.toggle());
  }

  return (
    <button onClick={handleButtonClick} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}> { cardCount }</span>
    </button>
  );
};

export default CartButton;
