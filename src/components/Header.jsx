import React from 'react'
//icons
import logo from '../assets/logo.svg'
import account from '../assets/Account.svg'
import shopping from '../assets/Shopping-cart.svg'
import search from '../assets/search.svg'
import burger from '../assets/burger.svg'

//styles
import styles from '../styles/Header.module.css'
import Navigation from './Navigation'

const Header = () => {
  return (
    <header>
        <div className='container'>
        <div className={styles.header__wrapper}>
      <a href='#' className={styles.logo}>
        <img src={logo} alt="logo" />
        <h2 className={styles.logo__title}>tanda</h2>
      </a>
      <div className={styles.header__search}>
      <img src={search} alt="search" className={styles.search__icon}/>
      <input type="search" name="" id="" placeholder='Искать на UNO' />
      </div>
      <div className={styles.group}>
      <img src={search} alt="search" className={styles.search__icon1}/>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <img src={account} alt="account" />
        <p>Войти</p>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <img src={shopping} alt="cart" />
        <p>Корзина</p>
      </a>
      <img src={burger} alt="burger menu" className={styles.burger1}/>
      </div>
      </div>
      <Navigation />
      </div>
    </header>
  )
}

export default Header
