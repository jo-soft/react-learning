import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import {useSelector} from "react-redux";

import {cartSelector} from "../../store/selectors";

const Cart = () => {

    const { visible, items } = useSelector(cartSelector)

    if (!visible) {
        return null;
    }

    return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
          {
              Object.entries(items).map( ([title, { quantity, total, price}]) => (
                  <CartItem
                      key={title}
                      title={title}
                      quantity={quantity}
                      total={total}
                      price={price}
                  />
              ))
          }
      </ul>
    </Card>
  );
};

export default Cart;
