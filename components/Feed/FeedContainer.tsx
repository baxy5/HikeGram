import React, { useEffect, useState } from 'react'
import router from "next/router"

import FeedItem from './FeedItem'

import styles from "../../styles/Feed.module.scss"

const FeedContainer = () => {
    const [post, setPost] = useState("")
    const [posts, setPosts] = useState([])

    const storePost = async (e) => {
        e.preventDefault()

        const response = await fetch("/api/store", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
        })

        if (response.ok) {
            router.reload()
        }
    }

    const getPost = async () => {

        const response = await fetch("/api/get", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })

        if (response.ok) {
            const posts = await response.json()
            /* setPosts(posts) */
            setTimeout(() => {
                setPosts(posts)
                console.log(posts)
            }, 2000)
        }
    }

    useEffect(() => {
        getPost()
    }, [])

    return (
        <div className={styles.FeedContainer}>
            <div>
                <div>
                    <form onSubmit={storePost}>
                        <input type="text" name="post" onChange={(e) => setPost(e.target.value)} />
                        <button type='submit'>Post</button>
                    </form>
                </div>
                <FeedItem posts={posts} />
            </div>
        </div >
    )
}

export default FeedContainer