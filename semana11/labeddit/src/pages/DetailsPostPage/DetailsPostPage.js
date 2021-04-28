import React, { useEffect } from "react" 
import { useParams } from "react-router"
import Header from "../../components/Header/Header"
import DetailsCard from "../../components/Cards/DetailsCard"
import { BASE_URL } from "../../constants/urls"
import { useRequestDataId } from "../../hooks/useRequestData"
import useProtectedPage from "../../hooks/UserProtectedPage"
import { PostDetailsContainer } from "./styled"

const DetailsPostPage = () => {
  useProtectedPage()
  const params = useParams()
  const postsDetails = useRequestDataId([], `${BASE_URL}/posts/${params.id}`)
    

  const timeStampOnPost = (time) => {
    var date = new Date(time);
    return (
      <>
        {"Postado em: " +
          date.getDate() +
          "/" +
          (date.getMonth() + 1) +
          "/" +
          date.getFullYear() +
          " às " +
          date.getHours() +
          ":" +
          date.getMinutes()}
      </>
    );
  };

  const userFirstLetter = (letter) => {
    const letterUser = letter.substr(0, 1);
    return <>{letterUser.toUpperCase()}</>;
  };

console.log(postsDetails)

  return (
    <div >
      <Header/>
      <PostDetailsContainer>
      {postsDetails.id ? 
      <DetailsCard
      title={postsDetails.title}
      text={postsDetails.text}
      date={timeStampOnPost(postsDetails.createdAt)}
      username={postsDetails.username}
      firsletter={userFirstLetter(postsDetails.username)}
      comments={postsDetails.comments}
      votes={postsDetails.votesCount}
      votesDirection={postsDetails.userVoteDirection}
     
      />: <></>
      }
      </PostDetailsContainer>
      
    </div>
  )
}

export default DetailsPostPage
