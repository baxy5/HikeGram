import React, { useEffect, useState } from 'react'

import Navbar from '../components/Navbar'
import Feed from '../components/Feed'

import styles from "../styles/Home.module.scss"

const feed = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [posts, setPosts] = useState([])


    const getPost = async () => {

        const response = await fetch("/api/get", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })

        const postData = await response.json()

        setPosts(postData)
        console.log(posts)
        console.log(postData)
    }

    useEffect(() => {
        getPost()
    }, [])

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