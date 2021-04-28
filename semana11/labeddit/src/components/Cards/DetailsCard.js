import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { CounterCommentsStyle, StyledCard, StyledCardActions } from "./styled";
import IconButton from "@material-ui/core/IconButton";
import AddCommentIcon from "@material-ui/icons/AddComment";
import CommentCard from "./commentsCard";
import CreateNewComment from "./CreateNewComments";
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

const DetailsCard = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const comments = props.comments;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <StyledCard className={classes.root}>
      <CardHeader
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

      <CardContent>
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
            <ArrowUpwardIcon />
          </IconButton>
          {props.votesCount}
          <IconButton aria-label='to nolike'>
            <ArrowDownwardIcon />
          </IconButton>
        </div>
        <div>
          <IconButton aria-label='share'>
            <ShareIcon />
          </IconButton>

          {/* COMENTARIOS NO   + */}
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label='show more'
          >
            <AddCommentIcon />
          </IconButton>
          <CounterCommentsStyle>{props.commentsCount} comments</CounterCommentsStyle>
        </div>
      </StyledCardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CreateNewComment />
        <CommentCard comments={comments} />
      </Collapse>
    </StyledCard>
  );
};

export default DetailsCard;
