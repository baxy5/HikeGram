import React from 'react'

import Navbar from '../components/Navbar'
import Feed from '../components/Feed'

import styles from "../styles/Home.module.scss"

const feed = ({ isMenuOpen, setIsMenuOpen }) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Navbar isOpen={isMenuOpen} setMenu={setIsMenuOpen} />
                <Feed />
            </div>
        </div>
    )
}

export default feed