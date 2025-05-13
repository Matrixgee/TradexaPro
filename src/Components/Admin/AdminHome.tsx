import { NavLink } from "react-router-dom";

const AdminHome = () => {
  return (
    <>
      <div className="w-full h-max flex flex-col">
        <div className="w-full h-10 shadow flex items-center gap-5">
          {/* <NavLink to={"admin/users"}>
            <div className="w-max h-max px-4 py-1 border rounded border-gray-400 cursor-pointer">
              Users
            </div>
          </NavLink> */}
          <NavLink to={"admin/adminTrans"}>
            <div className="w-max h-max px-4 py-1 border rounded border-gray-400 cursor-pointer">
              Transactions
            </div>
          </NavLink>
          <NavLink to={"admin/testing"}>
            <div className="w-max h-max px-4 py-1 border rounded border-gray-400 cursor-pointer">
              Users
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminHome;
