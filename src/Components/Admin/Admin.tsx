import { Outlet } from "react-router";
import logo from "../../assets/tradexaprologo.png";
import { BiUser } from "react-icons/bi";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// import {useNavigate} from "react-router";
import RootState from "../../Function/Rootstate";
import { clearOneUser } from "../../Function/Slice";
import { store } from "../../Function/Store";
// import axios from "axios";

const Admin = () => {
  // const nav = useNavigate();
  // const dispatch = useDispatch();
  const [show, setShow] = useState<boolean>(false);

  const user = useSelector((state: RootState) => state.mySlice.tradeUser);
  console.log(user);

  const nav = useNavigate();

  const dispatch = useDispatch();

  const HandleLogout = () => {
    console.log("Logging out..."); // Check if function is called
    dispatch(clearOneUser());
    console.log("State after logout:", store.getState().mySlice); // Log the updated state
    nav("/logs");
  };

  return (
    <>
      <div className="w-full h-max bg-sky-50">
        <div className="w-full h-[4rem] bg-[#122044] shadow flex  px-10 justify-between">
          <div className="w-max h-full flex items-center justify-center">
            <NavLink
              to="/"
              className="w-[100%] h-[100%] flex justify-center items-center"
            >
              <img
                src={logo}
                alt=""
                className="w-[90%] h-[90%] object-contain"
              />
            </NavLink>
          </div>
          <div className="w-max h-full flex items-center relative">
            <BiUser
              className="w-6 h-6 border border-white rounded-full text-white cursor-pointer"
              onClick={() => setShow(!show)}
            />
            {show && (
              <div className="absolute top-10 right-[-15px] w-max px-4 py-2 h-max flex flex-col items-center justify-center bg-white">
                <div className="w-max h-16">
                  <p>{user?.fullName}</p>
                  <p className="text-xs">{user?.email}</p>
                </div>
                <button
                  className="w-max h-max px-2 py-2 rounded text-xs font-medium bg-slate-200"
                  onClick={HandleLogout}
                >
                  SignOut
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="w-full h-max flex flex-col px-5">
          <div className="w-full h-16 shadow flex items-center gap-5 ">
            {/* <NavLink to={"/admin/users"}>
              <div className="w-max h-max px-4 py-1 border rounded border-gray-400 cursor-pointer">
                Users
              </div>
            </NavLink> */}
            <NavLink to={"/admin/adminTrans"}>
              <div className="w-max h-max px-4 py-1 border rounded border-gray-400 cursor-pointer">
                Transactions
              </div>
            </NavLink>
            <NavLink to={"/admin/testing"}>
              <div className="w-max h-max px-4 py-1 border rounded border-gray-400 cursor-pointer">
                Users
              </div>
            </NavLink>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Admin;
