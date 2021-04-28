import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { StyledCard } from "./styled";
import { StyledCardActions, CounterCommentsStyle } from "./styled";
import AddCommentIcon from "@material-ui/icons/AddComment";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

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
    backgroundColor: red[500],
  },
}));

const PostCard = (props) => {
  const classes = useStyles();

  return (
    <StyledCard className={classes.root}>
      <CardHeader  onClick={props.onClick}
        avatar={
          <Avatar aria-label='recipe' className={classes.avatar}>
            {props.firsletter}
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title={props.username.toUpperCase()}
        subheader={props.date}
      />

      <CardContent  onClick={props.onClick}>
        <Typography variant='body1' color='textPrimary' component='p'>
          {props.title}
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
          {props.text}
        </Typography>
      </CardContent>
      <StyledCardActions disableSpacing>
        <div>
          <IconButton aria-label='to like'>
          <ArrowDownwardIcon />
          </IconButton>
             {props.votesCount}
          <IconButton aria-label='to nolike'>
          <ArrowUpwardIcon  />
         
          </IconButton>
        </div>
      
        <div>
          <IconButton aria-label='share'>
            <ShareIcon />
          </IconButton>
          <IconButton aria-label='show more' onClick={props.onClick}>
            <AddCommentIcon />
            
          </IconButton>
          <CounterCommentsStyle>{props.commentsCount} comments</CounterCommentsStyle>
        </div>
      </StyledCardActions>
    </StyledCard>
  );
};

export default PostCard;
