import { createBrowserRouter, createRoutesFromElements, Route, } from 'react-router-dom'
import App from '../App'
import Home from '../screens/Home'
import Projects from '../screens/Projects'
import Contact from '../screens/Contact'



export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/projects' element={<Projects/>} />
            <Route path='/contacts' element={<Contact/>}/>
        </Route>
    )
)