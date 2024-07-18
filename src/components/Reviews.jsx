import React from 'react'
import ReviewCard from './ReviewCard'
import styles from '../styles/Reviews.module.css'
import rScroll from '../assets/Right-scroll.svg'
import writeIcon from '../assets/write.svg'
import starIcon from '../assets/star-icon.svg'

const Reviews = () => {
  return (
    <div className='container'>
        <div className={styles.reviews}>
            <h1 className={styles.reviews__title}>Отзывы</h1>

        <div className={styles.reviews__rate}>
            <div className={styles.rate}>
                <p>4.9</p>
                <div>
                    <img src={starIcon} alt="1" />
                    <img src={starIcon} alt="2" />
                    <img src={starIcon} alt="3" />
                    <img src={starIcon} alt="4" />
                    <img src={starIcon} alt="5" />
                </div>
                <span>60 отзывов</span>
            </div>
            <div className={styles.reviews__write}>
                <img src={writeIcon} alt="" />
                <p>Написать отзыв</p>
            </div>
        </div>
            <div className={styles.reviews__list}>
            <ReviewCard comments='Отлично шьёт, покупкой довольна.'/>
            <ReviewCard comments='Машинка пришла целая в заводской упаковки. Стирает мелкие вещи, полоскание в ней не очень понравилось и отжим слабый. По сути отжим в ней это просто кружение в этом барабане для отдима.'/>
            <ReviewCard comments='Отлично шьёт, покупкой довольна.'/>
            <img src={rScroll} className={styles.reviews__scroll}/>
            </div>
            <button className={styles.reviews__btn}>Смотреть все отзывы</button>
        </div>
      
    </div>
  )
}

export default Reviews
