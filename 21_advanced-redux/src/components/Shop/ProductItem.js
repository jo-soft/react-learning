import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartActions } from '../../store/cartSlice';
import {useDispatch} from "react-redux";
import PropTypes from "prop-types";

const ProductItem = ({ title, price, description }) => {

  const dispatch = useDispatch();

  const handleOnAddClick = () => {
    dispatch(cartActions.addToCart( { title, price } ));
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleOnAddClick}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

ProductItem.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
}

export default ProductItem;
