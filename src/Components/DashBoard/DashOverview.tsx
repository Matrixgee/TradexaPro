import React from "react";
// import { Link, NavLink } from "react-router-dom";
// import { IoIosAddCircleOutline } from "react-icons/io";
// import { LuWallet } from "react-icons/lu";
// import { PiWarningCircleLight } from "react-icons/pi";
// import { BsCurrencyDollar } from "react-icons/bs";
// import { useSelector } from "react-redux";
import RootState from "../../Function/Rootstate";
// import { useEffect, useState } from "react";

// import { MdOutlineAccountBalance } from "react-icons/md";
// import Transactions from "./Transactions";

import { useSelector } from "react-redux";
import TradingViewWidget from "./Tradingviewwwtry";
import { useNavigate } from "react-router-dom";
import Transactions from "./Transactions";
import { BiMoneyWithdraw } from "react-icons/bi";
import {
  MdOutlineAccountBalance,
  MdOutlineBarChart,
  MdOutlineSwapHorizontalCircle,
} from "react-icons/md";

// import axios from "axios";

// const DashOverview = () => {
//   const user = useSelector((state: RootState) => state.mySlice.tradeUser);
//   const [ExchangeRate, setExchangeRate] = useState(0);

//   useEffect(() => {
//     const Fetchdata = async () => {
//       try {
//         const response = await axios.get(
//           "https://api.coindesk.com/v1/bpi/currentprice.json"
//         );
//         const rate = response.data.bpi.USD.rate.replace(",", "");
//         setExchangeRate(parseFloat(rate));
//       } catch (error) {
//         console.log("error getting data ");
//       }
//     };
//     Fetchdata();
//   }, []);

//   const totalRate = user.accountBalance / ExchangeRate;

//   return (
//     <div className="w-[100%] h-[85vh] bg-[#14141b]  scroll scrollbar scrollbar-track-grey-500 overflow-y-scroll mt-3 ">
//       <div className="w-[100%] h-[20%] flex justify-around phone:pr-3">
//         <section className="w-[auto] h-[100%]   flex gap-[3px] justify-center items-start flex-col px-4 phone:w-[30%] phone:pl-5 smallPhone:hidden ">
//           <p className="text-[15px] text-[whitesmoke]">Welcome onboard,</p>
//           <h3 className="font-semibold text-2xl text-[#fff] phone:text-sm">
//             {user?.userName}
//           </h3>
//           <p className="font-medium text-[14px] text-[whitesmoke] phone:hidden">
//             At a glance, your account summary
//           </p>
//         </section>
//         <section className="w-[40%] h-[100%] flex justify-center gap-[15px] items-center phone:w-[60%] phone:gap-[0px] smallPhone:w-[90%] phone:justify-between ">
//           <button className="w-[30%] h-[40%] bg-[#122044] rounded-md phone:w-[45%] ">
//             <NavLink
//               to="/user/deposit"
//               className="flex justify-center items-center gap-[5px]"
//             >
//               <IoIosAddCircleOutline className="text-[#FDFDF7]" />{" "}
//               <p className="text-[#FDFDF7] font-semibold">Deposit</p>
//             </NavLink>
//           </button>
//           <button className="w-[30%] h-[40%] bg-[#023e8a] rounded-md phone:w-[45%] ">
//             <Link
//               to="/user/my-plans"
//               className="flex justify-center items-center gap-[5px]"
//             >
//               <LuWallet className="text-[#FDFDF7]" />{" "}
//               <p className="text-[#FDFDF7] font-semibold">My Plans</p>
//             </Link>
//           </button>
//         </section>
//       </div>
//       <section className="w-[100%] h-[40%] bg-red-400 flex justify-around pl-4  items-center phone:flex-col mt-5 phone:pr-3 phone:h-[60%] phone:gap-[20px] ">
//         <div className="w-[40%] h-[70%] bg-[#023e8a] flex flex-row rounded-md shadow-lg phone:w-[95%] pl-4 gap-[5px] phone:justify-between phone:h-[75%] smallPhone:flex-col ">
//           <div className="w-[30%] h-[100%] flex justify-center flex-col phone:w-[40%] smallPhone:w-[100%] smallPhone:gap-[5px] smallPhone:pt-2 ">
//             <div className="w-[60%] h-[50%] bg-[#fff] rounded-full flex justify-center items-center phone:w-[45%] phone:h-[40%] smallPhone:h-[53%] smallPhone:w-[15%]  ">
//               <MdOutlineAccountBalance className="w-10 h-10 phone:w-8 smallPhone:w-6" />
//             </div>
//             <div className="w-[100%] h-[20%] flex gap-[5px] items-center">
//               <p className=" font-medium text-xs text-[#fff]">
//                 Available Balance
//               </p>
//               <PiWarningCircleLight className="text-[white] " />
//             </div>
//           </div>
//           <div className="w-[70%] h-[100%] flex flex-col justify-center gap-[10px] phone:w-[60%] smallPhone:w-[100%] ">
//             <div className="w-[auto] h-[auto]  flex justify-start  items-center">
//               <BsCurrencyDollar className=" font-semibold text-3xl text-[white] phone:text-2xl " />{" "}
//               <p className="font-semibold text-2xl text-[white]">
//                 {user.accountBalance}.00
//               </p>
//             </div>
//             <div className=" w-auto h-[auto] flex justify-center items-center">
//               <p className="text-green-500  text-xl phone:text-lg">
//                 {" "}
//                 {totalRate} BTC
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="w-[40%] h-[80%]  phone:w-[90%] flex items-center">
//           <TradingWidgetThree />
//         </div>
//       </section>
//       <section className=" w-[100%] h-[500px] flex justify-center items-center">
//         <div className="w-[95%] h-[100%] ">
//           <Transactions />
//         </div>
//       </section>
//     </div>
//   );
// };

