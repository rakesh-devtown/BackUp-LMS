import { Outlet } from "react-router-dom";
import { routeDefinitions } from "../constants/routes";
import Sidebar from "../layout/Sidebar";
import CourseOverview from "../components/CourseOverview";
import Cal from "../components/Cal"
import Courses from "../components/Courses";
import LoginPage from "../components/LoginPage";

//for calender added temporarily 
const events = [
    {
      id: 1,
      date: '2023-10-04',
      "day":"Day-70",
      "topic": " Project setup",
      "description": "Day-70 Project setup",
      "instrutor":"Kartik Gupta",
  
      button: (
        <button onClick={() => alert('Button clicked for Event {id}')}>
          Click Me
        </button>
      ),
  
    },
   
    // Add more events as needed
  ];
export const routes =
[{
    path: routeDefinitions.AUTH,
    element: <LoginPage />,
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
                 element: <CourseOverview/>, //added temporarily
                //element:<Courses/>,
            },
            {
                path: routeDefinitions.PROGRAM,
                element: <Outlet/>,
                children:[
                    {
                        path: routeDefinitions.INDEX,
                        element: <h1>program index</h1>
                    },
                    {
                        path: routeDefinitions.Overview,
                        element: <CourseOverview/> //will be added 
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
                element: <Cal events={events}/>,
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
                element: <h1>profile</h1>,
            },
            {
                path: routeDefinitions.Video,
                element: <h1>video</h1>,
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