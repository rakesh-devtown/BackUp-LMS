import { Outlet } from "react-router-dom";
import { routeDefinitions } from "../constants/routes";
import Sidebar from "../layout/Sidebar";
import CourseOverview from "../components/courses/CourseOverview";
import Cal from "../components/schedule/CalendarSchedular";
import Profile from "../pages/Profile/Profile";
import Programs from "../pages/Programs/Programs";
import VideoDetail from "../pages/Program/VideoDetail";
import events from "../components/schedule/dummydata";
import Login from "../pages/Auth/Login";
import SessionLimit from "../pages/Auth/SessionLimit";
import { ProtectedRoute } from "../pages/Auth/RouteProtection/protectedRoute";
import AuthWrapper from "../Wrapper/AuthWrapper";
import ForgetPass from "../pages/Auth/ForgetPass";
import DiscussionLayout from "../pages/Message/DiscussionLayout";
import DevArea from "../pages/DevArea/DevArea";
import IndexScreen from "../components/Dev/IndexScreen";
import DevScreen from "../components/Dev/DevScreen";
import Meeting from "../components/Meetings/Meeting";
import MeetingEnded from "../components/Meetings/MeetingEnded";
import DownloadCertificate from "../components/DevtownCertificates/DownloadCertificate";
import GenerateMagicLink from "../pages/MagicLink/GenerateMagicLink";
import VerifyMagicLink from "../pages/MagicLink/VerifyMagicLink";
import ResetPass from "../pages/Auth/ResetPass";
import ComingSoon from "../components/ComingSoon";
import MainWrapper from "../Wrapper/MainWrapper";
export const routes = [
  {
    path: routeDefinitions.AUTH,
    element: <AuthWrapper />,
    children: [
      {
        path: routeDefinitions.INDEX,
        element: <Login />,
      },
      {
        path: routeDefinitions.AUTH,
        element: <Login />,
      },
      {
        path: routeDefinitions.FORGOT_PASSWORD,
        element: <ForgetPass />,
      },
      {
        path: routeDefinitions.RESET_PASSWORD,
        element: <ResetPass />,
      },
      {
        path: routeDefinitions.MagicLink,
        element: <GenerateMagicLink />,
      },
      {
        path: routeDefinitions.VerifyMaginLink,
        element: <VerifyMagicLink />,
      },
    ],
  },
  {
    path: routeDefinitions.INDEX,
    element: (
      <MainWrapper>
        <Sidebar />
      </MainWrapper>
    ),
    children: [
      {
        path: routeDefinitions.INDEX,
        element: <Programs />,
      },
      {
        path: routeDefinitions.PROGRAMS,
        element: <Programs />,
      },
      {
        path: routeDefinitions.PROGRAM,
        element: <Outlet />,
        children: [
          {
            path: routeDefinitions.INDEX,
            element: <CourseOverview />,
          },
          {
            path: routeDefinitions.Overview,
            element: <CourseOverview />, //will be added
          },
          {
            path: routeDefinitions.Assignments,
            element: <h1>program assignments</h1>,
          },
          {
            path: routeDefinitions.Attendance,
            element: <h1>program attendance</h1>,
          },
        ],
      },

      {
        path: routeDefinitions.Schedule,
        element: <Cal events={events} />,
      },
      {
        path: routeDefinitions.Meeting,
        element: <Meeting />,
      },
      {
        path: routeDefinitions.MeetingEnded,
        element: <MeetingEnded />,
      },
      {
        path: routeDefinitions.Practice,
        element: <ComingSoon />,
      },
      {
        path: routeDefinitions.Me,
        element: <Profile />,
      },
      {
        path: routeDefinitions.Video,
        element: <VideoDetail />,
      },
      {
        path: routeDefinitions.MESSAGE,
        element: <DiscussionLayout />,
      },
      {
        path: routeDefinitions.Download,
        element: <DownloadCertificate />,
      },
    ],
  },
  {
    path: routeDefinitions.Tree,
    element: <DevArea />,
    children: [
      {
        path: routeDefinitions.INDEX,
        element: <IndexScreen />,
      },

      {
        path: routeDefinitions.File,
        element: <DevScreen />,
      },
    ],
  },
  {
    path: routeDefinitions.SessionLimit,
    element: <SessionLimit />,
  },
];
