import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Bag from "./components/Pages/Bag.jsx";
import About from "./components/Pages/About.jsx"
import ServicePage from "./components/Pages/ServicePage.jsx";
import ServicesPage from "./components/Pages/ServicesPage.jsx";
import ServiceName from "./components/Pages/ServiceName.jsx";
import ServiceDescription from "./components/Pages/ServiceDescription.jsx";

const router = createBrowserRouter([
  {
    element:<App/>,
    path:'/',
    children:[
      {
        element:<Bag/>,
        path:'bag',
      }, 
      {
        element:<About/>,
        path:'about',
      },
      {
        element:<ServicesPage/>,
        index:true,
      },
      {
        element:<ServicePage/>,
        path:'service-page/:serviceId',
        children:[
          {
            element:<ServiceName/>,
            path:'service-name',
          }, 
          {
            element:<ServiceDescription/>,
            path:'service-description',
          },
        ]
      }
    ]
  }
])

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}/>
);
