import { ColorLensRounded } from "@material-ui/icons";
import React from "react";
import Header from "../../components/Header/Header";
import PostCard from "../../components/postCard/PostCard";
import { BASE_URL } from "../../constants/urls";
import useRequestData from "../../hooks/useRequestData";
import useProtectedPage from "../../hooks/UserProtectedPage";
import { ContainerPageFeed, PostsContainer } from "./styled";

const FeedPage = () => {
  useProtectedPage();
  const posts = useRequestData([], `${BASE_URL}/posts`);
  console.log(posts);

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
    return(
      <>
      {letter.substr(0, 1)}
      </>
    )
    
  }
  

  const postsCard = posts.map((post) => {
    return (
      <PostCard
        key={post.id}
        title={post.title}
        text={post.text}
        date={timeStampOnPost(post.createdAt)}
        username={post.username}
        firsletter={userFirstLetter(post.username)}
      />
    );
  });

  return (
    <ContainerPageFeed>
      <Header />
      <PostsContainer>{postsCard}</PostsContainer>
    </ContainerPageFeed>
  );
};

export default FeedPage;
