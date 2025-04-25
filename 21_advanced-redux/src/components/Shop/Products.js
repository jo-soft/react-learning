import ProductItem from './ProductItem';
import classes from './Products.module.css';

import products from '../../data/products.json'

const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
          { products.map((product) => (
              <ProductItem
                  key={product.id}
                  title={product.title}
                  price={product.price}
                  description={product.description}
              />
          ))}

      </ul>
    </section>
  );
};

export default Products;
