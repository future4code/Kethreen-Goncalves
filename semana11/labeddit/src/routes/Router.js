import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import DetailsPostPage from "../pages/DetailsPostPage/DetailsPostPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import FeedPage from "../pages/FeedPage/FeedPage"
import HomePage from "../pages/HomePage/HomePage"
import LoginPage from "../pages/LoginPage/LoginPage"
import AddPostPage from "../pages/PostPage/PostPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"


const Router = () => {

    return(
        <BrowserRouter>
            <Switch>
            <Route exact path ="/home" >
                    <HomePage/>
                </Route>
                <Route exact path ="/login" >
                    <LoginPage/>
                </Route>
                <Route exact path ="/cadastro" >
                    <SignUpPage/>
                </Route>
                <Route exact path ="/">
                    <FeedPage/>
                </Route>
                <Route exact path ="/Detalhes/:id">
                    <DetailsPostPage/>
                </Route>
                <Route exact path ="/adicionar-postagem">
                    <AddPostPage/>
                </Route>
                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router