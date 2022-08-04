import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.homeContainer}>
        <Header />
        <div className={styles.outletContainer}>
            <Outlet />
        </div>
    </div>
  )
}

export default Home