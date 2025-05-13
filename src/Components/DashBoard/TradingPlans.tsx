import { FaCaretRight } from "react-icons/fa";





const TradingPlans = () => {



  return (
    <div className="w-[100%] h-[85vh]  scroll scrollbar scrollbar-track-grey-500 overflow-y-scroll " >
      <div className="w-[100%] h-[27%] text-[whitesmoke] flex justify-center items-center flex-col smallPhone:text-xs">
        <p>Choose an option</p>
        <h2 className="font-medium text-[2rem] phone:text-3xl smallPhone:text-xl">Trading Plans</h2>
        <p>Choose your investment plan and start earning.</p>
      </div>
      <div className="w-[100%] h-[80%] justify-around items-center flex phone:items-center phone:flex-col phone:justify-start phone:h-auto phone:gap-[50px] ">
        <div className="w-[21%] h-[70%] bg-[#FDFDF7] rounded-lg shadow-md flex justify-around items-center flex-col phone:w-[80%] phone:h-[400px] ">
          <div className="w-[100%] h-[20%]  flex justify-center items-center flex-col">
            <h3 className="font-bold text-2xl phone:text-xl">SMALL</h3>
            <p className="font-semibold text-red-500">3.6%</p>
          </div>
          <div className="w-[100%] h-[50%] px-4 flex-col justify-around items-start flex">
            <p>Percentage 3.6% ROI</p>
            <p>Daily yield</p>
            <p>Principal Return <span className="font-bold text-green-500 bg-green-200">Available</span> </p>
            <p>From <span className=" font-bold text-green-500">$50 - $5000</span> </p>
          </div>
          <div className="w-[100%] h-[20%] flex justify-center items-center">
            <button className="w-[80%] h-[70%]  bg-[#023e82] rounded-lg text-[white]">Select Plan</button>
          </div>
        </div>
        <div className="w-[21%] h-[70%] bg-[#FDFDF7] rounded-lg shadow-md flex justify-around items-center flex-col phone:w-[80%] phone:h-[400px] ">
          <div className="w-[100%] h-[20%] flex justify-center items-center flex-col">
            <h3 className="font-bold text-2xl">STANDARD</h3>
            <p className="font-semibold text-red-500">4.2%</p>
          </div>
          <div className="w-[100%] h-[50%] flex-col justify-around items-start flex px-4">
            <p>Percentage 4.2% ROI</p>
            <p>Daily yield</p>
            <p>Principal Return <span className="font-bold text-green-500 bg-green-200">Available</span> </p>
            <p>From <span className=" font-bold text-green-500">$5000 - $9999</span> </p>
          </div>
          <div className="w-[100%] h-[20%] flex justify-center items-center">
            <button className="w-[80%] h-[70%]  bg-[#023e82] rounded-lg text-[white]">Select Plan</button>
            </div>
        </div>
        <div className="w-[21%] h-[70%] bg-[#FDFDF7] rounded-lg shadow-md flex justify-around items-center flex-col phone:w-[80%] phone:h-[400px] ">
        <div className="w-[100%] h-[20%] flex justify-center items-center flex-col">
            <h3 className="font-bold text-2xl">ADVANCED</h3>
            <p className="font-semibold text-red-500">5%</p>
          </div>
          <div className="w-[100%] h-[50%] flex-col justify-around itmes-start flex px-4">
            <p>Percentage 5% ROI</p>
            <p>Daily yield</p>
            <p>Principal Return <span className="font-bold text-green-500 bg-green-200">Available</span> </p>
            <p>From <span className=" font-bold text-green-500">$10,000 - $30,000</span> </p>
          </div>
          <div className="w-[100%] h-[20%] flex justify-center items-center">
            <button className="w-[80%] h-[70%]  bg-[#023e82] rounded-lg text-[white]">Select Plan</button>
            </div>
        </div>
        <div className="w-[21%] h-[70%] bg-[#FDFDF7] rounded-lg shadow-md flex justify-around items-center flex-col phone:w-[80%] phone:h-[400px] ">
        <div className="w-[100%] h-[20%] flex justify-center items-center flex-col">
            <h3 className="font-bold text-2xl">CORP0RATE</h3>
            <p className="font-semibold text-red-500">8%</p>
          </div>
          <div className="w-[100%] h-[50%] flex-col justify-around itmes-start flex px-4">
            <p>Percentage 8% ROI</p>
            <p>Daily yield</p>
            <p>Principal Return <span className="font-bold text-green-500 bg-green-200">Available</span> </p>
            <p>From <span className=" font-bold text-green-500">$30,000 - $90,000</span> </p>
          </div>
          <div className="w-[100%] h-[20%] flex justify-center items-center">
            <button className="w-[80%] h-[70%]  bg-[#023e82] rounded-lg text-[white]">Select Plan</button>
            </div>
        </div>
        
      </div>
      <div className="w-[100%] h-[20%] flex justify-center items-center phone:mt-10">
        <button className="w-[15%] h-[40%] bg-[#023e8a] flex font-semibold justify-center items-center gap-[5px] rounded-lg text-[#FDFDF7] phone:w-[50%] ">Continue <FaCaretRight /> </button>
      </div>
    </div>
  )
}

export default TradingPlans