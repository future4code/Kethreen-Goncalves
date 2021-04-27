import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { InputsContainer } from '../PostPage/styled';
import useForm from '../../hooks/useForm';
import {  Button, TextField } from '@material-ui/core';
import useProtectedPage from '../../hooks/UserProtectedPage';
import { AddPostContainer, StyledCard } from './styled';
import { createPost } from '../../services/post';


const useStyles = makeStyles((theme) => ({
 
    expand: {
      transform: 'rotate(0deg)',
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


const AddPostPage = () => {
useProtectedPage()
const classes = useStyles();
const [expanded, setExpanded] = React.useState(false);
const handleExpandClick = () => {
  setExpanded(!expanded);
};

const [form, onChange, clear] = useForm({ title: "", text: "" });

  const onSubmitForm = (event) => {
    event.preventDefault();
    createPost(form,clear)
  };
  

  // action={
  //   <IconButton aria-label="settings">
  //    <PostAddIcon/>
  //   </IconButton>
  // }
    return(
      <AddPostContainer>
        <StyledCard className={classes.root}>
      
            <InputsContainer>
            <form onSubmit={onSubmitForm}>
            <TextField
                name={"title"}
                value={form.title}
                onChange={onChange}
                label={"Título do Texto"}
                variant={"outlined"}
                fullWidth
                margin={"normal"}
                required
                type={"texto"}
              />
              <TextField
                name={"text"}
                value={form.text}
                onChange={onChange}
                label={"Texto que deseja compartilhar?"}
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
                Postar!
              </Button>
            </form>
          </InputsContainer>
    </StyledCard>
  </AddPostContainer>
  )
}

export default AddPostPage