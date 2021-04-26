import React from "react" 
import useProtectedPage from "../../hooks/UserProtectedPage"

const DetailsPostPage = () => {
  useProtectedPage()
  return (
    <div >
     <h1>DETALHES DO POST</h1>
    </div>
  )
}

export default DetailsPostPage
