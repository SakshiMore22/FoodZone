import React from "react";
import ReactDOM , {createRoot} from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Error from "./components/Error";

const AppLayout=()=>{
  return(
    <>
    <Header/>
    <Body/>
    </>
  );
};

const route=createBrowserRouter([{
  path:"/",
  element:<AppLayout/>,
  errorElement:<Error/>,
},
{
  path:"/about",
  element:<About/>,
},
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={route}/>);
