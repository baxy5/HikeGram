import React from 'react'

import styles from "../../styles/Feed.module.scss"

const FeedItem = ({ post }) => {
    return (
        <div className={styles.FeedItem_container}>
            <p>{post}</p>
        </div>
    )
}

export default FeedItem