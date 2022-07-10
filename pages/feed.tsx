import React, { useEffect, useState } from 'react'

import Navbar from '../components/Navbar'
import Feed from '../components/Feed'

import styles from "../styles/Home.module.scss"

const feed = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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