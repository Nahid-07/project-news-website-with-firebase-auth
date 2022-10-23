import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Category from "../../pages/category/Category/Category";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/login/Login";
import Register from "../../pages/login/Regester/Register";
import News from "../../pages/News/news/News";
import PrivetRouter from "../PrivetRouter/PrivetRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://dragon-server-nahid-07.vercel.app/news"),
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`https://dragon-server-nahid-07.vercel.app/category/${params.id}`),
      },
      {
        path: "/news/:id",
        element: (
          <PrivetRouter>
            <News></News>
          </PrivetRouter>
        ),
        loader: ({ params }) =>
          fetch(`https://dragon-server-nahid-07.vercel.app/news/${params.id}`),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);
