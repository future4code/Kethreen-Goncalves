import React from "react"
import useProtectedPage from "../../hooks/UserProtectedPage"

const FeedPage = () => {
useProtectedPage()

    return(
        <div>
            <h1>FeedPage</h1>
        </div>
    )
}

export default FeedPage