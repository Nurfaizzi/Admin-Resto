import Authentication from "./Routes/Aunthentication";
import Protected from "./Routes/Protected";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import DetailMenu from "./pages/detailMenus";
import Login from "./pages/login";
import Menu from "./pages/menu";
import EditMenus from "./pages/menuEdit";
import NewDataMenu from "./pages/newMenus";

export const routes = [
  {
    path: "/",
    element: <Authentication><Login /></Authentication>,
  },
  {
    path: "/menu",
    element: <Protected><Menu /></Protected>,
  },
  {
    path: "/newmenu",
    element:  <Protected><NewDataMenu /></Protected>,
  },
  {
    path: "/editmenu/:id",
    element:<Protected><EditMenus /></Protected>,
  },
  {
    path: "/detailmenu/:id",
    element: <Protected><DetailMenu /></Protected>,
  },
  {
    path: "/dashboard",
    element: <Protected><Dashboard /></Protected>,
  },
  {
    path: "/profiel",
    element: <Protected><Profile /></Protected>,
  },
];
