import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/tradexaprologo.png";
import { MdClose, MdMenu } from "react-icons/md";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [Toggle, setToggle] = useState(false);

  const HandleToggle = () => {
    setToggle(!Toggle);
  };

  const handleClose = () => {
    setToggle(false);
  };

  const nav = useNavigate();

  return (
    <div className="w-full h-[12vh] bg-gradient-to-b from-[#030514] to-[#040720] flex justify-around items-center">
      <div className="w-[30%] md:w-[25%] h-full flex justify-start items-center">
        <img src={logo} alt="Logo" className="w-full h-full object-cover" />
      </div>
      <div className="w-[60%] h-full flex justify-around items-center max-md:hidden max-lg:hidden">
        <div className="w-[40%] h-full text-white font-semibold flex justify-around items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#3d54ec]" : "text-white hover:text-[#adb4e2]"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-[#3d54ec]" : "text-white hover:text-[#adb4e2]"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-[#3d54ec]" : "text-white hover:text-[#adb4e2]"
            }
          >
            Contact
          </NavLink>
        </div>
        <div className="w-[40%] h-full flex justify-around items-center">
          <button
            className="px-9 py-2 bg-transparent border-[#172aa7] border rounded font-semibold text-[#2d40bd] hover:bg-[#111e74] hover:text-white transition-all duration-300"
            onClick={() => nav("/auth/register")}
          >
            Register
          </button>
          <button
            className="px-9 py-2 bg-[#111e74] border-[#111e74] border rounded font-semibold text-white hover:border-[#172aa7] hover:bg-transparent hover:text-[#2d40bd] transition-all duration-300"
            onClick={() => nav("/auth/login")}
          >
            Login
          </button>
        </div>
      </div>
      <div className="w-[20%] h-full hidden max-md:flex max-lg:flex justify-center relative items-center">
        {Toggle ? (
          <MdClose size={28} className="text-white" onClick={HandleToggle} />
        ) : (
          <MdMenu size={28} className="text-white" onClick={HandleToggle} />
        )}

        <AnimatePresence>
          {Toggle ? (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "14rem", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-[20rem] h-[14rem] bg-[#131313] absolute top-20 max-sm:left-[-15rem] z-10"
            >
              <div className="w-full h-full  px-4 text-white font-semibold flex-col flex justify-around items-start">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                       ? "text-[#3d54ec]"
                      : "text-white hover:text-[#adb4e2]"
                  }
                  onClick={handleClose}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#3d54ec]"
                      : "text-white hover:text-[#adb4e2]"
                  }
                  onClick={handleClose}
                >
                  About
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                       ? "text-[#3d54ec]"
                      : "text-white hover:text-[#adb4e2]"
                  }
                  onClick={handleClose}
                >
                  Contact
                </NavLink>
                <div className="w-full h-[20%] text-white font-semibold  flex justify-start items-center">
                  <button
                    className="px-9 py-2  border-[#162691] bg-[#162691] hover:bg-[#111e74] border rounded font-semibold text-white  transition-all duration-300"
                    onClick={() => nav("/auth/register")}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;
