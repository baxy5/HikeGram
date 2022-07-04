import React from 'react'

import FeedContainer from './Feed/FeedContainer'

import styles from "../styles/Feed.module.scss"

const Feed = () => {
    return (
        <div className={styles.container}>
            <FeedContainer />
        </div>
    )
}

export default Feed