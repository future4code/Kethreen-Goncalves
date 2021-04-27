import React from "react" 
import CommentCard from "../../components/postCard/CommentsCard"
import useProtectedPage from "../../hooks/UserProtectedPage"

const DetailsPostPage = () => {
  useProtectedPage()
  return (
    <div >
      <CommentCard/>
     <h1>DETALHES DO POST</h1>
    </div>
  )
}

export default DetailsPostPage
