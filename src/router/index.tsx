import { createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "../screens/home";
import App from "../App";
import FeedPage from "../screens/FeedPage";
import PostPage from "../screens/post";
import ContactPage from "../screens/contact";
import CreatePostPage from "../screens/CreatePost";
import LoginPage from "../screens/Login";
import { ProtectedRoute } from "../components/auth/ProtectedRoute";



export let router = createBrowserRouter(
    createRoutesFromElements(
        (
            <Route element={<App />}>
                <Route path="/" index element={<Home />} />
                <Route path="/blog" element={<FeedPage />} />
                <Route path="/post/:id" element={<PostPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route
                    path="/create-post"
                    element={
                        <ProtectedRoute>
                            <CreatePostPage />
                        </ProtectedRoute>
                    }
                />
            </Route>
        )
    )
)