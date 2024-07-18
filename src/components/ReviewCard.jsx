import React from 'react'
import styles from '../styles/ReviewCard.module.css'
import starIcon from '../assets/star-icon.svg'
import starGray from '../assets/star-gray.svg'

const ReviewCard = ({comments}) => {
  return (
    <div className={styles.card}>
      <div className={styles.user}>
        <div className={styles.user__details}>
        <div className={styles.avatar}></div>
        <div>
            <p className={styles.userName}>Сайкал</p>
            <p className={styles.user__addDate}>17 мая 2023, 20:46</p>
        </div>
        <div>
            <img src={starIcon} alt='1' />
            <img src={starIcon} alt='2' />
            <img src={starIcon} alt='3' />
            <img src={starIcon} alt='4' />
            <img src={starGray} alt='5' />
        </div>
        </div>

      </div>
      <div className={styles.comments}>
        <p>{comments}</p>
      </div>
      <div className={styles.feedback}>
        <a href="#">Пожаловаться на отзыв</a>
      </div>
    </div>
  )
}

export default ReviewCard
