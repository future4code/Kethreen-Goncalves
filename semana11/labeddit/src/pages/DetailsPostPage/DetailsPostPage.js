import React from "react";
import { useParams } from "react-router";
import Header from "../../components/Header/Header";
import DetailsCard from "../../components/Cards/DetailsCard";
import { BASE_URL } from "../../constants/urls";
import { useRequestDataId } from "../../hooks/useRequestData";
import useProtectedPage from "../../hooks/UserProtectedPage";
import { PostDetailsContainer } from "./styled";
import Loading from "../../components/Loading/loading";
import { voteRequest } from "../../services/vote";

const DetailsPostPage = () => {
  useProtectedPage();
  const params = useParams();
  const postsDetails = useRequestDataId([], `${BASE_URL}/posts/${params.id}`);

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
  const upvotePost = (post) => {
    if (post.userVoteDirection > 0) {
      unvotePost(post);
    } else {
      const body = {
        direction: 1,
      };
     voteRequest(body, post.id);
    }
  };

  const downvotePost = (post) => {
    if (post.userVoteDirection < 0) {
      unvotePost(post);
    } else {
      const body = {
        direction: -1,
      };
      voteRequest(body, post.id);
    }
  };
  const unvotePost = (post) => {
    const body = {
      direction: 0,
    };
    voteRequest(body, post.id);
  };
  const userFirstLetter = (letter) => {
    const letterUser = letter.substr(0, 1);
    return <>{letterUser.toUpperCase()}</>;
  };

  console.log("detalhesss",postsDetails);

  return (
    <div>
      <Header />
      <PostDetailsContainer>
        {postsDetails.username ? 
          <DetailsCard
            postId={postsDetails.id}
            title={postsDetails.title}
            text={postsDetails.text}
            date={timeStampOnPost(postsDetails.createdAt)}
            username={postsDetails.username}
            firsletter={userFirstLetter(postsDetails.username)}
            comments={postsDetails.comments}
            commentsCount={postsDetails.commentsCount}
            votesCount={postsDetails.votesCount}
            userVoteDirection={postsDetails.userVoteDirection}
            onClickUpvote={() => upvotePost(postsDetails)}
            onClickDownvote={() => downvotePost(postsDetails)}

          />
        : 
          <Loading/>
        }
      </PostDetailsContainer>
    </div>
  );
};

export default DetailsPostPage;
