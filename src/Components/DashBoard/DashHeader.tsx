import  { useState } from "react";
// import { GoInfo } from "react-icons/go";
import "./Dashboard.css";
import TradingViewWidgettwo from "../TradinViewTwo";
import { PiSignOutBold } from "react-icons/pi";
import {  LuWallet } from "react-icons/lu";
import { FiBarChart2 } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { Drawer } from "antd";
import Logo from '../../assets/ExpressPro.png'
import { RxDashboard } from "react-icons/rx";
import {MdAccountBox} from "react-icons/md";
import { GiTrade } from "react-icons/gi";
import { PiSwap } from "react-icons/pi";
import { BiMoneyWithdraw } from "react-icons/bi";
// import { PiSignOut } from "react-icons/pi";
import {  FaCaretDown } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";
import { userLogout } from "../../Function/Slice";
import { useDispatch, useSelector } from "react-redux";
import RootState from "../../Function/Rootstate";

const DashHeader = () => {
  const [ShowProfile, setShowProfile] = useState<boolean>(false);
  const [SideBar, setSideBar] = useState<boolean>(false);
  const user = useSelector((state:RootState)=> state.mySlice.tradeUser)
  // const userToken = useSelector((state)=> state.mySlice.Token)
  const dispatch = useDispatch()

  const HandleShow = () => {
    setShowProfile(!ShowProfile);
  };

  const HandleSidebar = () => {
    setSideBar(!SideBar);
  };
  const HandleCloseSideBar = () => {
    setSideBar(false);
  };

  return (
    <div className=" w-[100%]  h-[13%] bg-[#122044] shadow-sm flex justify-between border-b border-blue-800 phone:h-[7%] smallPhone:h-[14%] m-0 p-0 box-border">
      <div className="w-[80%] h-[100%] text-[#534F54] pl-4 flex justify-center  items-center gap-[10px] phone:hidden">
        <div className="w-[100%] h-[50%] flex justify-end">
          <TradingViewWidgettwo/>
        </div>
      </div>
      <div className="w-[30%] h-[100%] text-[#FDFDF7]  justify-center items-center phone:flex hidden">
        <IoMdMenu
          className="w-8 h-8 cursor-pointer"
          onClick={HandleSidebar}
        />
      </div>
      <div className="w-[20%] h-[100%] flex pr-4 justify-end items-center phone:w-[100%] phone:justify-end">
        <div className="w-max h-max flex items-center gap-8 phone:gap-4">
          <div
            className="w-max h-max flex items-center gap-2 cursor-pointer hover:bg-[#0A1128] rounded-full pr-2 transition-all duration-500  relative"
            onClick={HandleShow}
          >
            <CiUser className="w-8 h-8 rounded-full bg-[#0A1128] text-white p-2" />
            <p className="flex items-center text-sm font-semibold text-[#fff] gap-1 phone:hidden">
              {user.fullName}
              <span>
                <FaCaretDown />
              </span>
            </p>
            {ShowProfile ? (
              <div className="min-w-[17rem] w-max h-max absolute top-11 right-0 bg-white shadow flex flex-col border-t-2 border-t-[#0A1128] rounded">
                <div className="w-full h-20 bg-gray-100 p-5 flex gap-2 border-b border-b-gray-200">
                  <div className="w-10 h-10 rounded-full bg-[#0A1128]">

                  </div>
                  <div className="w-max h-max flex justify-center flex-col">
                    <p className="text-sm font-bold text-[rgb(71,96,127)]">
                      {user.userName}
                    </p>
                    <p className="text-xs text-[rgb(128,148,174)] font-semibold">
                      {user.email}
                    </p>
                  </div>
                </div>
                <div className="w-full h-max p-5 border-b border-b-gray-200">
                  <div className="w-full h-max flex items-center justify-between">
                    <div className="w-max h-max flex flex-col gap-1">
                      <p className="text-[rgb(128,148,174)] text-xs font-bold">
                        AVAILABLE BALANCE
                      </p>
                      <p className="text-[#0A1128] flex gap-2 items-end text-2xl">
                        {user.accountBalance}.00
                        <span className="text-lg font-semibold">USD</span>
                      </p>
                      <p className="text-white font-medium">00 USD</p>
                    </div>
                    <div className="w-max h-max items-center justify-center">
                      <FiBarChart2 className="w-9 h-9 rounded p-2 cursor-pointer bg-white" />
                    </div>
                  </div>
                  <p className="flex gap-2 items-center text-[#0A1128] ">
                    Add funds
                    <span>
                      <LuWallet />
                    </span>
                  </p>
                </div>
                <NavLink to={"useracct/profile"}>
                  <div className="w-full h-16 flex items-center px-5 border-b border-b-gray-200">
                    <p className="flex gap-2 hover:text-[#0A1128] transition-all duration-500 items-center font-semibold text-sm text-[rgb(82,100,132)]">
                      <IoSettingsOutline className="w-5  h-5" />
                      Account Settings
                    </p>
                  </div>
                </NavLink>
                <div className="w-full h-16 flex items-center px-5 " onClick={()=>dispatch(userLogout())}>
                  <p className="flex gap-2 hover:text-[#0A1128] transition-all duration-500 items-center font-semibold text-sm text-[rgb(82,100,132)]">
                    <PiSignOutBold className="w-5  h-5" />
                    Signout
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <Drawer   open={SideBar}
                onClose={HandleCloseSideBar}
                placement="left"
                maskClosable={true}
                width={290}
                className="bg-[red]">

          <div className="w-full h-full bg-[#122044]"> 
       <div className="w-[100%] h-[20%] flex justify-center items-center">
        <img src={Logo} alt="" className='w-[60%] h-[60%] object-contain'  />
       </div>
       <div className='w-[100%] h-[80vh] bg-[#122044] scrollbar-thin overflow-y-scroll  scrollbar-thumb-sky-500 scrollbar-track-[#edf2fb]'>
        <div className='w-[100%] h-[30%]'>
            <div className='w-[100%] h-[40%]  flex justify-center items-center '>
                <button className=' w-[70%] h-[70%] bg-[#0A1128] flex justify-center items-center gap-2 rounded-md text-[#FDFDF7] text-sm' >
                <IoAdd className='w-6 h-6 text-[#FDFDF7]' />  <NavLink to='deposit' onClick={HandleCloseSideBar}>DEPOSIT</NavLink>
                </button>
            </div>
            <div className='w-[100%] h-[35%] flex justify-start items-center p-3'>
                {/* <p className=' text-[#edf2fb] font-medium text-md'>Menu</p> */}
            </div>
           <div className='w-full h-[24rem] flex flex-col gap-2 '>
           <NavLink
                                    to={"overview"}
                                    className={({isActive}) =>
                                        !isActive
                                            ? "transition-all hover:text-[0.90rem] hover:bg-[#023e8a] rounded-full hover:text-yellow-500 text-white "
                                            : "transition-all bg-[#023e8a] text-yellow-500 rounded-full"
                                    }
                                >
                                    <div className="w-full h-11 flex items-center  text-white transition-all duration-400 gap-4 px-6 rounded-full cursor-pointer" onClick={HandleCloseSideBar}>
                                        <RxDashboard  className="w-6 h-6" />
                                        <p className="font-medium text-base">
                                            Dashboard
                                        </p>
                                    </div>
                                </NavLink>
                                <NavLink
                                    to={"my-plans"}
                                    className={({isActive}) =>
                                        !isActive
                                            ? "transition-all hover:text-[0.90rem] hover:bg-[#023e8a] rounded-full hover:text-[#FDFDF7]"
                                            : "transition-all bg-[#023e8a] text-white rounded-full"
                                    }
                                >
                                    <div className="w-full h-11 flex items-center  text-white transition-all duration-400 gap-4 px-6 rounded-full cursor-pointer" onClick={HandleCloseSideBar}>
                                        <LuWallet  className="w-6 h-6" />
                                        <p className="font-medium text-base">
                                            My Plans
                                        </p>
                                    </div>
                                </NavLink>
                                <NavLink
                                    to={"tradingPlans"}
                                    className={({isActive}) =>
                                        !isActive
                                            ? "transition-all hover:text-[0.90rem] hover:bg-[#023e8a] rounded-full  hover:text-[#0e4152] text-[#FDFDF7]"
                                            : "transition-all bg-[#023e8a] text-white rounded-full"
                                    }
                                >
                                    <div className="w-full h-11 flex items-center text-white transition-all duration-400 gap-4 px-6 rounded-full cursor-pointer" onClick={HandleCloseSideBar}>
                                        <GiTrade  className="w-6 h-6" />
                                        <p className="font-medium text-base">
                                            Trading Plans
                                        </p>
                                    </div>
                                </NavLink>
                                <NavLink
                                    to={"transaction"}
                                    className={({isActive}) =>
                                        !isActive
                                            ? "transition-all hover:text-[0.90rem] hover:bg-[#023e8a]  rounded-full  hover:text-white text-yellow-500"
                                            : "transition-all bg-[#023e8a] text-white rounded-full"
                                    }
                                >
                                    <div className="w-full h-11 flex items-center text-white transition-all duration-400 gap-4 px-6 rounded-full cursor-pointer" onClick={HandleCloseSideBar}>
                                    <PiSwap  className="w-6 h-6" />
                                        <p className="font-medium text-base">
                                            Transactions
                                        </p>
                                    </div>
                                </NavLink>
                                <NavLink
                                    to={"withdraw"}
                                    className={({isActive}) =>
                                        !isActive
                                            ? "transition-all hover:text-[0.90rem] hover:bg-[#023e8a]  rounded-full  hover:text-white text-yellow-500"
                                            : "transition-all bg-[#023e8a] text-white rounded-full"
                                    }
                                >
                                    <div className="w-full h-11 flex items-center text-white transition-all duration-400 gap-4 px-6 rounded-full cursor-pointer" onClick={HandleCloseSideBar}>
                                    <BiMoneyWithdraw  className="w-6 h-6" />
                                        <p className="font-medium text-base">
                                            Withdraw
                                        </p>
                                    </div>
                                </NavLink>
                                <NavLink
                                    to={"useracct/profile"}
                                    className={({isActive}) =>
                                        !isActive
                                            ? "transition-all hover:text-[0.90rem] hover:bg-[#023e8a]  rounded-full  hover:text-white text-yellow-500"
                                            : "transition-all bg-[#023e8a] text-white rounded-full"
                                    }
                                >
                                    <div className="w-full h-11 flex items-center text-white transition-all duration-400 gap-4 px-6 rounded-full cursor-pointer" onClick={HandleCloseSideBar}>
                                    <MdAccountBox    className="w-6 h-6" />
                                        <p className="font-medium text-base">
                                            Account
                                        </p>
                                    </div>
                                </NavLink>
                                <div className='w-[100%] h-[20%]  flex justify-center items-center'>
                                    <button className='w-[90%]  h-[50%]  flex justify-start text-[#FDFDF7] items-center font-medium text-base rounded-full transition-all duration-400 hover:bg-[#023e8a]'>
                                    {/* <PiSignOut className=' w-6 h-6' /> <p>Sign Out</p> */}
                                    </button>
                                </div>
                               
         </div>
        </div>
       </div>
    </div>
                </Drawer>
      </div>
    </div>
  );
};

export default DashHeader;
