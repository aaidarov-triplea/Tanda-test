import React from 'react';
import styles from'../styles/RelatedProducts.module.css';

const products = [
  {
    id: 1,
    image: 'https://uno.kg/_next/image?url=https%3A%2F%2Fapi.uno.kg%2Fmedia%2Fbarcode%2Fa2134d44-0534-4e80-9234-ad648879846e.jpg&w=256&q=75',
    name: 'Euroclimat inverter',
    product: 'Фильтр для воды',
    rating: 5,
    review: '0 отзывов',
    price: '59 500',
  },
  {
    id: 2,
    image: 'https://uno.kg/_next/image?url=https%3A%2F%2Fapi.uno.kg%2Fmedia%2Fbarcode%2Fa2134d44-0534-4e80-9234-ad648879846e.jpg&w=256&q=75',
    name: 'Euroclimat inverter',
    product: 'Фильтр для воды',
    rating: 5,
    review: '0 отзывов',
    price: '59 500',
  },
  {
    id: 3,
    image: 'https://uno.kg/_next/image?url=https%3A%2F%2Fapi.uno.kg%2Fmedia%2Fbarcode%2Fa2134d44-0534-4e80-9234-ad648879846e.jpg&w=256&q=75',
    name: 'Euroclimat inverter',
    product: 'Фильтр для воды',
    rating: 5,
    review: '0 отзывов',
    price: '59 500',
  },
  {
    id: 4,
    image: 'https://uno.kg/_next/image?url=https%3A%2F%2Fapi.uno.kg%2Fmedia%2Fbarcode%2Fa2134d44-0534-4e80-9234-ad648879846e.jpg&w=256&q=75',
    name: 'Euroclimat inverter',
    product: 'Фильтр для воды',
    rating: 5,
    review: '0 отзывов',
    price: '59 500',
  },
  {
    id: 5,
    image: 'https://uno.kg/_next/image?url=https%3A%2F%2Fapi.uno.kg%2Fmedia%2Fbarcode%2Fa2134d44-0534-4e80-9234-ad648879846e.jpg&w=256&q=75',
    name: 'Euroclimat inverter',
    product: 'Фильтр для воды',
    rating: 5,
    review: '0 отзывов',
    price: '59 500',
  },
  {
    id: 6,
    image: 'https://uno.kg/_next/image?url=https%3A%2F%2Fapi.uno.kg%2Fmedia%2Fbarcode%2Fa2134d44-0534-4e80-9234-ad648879846e.jpg&w=256&q=75',
    name: 'Euroclimat inverter',
    product: 'Фильтр для воды',
    rating: 5,
    review: '0 отзывов',
    price: '59 500',
  },
  {
    id: 7,
    image: 'https://uno.kg/_next/image?url=https%3A%2F%2Fapi.uno.kg%2Fmedia%2Fbarcode%2Fa2134d44-0534-4e80-9234-ad648879846e.jpg&w=256&q=75',
    name: 'Euroclimat inverter',
    product: 'Фильтр для воды',
    rating: 5,
    review: '0 отзывов',
    price: '59 500',
  },
  {
    id: 8,
    image: 'https://uno.kg/_next/image?url=https%3A%2F%2Fapi.uno.kg%2Fmedia%2Fbarcode%2Fa2134d44-0534-4e80-9234-ad648879846e.jpg&w=256&q=75',
    name: 'Euroclimat inverter',
    product: 'Фильтр для воды',
    rating: 5,
    review: '0 отзывов',
    price: '59 500',
  },
];

const RelatedProducts = () => {
  return (
    <div className='container'>
      <h2 className={styles.product__title}>Похожие товары</h2>
    <div className={styles.related__products}>
      {products.map((product) => (
        <div key={product.id} className={styles.product__card}>
            <div className={styles.product__imageBox}>
                <img src={product.image} alt={product.name} className={styles.product__image} />
            </div>
          <div className={styles.product__info}>
            <h3>{product.name}</h3>
            <p>{product.product}</p>
            <div className={styles.rating}>
              {'★'.repeat(product.rating)}
              {'☆'.repeat(5 - product.rating)}
              <span>{product.review}</span>
            </div>
            <h2 className={styles.product__price}>{product.price} сом</h2>
            <button className={styles.buy__nowButton}>Купить сейчас</button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default RelatedProducts;
