import { createHashRouter } from "react-router-dom";
import App from "../App";
import AppDownload from "../pages/download/AppDownload";
import Error403 from "../pages/error/Error403";
import Error404 from "../pages/error/Error404";
import { Provider } from 'react-redux';
import store from "../store";



const routers =  [{
    path: "/",
    element: <Provider store={store}><App /></Provider>,
    children: [
        
        {
            path:'/download',
            element: <AppDownload/>
        },
       
        
        {
            path:'/403',
            element: <Error403/>
        },
        {
            path:'/404',
            element: <Error404/>
        },
        {
            path:'*',
            element: <Error404/>
        },
        
        
    ]
}]

const hasrouter = createHashRouter(routers)

export default hasrouter