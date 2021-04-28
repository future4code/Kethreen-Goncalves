import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { blueGrey} from "@material-ui/core/colors";
import { StyledCardComments, TextCardComments } from "../Cards/styled";
import IconButton from "@material-ui/core/IconButton";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

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

  console.log("chegou a props", commentsPost);

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const timeStampOnPost = (time) => {
    var date = new Date(time);
    return (
      <>
        {"" +
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
            <>
              <IconButton aria-label='to like'>
                <ThumbUpIcon />
              </IconButton>
              <IconButton aria-label='to nolike'>
                <ThumbDownIcon />
              </IconButton>
            </>
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
