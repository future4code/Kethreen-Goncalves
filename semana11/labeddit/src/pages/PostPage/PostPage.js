import React from "react"
import useProtectedPage from "../../hooks/UserProtectedPage"

const AddPostPage = () => {
useProtectedPage()

    return(
        <div>
            <h1>Post page</h1>
        </div>
    )
}

export default AddPostPage