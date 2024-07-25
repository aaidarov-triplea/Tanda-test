import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_DETAILS } from "../apollo/airСonditionerDetails";

import styles from "../styles/AirСonditioner.module.css";
import brand from "../assets/brand.svg";
import scrollImg from "../assets/scroll-img.svg";

const images = [
  "https://tabda.kg/_next/image?url=https%3A%2F%2Fapi.uno.kg%2Fmedia%2Fbarcode%2Fa2134d44-0534-4e80-9234-ad648879846e.jpg&w=256&q=75",
  "https://tabda.kg/_next/image?url=https%3A%2F%2Fapi.uno.kg%2Fmedia%2Fbarcode%2Fa2134d44-0534-4e80-9234-ad648879846e.jpg&w=256&q=75",
  "https://tabda.kg/_next/image?url=https%3A%2F%2Fapi.uno.kg%2Fmedia%2Fbarcode%2Fa2134d44-0534-4e80-9234-ad648879846e.jpg&w=256&q=75",
  "https://tabda.kg/_next/image?url=https%3A%2F%2Fapi.uno.kg%2Fmedia%2Fbarcode%2Fa2134d44-0534-4e80-9234-ad648879846e.jpg&w=256&q=75",
];

const AirСonditionerDetails = () => {
  const { loading, error, data } = useQuery(GET_DETAILS);

  const [selectedImage, setSelectedImage] = useState(images[0]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  console.log(data.barcode);
  const { id, category, sizes, title, description, sellingPrice } =
    data.barcode;

  return (
    <div className="container">
      <div className={styles.wrapper}>
        <nav className={styles.nav}>
          <a href="/"> Главная /</a>
          <a href="/product"> Бытовая техника /</a>
          <span> Стиральные машины</span>
        </nav>
        <div className={styles.details__group}>
          <div className={styles.image__viewer}>
            <div className={styles.image__list}>
              {images.map((image, index) => (
                <div className={styles.image__box} key={index}>
                  <img
                    src={image}
                    alt={`Euroclimat-${index}`}
                    className={styles.image}
                    onClick={() => setSelectedImage(image)}
                  />
                </div>
              ))}
              <img src={scrollImg} alt="scroll" className={styles.scrollImg} />
            </div>
            <div className={styles.large__imageContainer}>
              <img
                src={selectedImage}
                alt="selected"
                className={styles.large__image}
              />
            </div>
          </div>
          <div className={styles.info}>
            <h1 className={styles.title}>{title}</h1>
            <a href="#" className={styles.mallName}>
              <img src={brand} />
              Название магазина
            </a>
            <p className={styles.brand}>Бренд</p>
            <div className={styles.reviews}>
              <div className={styles.stars}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.1037 3.81663C11.4705 3.07346 12.5302 3.07346 12.8971 3.81663L14.8579 7.78909C15.0035 8.08394 15.2846 8.2884 15.61 8.33595L19.9966 8.97712C20.8165 9.09696 21.1433 10.1048 20.5497 10.683L17.3772 13.773C17.1413 14.0027 17.0336 14.3339 17.0893 14.6584L17.8378 19.0226C17.9779 19.8396 17.1204 20.4626 16.3867 20.0767L12.4658 18.0148C12.1744 17.8615 11.8263 17.8615 11.5349 18.0148L7.614 20.0767C6.88037 20.4625 6.02282 19.8396 6.16294 19.0226L6.91145 14.6584C6.96711 14.3339 6.85945 14.0027 6.62358 13.773L3.45105 10.683C2.85745 10.1048 3.18424 9.09696 4.00415 8.97712L8.39073 8.33595C8.71609 8.2884 8.99727 8.08394 9.14281 7.78909L11.1037 3.81663Z"
                    fill="#FDC102"
                  />
                </svg>
                <p>4.9</p>
              </div>
              <span>60 Отзывов</span>
            </div>
            <div>
              <h4 className={styles.desc__title}>Описание</h4>
              <p className={styles.desc}>{description}</p>
            </div>
            <a href="#" className={styles.characteristic}>
              Смотреть характеристики
            </a>
          </div>
          <div className={styles.cart}>
            <p>
              {sellingPrice} сом <span>59 500 сом</span>
            </p>
            <div className={styles.cart__btns}>
              <button className={styles.btns__buyNow}>Купить сейчас</button>
              <button className={styles.btns__credit}>Оформить в кредит</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirСonditionerDetails;
