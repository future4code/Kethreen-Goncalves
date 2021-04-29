import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { blueGrey } from "@material-ui/core/colors";
import { StyledCardComments, TextCardComments, IconVotesCounter } from "../Cards/styled";
import IconButton from "@material-ui/core/IconButton";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { voteCommentRequest } from "../../services/vote";

const useStyles = makeStyles((theme) => ({
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: blueGrey[500],
  },
}));

const CommentCard = (props) => {
  const classes = useStyles();
  const commentsPost = props.comments;
  
  const postId = props.postId
  

  useEffect(() => {

  }, [commentsPost]);


  const timeStampOnPost = (time) => {
    var date = new Date(time);
    return (
      <>
        {"in: " +
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


// (body, postId, commentId)

  const upvotePost = (post) => {
    if (post.userVoteDirection > 0) {
      unvotePost(post);
    } else {
      const body = {
        direction: 1,
      };
     voteCommentRequest(body, postId,post);
    }

  };


  const downvotePost = (post) => {
    if (post.userVoteDirection < 0) {
      unvotePost(post);
    } else {
      const body = {
        direction: -1,
      };
      voteCommentRequest(body, postId, post);
    }

  };
  const unvotePost = (post) => {
    const body = {
      direction: 0,
    };
    voteCommentRequest(body, postId, post);

  };


 
  const cardAllComentsToPost = commentsPost.map((comment) => {
    
    return (
      <StyledCardComments key={comment.id} className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label='recipe' className={classes.avatar}>
              {userFirstLetter(comment.username)}
            </Avatar>
          }
          action={
            <IconVotesCounter>
              <IconButton   onClick={() => upvotePost(comment.id)}   aria-label='to like'>
                <ArrowUpwardIcon />
              </IconButton>
              {comment.votesCount}
              <IconButton   onClick={() => downvotePost(comment.id) }   aria-label='to nolike'>
              <ArrowDownwardIcon />
              </IconButton>
            </IconVotesCounter>
          }
          title={comment.username.toUpperCase()}
          subheader={timeStampOnPost(comment.createdAt)}
        />
        <TextCardComments>
          <Typography variant='body1' color='textPrimary' component='p'>
            {comment.text}
          </Typography>
        </TextCardComments>
      </StyledCardComments>
    );
  });

  return <div>{cardAllComentsToPost}</div>;
};

export default CommentCard;
