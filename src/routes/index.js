import { Outlet } from "react-router-dom";
import { routeDefinitions } from "../constants/routes";
import Sidebar from "../layout/Sidebar";
import Cal from "../components/Cal"
import Profile from "../pages/Profile/Profile";
import Programs from "../pages/Programs/Programs";
import VideoDetail from "../pages/Program/VideoDetail";

export const routes =
[{
    path: routeDefinitions.AUTH,
    element: <Outlet />,
    children: [
        {
            path: routeDefinitions.INDEX,
            element: <h1>login</h1>,
        },
        {
            path: routeDefinitions.LOGIN,
            element: <h1>login</h1>,
        },
        {
            path: routeDefinitions.FORGOT_PASSWORD,
            element: <h1>forgot password</h1>,
        },
        {
            path: routeDefinitions.RESET_PASSWORD,
            element: <h1>reset password using token</h1>,
        },
    ]
},
{
        path: routeDefinitions.INDEX,
        element: <Sidebar/>,
        children: [
            {
                path: routeDefinitions.INDEX,
                element: <h1>index</h1>,
            },
            {
                path:  routeDefinitions.PROGRAMS,
                element: <Programs/>,
            },
            {
                path: routeDefinitions.PROGRAM,
                element: <h1>hh</h1>,
                children:[
                    {
                        path: routeDefinitions.INDEX,
                        element: <h1>program index</h1>
                    },
                    {
                        path: routeDefinitions.Overview,
                        element: <h1>program overview</h1>
                    },
                    {
                        path: routeDefinitions.Assignments,
                        element: <h1>program assignments</h1>
                    },
                    {
                        path: routeDefinitions.Attendance,
                        element: <h1>program attendance</h1>
                    },
                ]
            },
          
            {
                path: routeDefinitions.Schedule,
                element: <Cal/>,
            },
            {
                path: routeDefinitions.Meeting,
                element: <h1>meeting</h1>,
            },
            {
                path: routeDefinitions.Practice,
                element: <h1>coming soon</h1>,
            },
            {
                path: routeDefinitions.Me,
                element: <Profile/>,
            },
            {
                path: routeDefinitions.Video,
                element: <VideoDetail/>,
            },
        ],
    },
    {
        path: routeDefinitions.Tree,
        element:<Outlet/>,
        children:[
            {
                path:routeDefinitions.INDEX,
                element:<h1>tree index</h1>
            },
            {
                path:routeDefinitions.File,
                element:<h1>tree file</h1>
            },
        ]
    }
]