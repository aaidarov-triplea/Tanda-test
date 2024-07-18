import React from 'react'

//styles
import styles from '../styles/Navigation.module.css'
//icons
import burger from '../assets/burger.svg'

const Navigation = () => {
  return (
    <div className={styles.nav__allCategory}>
      <img src={burger} alt="burger menu" className={styles.burger}/>
      <ul className={styles.nav}>
        <li></li>
        <li><a href="">Все категории</a></li>
        <li><a href="">Стать продавцом</a></li>
        <li><a href="">О нас</a></li>
        <li><a href="">Курьерам</a></li>
        <li><a href="">Контакты</a></li>
        <li><a href="">Доставка</a></li>
      </ul>
      </div>
  )
}

export default Navigation
