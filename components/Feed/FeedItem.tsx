import React, { Key } from 'react'

import styles from "../../styles/Feed.module.scss"

const FeedItem = ({ post, date }: { post: string, date: string }) => {

    return (
        <div className={styles.FeedItem_container}>
            <h1>{post}</h1>
            <p>{date}</p>
        </div>
    )
}

export default FeedItem