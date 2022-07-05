import React from 'react'

import styles from "../../styles/Feed.module.scss"

const FeedItem = ({ posts }) => {
    return (
        {
            posts.map((post) => {
                <div className={styles.FeedItem_container} key={post._id}>
                    <p>{post}</p>
                </div>
            })
        }
    )
}

export default FeedItem