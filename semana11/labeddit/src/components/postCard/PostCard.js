import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { StyledCard, StyledCardActions} from './styled';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import AddCommentOutlinedIcon from '@material-ui/icons/AddCommentOutlined';

const useStyles = makeStyles((theme) => ({
 
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const PostCard = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (

    <StyledCard className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.firsletter}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.username}
        subheader={props.date}
      />
      
      <CardContent>
      <Typography  variant="body1" color="textPrimary" component="p">
            {props.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
            {props.text}
        </Typography>
      </CardContent>
      <StyledCardActions disableSpacing>
        <div>
      <IconButton aria-label="to like">
        <ThumbUpIcon/>
        </IconButton>
        <IconButton aria-label="to like">
        <ThumbDownIcon/>
        </IconButton>
        </div>
        <div>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="show more">
          <AddCommentOutlinedIcon />
        </IconButton>
        </div>
      </StyledCardActions>
     
    </StyledCard>
  
  )
}

  export default PostCard
