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
import useForm from "../../hooks/useForm";
import { createPost } from "../../services/post";
import { Button, TextField } from "@material-ui/core";

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

const CreateNewComment = () => {

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   const timeStampOnPost = (time) => {
//     var date = new Date(time);
//     return (
//       <>
//         {"" +
//           date.getDate() +
//           "/" +
//           (date.getMonth() + 1) +
//           "/" +
//           date.getFullYear() +
//           " às " +
//           date.getHours() +
//           ":" +
//           date.getMinutes()}
//       </>
//     );
//   };

//   const userFirstLetter = (letter) => {
//     const letterUser = letter.substr(0, 1);
//     return <>{letterUser.toUpperCase()}</>;
//   };

const [form, onChange, clear, PostId] = useForm({ text: "" });

const onSubmitForm = (event) => {
  event.preventDefault();
  createPost(form,clear, PostId)
};

    return (
      <StyledCardComments >
     
        <form onSubmit={onSubmitForm}>
            
              <TextField
                name={"text"}
                value={form.text}
                onChange={onChange}
                label={"Comentar nesta Publicação"}
                variant={"outlined"}
                fullWidth
                margin={"normal"}
                required
                type={"texto"}
              />
             
              <Button
                type={"submit"}
                fullWidth
                variant={"contained"}
                color={"secondary"}
              >
                Adicionar Comentario !
              </Button>
            </form>

        
      </StyledCardComments>
    );


  
};

export default CreateNewComment;
