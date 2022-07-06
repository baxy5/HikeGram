import React, { Key } from 'react'

import styles from "../../styles/Feed.module.scss"

const FeedItem = ({ posts }) => {
    type Post = {
        _id: Key,
        data: string,
        date: Date
    }

    return (
        <div>
            {posts.map((post: Post) => {
                <div className={styles.FeedItem_container} key={post._id}>
                    <p>{post.data}</p>
                </div>
            })}
        </div>
    )
}

export default FeedItem