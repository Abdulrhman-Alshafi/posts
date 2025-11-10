import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import UserPosts from "./pages/UserPosts";
import PostComments from "./pages/PostComments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Login /> },
      { path: "userPosts", element: <UserPosts /> },
      { path: "postComments/:postId", element: <PostComments /> },
    ],
  },
]);
export default router;
