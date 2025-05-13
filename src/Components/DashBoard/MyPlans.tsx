import {FiPlusCircle} from "react-icons/fi";
import {NavLink} from "react-router-dom";

const MyPlans = () => {
    const myPlans = [];
    return (
        <>
            <div className="w-full h-max">
                <div className="w-full h-max flex flex-col px-10 phone:px-4 py-8 gap-3">
                    {myPlans.length > 0 ? (
                        <>
                            <p className=" text-[whitesmoke] text-xl font-semibold">
                                My Investment (0)
                            </p>
                            <div className="w-full h-max flex flex-col mt-5 gap-6">
                                <div className="w-full h-max flex flex-col gap-2 overflow-y-auto">
                                    <p className="text-[rgb(54,74,99)] text-lg font-semibold">
                                        Plan #1234ABCD
                                    </p>
                                    <div className="w-full phone:w-max h-28 border border-gray-500 rounded bg-gray-300 flex flex-col">
                                        <div className="w-full h-1/2 border-b border-b-gray-500 flex">
                                            <div className="w-1/6 phone:w-24 text-center h-full text-sm flex items-center justify-center font-semibold border-r border-r-gray-500">
                                                Plan Name
                                            </div>
                                            <div className="w-1/6 phone:w-24 text-center h-full text-sm flex items-center  justify-center font-semibold border-r border-r-gray-500">
                                                Amount Deposited
                                            </div>
                                            <div className="w-1/6 phone:w-24 text-center h-full text-sm flex items-center justify-center font-semibold border-r border-r-gray-500">
                                                Total Return
                                            </div>
                                            <div className="w-1/6 phone:w-24 text-center h-full text-sm flex items-center justify-center font-semibold border-r border-r-gray-500">
                                                Duration
                                            </div>
                                            <div className="w-1/6 phone:w-24 text-center h-full text-sm flex items-center justify-center font-semibold border-r border-r-gray-500">
                                                Interest
                                            </div>
                                            <div className="w-1/6 phone:w-24 text-center h-full text-sm flex items-center justify-center font-semibold border-r border-r-gray-500">
                                                Date Started
                                            </div>
                                            <div className="w-1/6 phone:w-24 text-center h-full text-sm flex items-center justify-center font-semibold">
                                                Date Completed
                                            </div>
                                        </div>
                                        <div className="w-full h-1/2 flex">
                                            <div className="w-1/6 phone:w-24 text-center text-sm h-full flex items-center justify-center border-r border-r-gray-500">
                                                Silver Plan
                                            </div>
                                            <div className="w-1/6 phone:w-24 text-center text-sm h-full flex items-center justify-center border-r border-r-gray-500">
                                                $3,000
                                            </div>
                                            <div className="w-1/6 phone:w-24 text-center text-sm h-full flex items-center justify-center border-r border-r-gray-500">
                                                $15,000
                                            </div>
                                            <div className="w-1/6 phone:w-24 text-center text-sm h-full flex items-center justify-center border-r border-r-gray-500">
                                                7 days
                                            </div>
                                            <div className="w-1/6 phone:w-24 text-center text-sm h-full flex items-center justify-center border-r border-r-gray-500">
                                                10%
                                            </div>
                                            <div className="w-1/6 phone:w-24 text-center text-sm h-full flex items-center justify-center border-r border-r-gray-500">
                                                10-01-2024
                                            </div>
                                            <div className="w-1/6 phone:w-24 text-center text-sm h-full flex items-center justify-center ">
                                                10-01-2024
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <p className="text-[whitesmoke] text-xl font-semibold phone:text-lg">
                                My Investment (0)
                            </p>
                            <div className="w-full h-max border border-[#023e8a] bg-[#F2F3F4] rounded">
                                <div className="w-full h-24 flex flex-col items-center justify-center gap-2">
                                    <p className="text-[#0A1128]">
                                        You do not have any plans
                                    </p>
                                    <NavLink to={"/user/deposit"}>
                                        <button className="w-max h-max flex items-center gap-2 bg-[#023e8a] rounded text-white px-6 py-2 text-sm font-semibold">
                                            <FiPlusCircle />
                                            Invest Now
                                        </button>
                                    </NavLink>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default MyPlans;