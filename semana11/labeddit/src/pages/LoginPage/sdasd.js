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

  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const postsCards = currentPosts.map((post) => {
    var date = new Date(post.createdAt);
    return (
      <PostCard
        key={post.id}
        title={post.title}
        votesCount={post.votesCount}
        username={post.username}
        createdAt={date.toLocaleDateString()}
        commentsCount={post.commentsCount}
        onClickCard={() => onClickCard(post.id)}
        userVoteDirection={post.userVoteDirection}
        onClickUpvote={() => upvotePost(post)}
        onClickDownvote={() => downvotePost(post)}
      />
    );
  });

  return (
    <ScreenContainer>
      <InputDiv>
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
      </InputDiv>

      {loading ? <Loader /> : <PostsContainer>{postsCards}</PostsContainer>}

      <Pagination totalPosts={filteredPosts.length} />
      <AlertModified />
      <AddPostButton
        color={"primary"}
        onClick={() => goToCreatePostPage(history)}
      >
        <Add />
      </AddPostButton>
    </ScreenContainer>
  );
};

export default FeedPage;
