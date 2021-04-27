import React, { useEffect } from "react";
import { useHistory } from "react-router";
import Header from "../../components/Header/Header";
import PostCard from "../../components/postCard/PostCard";
import { BASE_URL } from "../../constants/urls";
import useRequestData from "../../hooks/useRequestData";
import useProtectedPage from "../../hooks/UserProtectedPage";
import { goToFeedPage } from "../../routes/coordinator";
import AddPostPage from "../PostPage/PostPage";
import { ContainerPageFeed, PostsContainer } from "./styled";

const FeedPage = () => {
  useProtectedPage();
  const posts = useRequestData([], `${BASE_URL}/posts`);
  console.log(posts);
  const history = useHistory();

  useEffect(() => {
    goToFeedPage(history)
    console.log("repetiu")
  },[posts])
  
    
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
      <AddPostPage/>
      <PostsContainer>{postsCard}</PostsContainer>
    </ContainerPageFeed>
  );
};

export default FeedPage;
