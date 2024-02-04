import { BrowserRouter,Routes,Route, useRoutes } from "react-router-dom"
import Menu from "./pages/menu"
import Login from "./pages/login"
import NewDataMenu from "./pages/newMenus"
import EditMenu from "./pages/menuEdit"
import DetailMenu from "./pages/detailMenus"
import Dashboard from "./pages/Dashboard"
import Profile from "./pages/Profile"
import { routes } from "./routes"
const App = () => {
  let element = useRoutes(routes)
  return element

};

export default App;