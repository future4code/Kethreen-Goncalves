import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function BasicPagination(totalPosts, props) {
  const pageNumbers = Math.floor(totalPosts / props.postsPerPage);



  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Pagination
        count={pageNumbers}
        page={props.currentPage}
        onChange={props.onClickHandlePage}
        color='primary'
      />
    </div>
  );
}
