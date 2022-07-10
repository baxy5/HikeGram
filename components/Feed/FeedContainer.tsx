import React, { useEffect, useState } from 'react'
import router from "next/router"
import { ClipLoader } from 'react-spinners'

import FeedItem from './FeedItem'

import styles from "../../styles/Feed.module.scss"

const FeedContainer = () => {
    const [post, setPost] = useState("")
    const [posts, setPosts] = useState([])
    const [isStateLoaded, setIsStateLoaded] = useState<boolean>(false)

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

    const getPost = () => {
        fetch("/api/get")
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                setPosts(res)
            })
    }

    useEffect(() => {
        getPost()
        setTimeout(() => {
            setIsStateLoaded(true)
        }, 1500)
    }, [])

    return (
        <div className={styles.FeedContainer}>
            <div>
                <div>
                    <form onSubmit={storePost}>
                        <input type="text" name="post" onChange={(e) => setPost(e.target.value)} />
                        <br />
                        <button type='submit'>Post</button>
                    </form>
                </div>

                {!isStateLoaded ? <ClipLoader /> : posts.map((item) => {
                    return <FeedItem key={item._id} post={item.data} date={item.createdAt} />
                })}

            </div>
        </div >
    )
}

export default FeedContainer