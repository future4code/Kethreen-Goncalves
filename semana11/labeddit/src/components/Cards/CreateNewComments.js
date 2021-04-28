import React from "react";
import { StyledCardComments } from "../Cards/styled";
import useForm from "../../hooks/useForm";
import { createCommentRequest } from "../../services/post";
import { Button, TextField } from "@material-ui/core";
import { useParams } from "react-router";

const CreateNewComment = () => {
  const [form, onChange, clear] = useForm({
    text: "",
  });

  const params = useParams();

  const onSubmitForm = (event) => {
    event.preventDefault();
    console.log(form);
    const postId = params.id;
    createCommentRequest(form, clear, postId);
  };

  return (
    <StyledCardComments>
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
