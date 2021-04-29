import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Header from "../../components/Header/Header";
import PostCard from "../../components/Cards/PostCard";
import { BASE_URL } from "../../constants/urls";
import { useRequestData } from "../../hooks/useRequestData";
import useProtectedPage from "../../hooks/UserProtectedPage";
import { goToDetailsPost, goToFeedPage } from "../../routes/coordinator";
import AddPostPage from "../PostPage/PostPage";
import { ContainerPageFeed, PostsContainer } from "./styled";
import Loading from "../../components/Loading/loading";
import { voteRequest } from "../../services/vote";
import useInput from "../../hooks/useInput";
import { TextField } from "@material-ui/core";
import BasicPagination from "../../components/Pagination";



const FeedPage = () => {
 useProtectedPage();
  const posts = useRequestData([], `${BASE_URL}/posts`);
  const [search, setSearch] = useInput("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(400);
  const history = useHistory();

  useEffect(() => {
    goToFeedPage(history);
  }, [posts, history, posts.votesCount]);

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


  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const sortPosts = posts.sort((a, b) => {
    return b.createdAt - a.createdAt;
  });


  const filteredPosts = sortPosts.filter((post) => {
    const titlePost = post.title.toLowerCase();
    const textPost = post.text.toLowerCase();
    const userPost = post.username.toLowerCase();
    if (
      titlePost.includes(search.toLowerCase()) ||
      textPost.includes(search.toLowerCase()) ||
      userPost.includes(search.toLowerCase())
    ) {
      return true;
    } else {
      return false;
    }
  });
  

  
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

  const onClickCard = (id) => {
    goToDetailsPost(history, id);
  };

  const handleChange = ( value) => {
    setCurrentPage(value);
  };

  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const postsCards = currentPosts.map((post) => {
    var date = new Date(post.createdAt);
    return (
      <PostCard
        key={post.id}
        title={post.title}
        text={post.text}
        date={timeStampOnPost(post.createdAt)}
        username={post.username}
        firsletter={userFirstLetter(post.username)}
        votesCount={post.votesCount}
        commentsCount={post.commentsCount}
        onClick={() => onClickCard(post.id)}
        userVoteDirection={post.userVoteDirection}
        onClickUpvote={() => upvotePost(post)}
        onClickDownvote={() => downvotePost(post)}
      />
    );
  });

  return (
    <ContainerPageFeed>
      <Header />
     
        <TextField
          name={"search"}
          value={search}
          onChange={setSearch}
          variant={"outlined"}
          label={"Search by title, text or username"}
          fullWidth
          autoFocus
          margin={"normal"}
        />

      <AddPostPage />
      {postsCards.length > 0 ? 
      <PostsContainer>{postsCards}</PostsContainer> : <Loading/>}
         <BasicPagination 
         postsPerPage={postsPerPage}
         onClickHandlePage={handleChange}
         currentPage={currentPage}
         totalPosts={filteredPosts.length} />
    </ContainerPageFeed>
  );
};

export default FeedPage;
