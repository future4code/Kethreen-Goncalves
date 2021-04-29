import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DetailsPostPage from "../pages/DetailsPostPage/DetailsPostPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import FeedPage from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import AddPostPage from "../pages/PostPage/PostPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <LoginPage />
        </Route>
        <Route exact path='/posts'>
          <SignUpPage />
        </Route>
        <Route exact path='/feed'>
          <FeedPage />
        </Route>
        <Route exact path='/posts/:id'>
          <DetailsPostPage />
        </Route>
        <Route exact path='/add-post'>
          <AddPostPage />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
