import React from "react";
import Header from "../../components/Header/Header";
import PostCard from "../../components/postCard/PostCard";
import useProtectedPage from "../../hooks/UserProtectedPage";

const FeedPage = () => {
  useProtectedPage();

  return (
    <div>
      <Header />
      <>
        <PostCard 
        title={"Kethreen"}
        text={ "loren Add without stirring, until most of the liquid is absorbed, 15 without stirring, until most of the liquid is absorbed, 15  without stirring, until most of the liquid is absorbed, 15 rice and stir very gently to distribu without stirri without stirring, until most of the liquid is absorbed, 15 ng, unwithout stirring, until most of the liquid is absorbed, 15til most of the liquid is absorbed, 15 to 18 minutes. Reduce heat"}
        />
      

      </>
    </div>
  );
};

export default FeedPage;
