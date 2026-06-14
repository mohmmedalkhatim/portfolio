import { createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "../screens/home";
import App from "../App";
import PostsPage from "../screens/posts";
import Post from "../screens/post";



export let router = createBrowserRouter(
    createRoutesFromElements(
        (
            <Route element={<App />}>
                <Route path="/" index element={<Home />} />
                <Route path="/posts" element={<PostsPage />} />
                <Route path="/post/:id" element={<Post />} />
            </Route>
        )
    )
)