import Logo from "../../assets/ExpressPro.png";
import { NavLink, Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { MdAccountBox } from "react-icons/md";
import { LuWallet } from "react-icons/lu";
import { GiTrade } from "react-icons/gi";
import { PiSwap } from "react-icons/pi";
import { BiMoneyWithdraw } from "react-icons/bi";
// import { PiSignOut } from "react-icons/pi";
// import { useDispatch } from 'react-redux';
// import { userLogout } from '../../Function/Slice';

const Menu = () => {
  // const dispatch = useDispatch()

  return (
    <div className="w-[100%] h-[100%] bg-[#122044] phone:hidden border-r border-blue-800">
      <div className="w-[100%] h-[20%] flex justify-center items-center">
        <Link
          to="/"
          className="w-[100%] h-[100%] flex justify-center items-center"
        >
          <img src={Logo} alt="" className="w-[60%] h-[60%] object-contain" />
        </Link>
      </div>
      <div className="w-[100%] h-[70vh] bg-[#122044] ">
        <div className="w-[100%] h-[30%]">
          <div className="w-[100%] h-[40%]  flex justify-center items-center ">
            <button className=" w-[70%] h-[80%] bg-[#0A1128] flex justify-center items-center gap-2 rounded-md text-[#FDFDF7] text-sm">
              <NavLink to="deposit">DEPOSIT</NavLink>
            </button>
          </div>
          <div className="w-[100%] h-[35%] flex justify-start items-center p-3">
            {/* <p className=' text-[#edf2fb] font-medium text-md'>Menu</p> */}
          </div>
          <div className="w-full h-[24rem] flex flex-col gap-2 ">
            <NavLink
              to={"/user/overview"}
              className={({ isActive }) =>
                !isActive
                  ? "transition-all hover:text-[0.90rem] hover:bg-[#023e8a] w-[95%] rounded-lg hover:text-[#FDFDF7] text-[#717171] "
                  : "transition-all bg-[#023e8a] w-[95%] text-white rounded-lg"
              }
            >
              <div className="w-full h-11 flex items-center   transition-all duration-400 gap-4 px-6 rounded-full cursor-pointer">
                <RxDashboard className="w-6 h-6" />
                <p className="font-semibold text-base">Dashboard</p>
              </div>
            </NavLink>
            <NavLink
              to={"my-plans"}
              className={({ isActive }) =>
                !isActive
                  ? "transition-all hover:text-[0.90rem] hover:bg-[#023e8a] w-[95%] rounded-lg hover:text-[#FDFDF7] text-[#717171] "
                  : "transition-all bg-[#023e8a] w-[95%] text-white rounded-lg"
              }
            >
              <div className="w-full h-11 flex items-center   transition-all duration-400 gap-4 px-6 rounded-full cursor-pointer">
                <LuWallet className="w-6 h-6" />
                <p className="font-semibold text-base">My Plans</p>
              </div>
            </NavLink>
            <NavLink
              to={"tradingplans"}
              className={({ isActive }) =>
                !isActive
                  ? "transition-all hover:text-[0.90rem] hover:bg-[#023e8a] w-[95%] rounded-lg hover:text-[#FDFDF7] text-[#717171] "
                  : "transition-all bg-[#023e8a] w-[95%] text-white rounded-lg"
              }
            >
              <div className="w-full h-11 flex items-center   transition-all duration-400 gap-4 px-6 rounded-full cursor-pointer">
                <GiTrade className="w-6 h-6" />
                <p className="font-semibold text-base">Trade Plans</p>
              </div>
            </NavLink>
            <NavLink
              to={"transaction"}
              className={({ isActive }) =>
                !isActive
                  ? "transition-all hover:text-[0.90rem] hover:bg-[#023e8a] w-[95%] rounded-lg hover:text-[#FDFDF7] text-[#717171] "
                  : "transition-all bg-[#023e8a] w-[95%] text-white rounded-lg"
              }
            >
              <div className="w-full h-11 flex items-center   transition-all duration-400 gap-4 px-6 rounded-full cursor-pointer">
                <PiSwap className="w-6 h-6" />
                <p className="font-semibold text-base">Transactions</p>
              </div>
            </NavLink>
            <NavLink
              to={"withdraw"}
              className={({ isActive }) =>
                !isActive
                  ? "transition-all hover:text-[0.90rem] hover:bg-[#023e8a] w-[95%] rounded-lg hover:text-[#FDFDF7] text-[#717171] "
                  : "transition-all bg-[#023e8a] w-[95%] text-white rounded-lg"
              }
            >
              <div className="w-full h-11 flex items-center   transition-all duration-400 gap-4 px-6 rounded-full cursor-pointer">
                <BiMoneyWithdraw className="w-6 h-6" />
                <p className="font-semibold text-base">Withdraw</p>
              </div>
            </NavLink>
            <NavLink
              to={"useracct/profile"}
              className={({ isActive }) =>
                !isActive
                  ? "transition-all hover:text-[0.90rem] hover:bg-[#023e8a] w-[95%] rounded-lg hover:text-[#FDFDF7] text-[#717171] "
                  : "transition-all bg-[#023e8a] w-[95%] text-white rounded-lg"
              }
            >
              <div className="w-full h-11 flex items-center   transition-all duration-400 gap-4 px-6 rounded-full cursor-pointer">
                <MdAccountBox className="w-6 h-6" />
                <p className="font-semibold text-base">Account</p>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
