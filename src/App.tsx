import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import "./index.css"
function App() {
  return (
    <div>
        <Header />
        <Navbar />
        <Outlet />
    </div>
  )
}
export default App