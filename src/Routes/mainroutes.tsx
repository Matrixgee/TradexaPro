import { createBrowserRouter } from "react-router-dom";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Home from "../Page/Home";
import Layout from "../Components/Layout";

import Deposit from "../Components/DashBoard/Deposit";
import MyPlans from "../Components/DashBoard/MyPlans";
import TradingPlans from "../Components/DashBoard/TradingPlans";
import Withdraw from "../Components/DashBoard/Withdraw";
import Account from "../Components/DashBoard/Account";
import Transactions from "../Components/DashBoard/Transactions";
import DashOverview from "../Components/DashBoard/DashOverview";
import Profile from "../Components/DashBoard/Profile";
import Private from "./Private";

import AdminPrivate from "./AdminPrivate";
// import Users from "./Components/Admin/Users";
import AdminTransactions from "../Components/Admin/AdminTransactions";
import Admin from "../Components/Admin/Admin";
import Security from "../Components/DashBoard/Security";
import ForgetPassword from "../Auth/ForgetPassword";
import Testing from "../Components/Admin/Testing";
import AuthLayout from "../Layouts/Authlay";
import ContactUs from "../Page/ContactUs";
import AboutUs from "../Page/About/AboutUs";
import Userlayout from "../Layouts/userlayout";

export const Router = createBrowserRouter([
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "forgetpass",
        element: <ForgetPassword />,
      },
    ],
  },

  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
    ],
  },

  {
    path: "admin",
    element: <AdminPrivate element={<Admin />}></AdminPrivate>,
    children: [
      // {
      //   path: "users",
      //   element: <Users />,
      // },
      {
        path: "adminTrans",
        element: <AdminTransactions />,
      },
      {
        path: "testing",
        element: <Testing />,
      },
    ],
  },
  {
    path: "/user",
    element: <Private element={<Userlayout />}></Private>,
    children: [
      {
        path: "deposit",
        element: <Deposit />,
      },
      {
        path: "my-plans",
        element: <MyPlans />,
      },
      {
        path: "tradingPlans",
        element: <TradingPlans />,
      },
      {
        path: "withdraw",
        element: <Withdraw />,
      },
      {
        path: "useracct",
        element: <Account />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "security",
            element: <Security />,
          },
        ],
      },
      {
        path: "transaction",
        element: <Transactions />,
      },
      {
        index: true,
        path: "overview",
        element: <DashOverview />,
      },
    ],
  },
]);
