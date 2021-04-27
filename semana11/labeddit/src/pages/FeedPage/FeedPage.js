import { ColorLensRounded } from "@material-ui/icons";
import React from "react";
import Header from "../../components/Header/Header";
import PostCard from "../../components/postCard/PostCard";
import { BASE_URL } from "../../constants/urls";
import useRequestData from "../../hooks/useRequestData";
import useProtectedPage from "../../hooks/UserProtectedPage";

const FeedPage = () => {
  useProtectedPage();
  const posts = useRequestData([], `${BASE_URL}/posts`)
  console.log(posts)


  const postsCard = posts.map((post) => {
      return  <PostCard 
      title={post.title}
      text={post.text}
      date={post.createdAt}
      username={post.username}
      />
  })

  return (
    <div>
      <Header />
      <>
    
      {postsCard}

      </>
    </div>
  );
};

export default FeedPage;
