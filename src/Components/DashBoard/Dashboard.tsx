import Menu from "./Menu"
import DashHeader from "./DashHeader"
import { Outlet } from "react-router-dom"
// import DashFooter from "./DashFooter"

const Dashboard = () => {
  return (
    <div className=" h-screen flex w-[100%] m-0 p-0 box-border">
       <div className="w-[25%] h-screen phone:hidden m-0 p-0 box-border">
        <Menu/>
       </div>
       <div className="w-screen h-screen flex flex-col items-center bg-[#14141b] m-0 p-0 box-border ">
        <DashHeader/>
        <Outlet/>
         {/* <DashFooter/> */}
       </div>
    </div>
  )
}

export default Dashboard