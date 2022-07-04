import React from 'react'

import FeedItem from './FeedItem'

import styles from "../../styles/Feed.module.scss"

const FeedContainer = () => {
    return (
        <div>
            <div>
                <input type="text" />
                <input type="file" />
                <button>Post</button>
            </div>
            <FeedItem />
        </div>
    )
}

export default FeedContainer