// export default DashOverview;

const DashOverview: React.FC = () => {
  const user = useSelector((state: RootState) => state.mySlice.tradeUser);
  const nav = useNavigate();

  const UserData = [
    {
      title: "Account Balance",
      icon: <MdOutlineAccountBalance />,
      amount: user.accountBalance,
      iconBg: "bg-green-200",
      iconColor: "green",
    },
    {
      title: "Total Profit",
      icon: <MdOutlineBarChart />,
      amount: user.totalProfit,
      iconBg: "bg-blue-200",
      iconColor: "blue",
    },
    {
      title: "Total Withdrawn",
      icon: <BiMoneyWithdraw />,
      amount: user.totalWithdrawn,
      iconBg: "bg-purple-200",
      iconColor: "purple",
    },
    {
      title: "Referal Bonus",
      icon: <MdOutlineSwapHorizontalCircle />,
      amount: user.referalBonus,
      iconBg: "bg-red-200",
      iconColor: "red",
    },
  ];

  return (
    <div className="w-full h-screen overflow-y-scroll scrollbar-thin scrollbar-hide">
      <div className="w-full h-[15%] flex justify-between items-center px-5">
        <div className="w-[50%] h-full flex justify-start items-center">
          <p className="text-xl font-semibold text-gray-200">
            Welcome, {user.fullName}
          </p>
        </div>
        <button
          className="px-5 py-[0.8rem] bg-blue-500 rounded-md text-gray-100"
          onClick={() => nav("/user/deposit")}
        >
          Fund Account
        </button>
      </div>

      <div className="w-full h-[40%] flex justify-around flex-wrap items-center">
        {UserData.map((data, index) => (
          <div
            key={index}
            className="w-[20%] h-[50%] bg-white rounded-md phone:w-[45%] phone:h-[40%] flex flex-col justify-between p-3"
          >
            <div className="flex items-center gap-2">
              <div
                className={`w-[40px] h-[40px] rounded-full ${data.iconBg} flex justify-center items-center`}
              >
                {data.icon &&
                  React.cloneElement(data.icon, {
                    size: 20,
                    color: data.iconColor,
                  })}
              </div>
              <p className="text-xl ">${data.amount}</p>
            </div>
            <div className="mt-2">
              <p className="text-lg font-medium">{data.title}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full h-[70%] flex flex-col gap-3 items-center">
        <div className="w-full h-[10%] flex justify-start items-center px-4">
          <p className="font-semibold text-gray-200">Personal Trading Chart</p>
        </div>
        <div className="w-full h-[90%] flex justify-around px-3 items-center">
          <TradingViewWidget />
        </div>
      </div>

      <div className="w-full h-[60%] flex flex-col items-center">
        <div className="w-full h-[10%] flex justify-start items-center px-3">
          <p className="text-gray-200 text-xl font-semibold">
            Recent Transactions
          </p>
        </div>
        <div className="w-full h-[90%]  flex justify-center items-center">
          <Transactions />
        </div>
      </div>
    </div>
  );
};

export default DashOverview;
