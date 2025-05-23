import { Outlet } from "react-router-dom";

import Sidebar from "../Components/Menu";

import UserHeader from "../Components/DashHeader";
import { useState } from "react";

const Userlayout = () => {
  const [active, setactive] = useState(false);

  return (
    <div className="h-screen w-screen max-w-[100vw] max-h-[100vh] overflow-hidden flex">
      <Sidebar active={active} setActive={setactive} />
      <div className=" w-full h-full bg-[#101829]">
        <UserHeader active={active} setActive={setactive} />
        <Outlet />
      </div>
    </div>
  );
};

export default Userlayout;
