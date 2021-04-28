import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import { InputsContainer } from "../PostPage/styled";
import useForm from "../../hooks/useForm";
import { Button, CircularProgress, TextField } from "@material-ui/core";
import useProtectedPage from "../../hooks/UserProtectedPage";
import { AddPostContainer, StyledCard } from "./styled";
import { createPost } from "../../services/post";

const useStyles = makeStyles((theme) => ({
  expand: {
    transform: "rotate(0deg)",
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

const AddPostPage = () => {
  useProtectedPage();
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [form, onChange, clear] = useForm({ title: "", text: "" });

  const onSubmitForm = (event) => {
    event.preventDefault();
    createPost(form, clear, setIsLoading);
  };

  return (
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
              {isLoading ? (
                <CircularProgress color={"inherit"} size={24} />
              ) : (
                <>Postar !</>
              )}
            </Button>
          </form>
        </InputsContainer>
      </StyledCard>
    </AddPostContainer>
  );
};

export default AddPostPage;
