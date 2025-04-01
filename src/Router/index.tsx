import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import App from '../App';
import Home from '../screens/Home';
import Projects from '../screens/Projects';
import Contact from '../screens/Contact';
import Posts from '../screens/Posts';
import Post from '../screens/Posts/post';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contacts" element={<Contact />} />
      <Route path="/Posts" element={<Posts />} />
      <Route path="/post/:id" element={<Post />} />
    </Route>
  )
);
