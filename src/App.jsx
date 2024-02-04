import { BrowserRouter,Routes,Route } from "react-router-dom"
import Menu from "./pages/menu"
import Login from "./pages/login"
import NewDataMenu from "./pages/newMenus"
import EditMenu from "./pages/menuEdit"
import DetailMenu from "./pages/detailMenus"
import Dashboard from "./pages/Dashboard"
import Profile from "./pages/Profile"
function App() {

  return (
    <>
<BrowserRouter>
<Routes>
  <Route path="/menu" element={<Menu />}/>
  <Route path="/login" element={<Login />}/>
  <Route path="/newmenu" element={<NewDataMenu />}/>
  <Route path="/editmenu/:id" element={<EditMenu />}/>
  <Route path="/detailmenu/:id" element={<DetailMenu />}/>
  <Route path="/dashboard" element={<Dashboard />}/>
  <Route path="/profiel" element={<Profile />}/>
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
