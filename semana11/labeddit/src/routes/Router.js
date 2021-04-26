import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Header from "../components/Header/Header"
import DetailsPostPage from "../pages/DetailsPostPage/DetailsPostPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import FeedPage from "../pages/FeedPage/FeedPage"
import HomePage from "../pages/HomePage/HomePage"
import LoginPage from "../pages/LoginPage/LoginPage"
import PostPage from "../pages/PostPage/PostPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"


const Router = () => {

    return(
        <BrowserRouter>
        <Header/>
            <Switch>
            <Route exact path ="/" >
                    <HomePage/>
                </Route>
                <Route exact path ="/login" >
                    <LoginPage/>
                </Route>
                <Route exact path ="/cadastro" >
                    <SignUpPage/>
                </Route>
                <Route exact path ="/feed">
                    <FeedPage/>
                </Route>
                <Route exact path ="/Detalhes/:id">
                    <DetailsPostPage/>
                </Route>
                <Route exact path ="/adicionar-postagem">
                    <PostPage/>
                </Route>
                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router