import { useState } from 'react';
import {AnimatePresence, motion} from 'framer-motion'
import Logo from '../assets/ExpressPro.png';
import { Link, NavLink } from 'react-router-dom';
import { Menu, Dropdown } from 'antd';
import { IoMenuSharp } from "react-icons/io5";
import { MdOutlineClear } from "react-icons/md";


const Header = () => {
  const [Toggle, setToggle] = useState<boolean>(false);
  const [Open, setOpen] = useState<boolean>(false);


  const HandleToggle = () => {
    setToggle(!Toggle);
  };

  const HandleClose = ()=>{
    setOpen(!Open)
    setToggle(false)
  }

  const MenuInvestment = (
    <Menu>
      <Menu.Item key="0">
        <NavLink to="/investment">Option Trading</NavLink>
      </Menu.Item>
      <Menu.Item key="1">
        <NavLink to="/investment">Real Estate</NavLink>
      </Menu.Item>
      <Menu.Item key="2">
        <NavLink to="/investment">Stock Market</NavLink>
      </Menu.Item>
      <Menu.Item key="3">
        <NavLink to="/investment">Forex Trading</NavLink>
      </Menu.Item>
      <Menu.Item key="4">
        <NavLink to="/investment">Infrastructure</NavLink>
      </Menu.Item>
      <Menu.Item key="5">
        <NavLink to="/investment">Crypto Access</NavLink>
      </Menu.Item>
      <Menu.Item key="6">
        <NavLink to="/investment">Fixed Income</NavLink>
      </Menu.Item>
      <Menu.Item key="7">
        <NavLink to="/investment">Agriculture</NavLink>
      </Menu.Item>
    </Menu>
  );

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <NavLink to="/planning-services">Planning services</NavLink>
      </Menu.Item>
      <Menu.Item key="2">
        <NavLink to="/retirement-planning">Assets Management</NavLink>
      </Menu.Item>
      <Menu.Item key="3">
        <NavLink to="/retirement-planning">Alternative Planning</NavLink>
      </Menu.Item>
      <Menu.Item key="4">
        <NavLink to="/retirement-planning">Retirement Planning</NavLink>
      </Menu.Item>
      <Menu.Item key="5">
        <NavLink to="/retirement-planning">Private Wealth</NavLink>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="w-[100%] h-[14vh] bg-[#000814] flex justify-around items-center relative phone:h-[9vh] phone:justify-between" id='header'>
      <div className="w-[20%] h-[100%] flex justify-center items-center smallPhone:w-[40%] phone:w-[30%]">
        <NavLink to='/' className='w-[100%] h-[100%] flex justify-center items-center'>
           <img src={Logo} alt="" className="w-[80%] h-[85%] object-contain" />
        </NavLink>
      </div>
      <div className="w-[50%] h-[100%]  flex justify-around items-center phone:hidden smallPhone:hidden">
        <NavLink to="/about" className=' font-semibold text-white hover:text-[#FDC500] duration-100'>ABOUT</NavLink>
        <Dropdown overlay={menu}>
          <NavLink to="/planning-services" className="ant-dropdown-link font-semibold text-white hover:text-[#FDC500] duration-100" onClick={(e) => e.preventDefault()}>
            PLANNING SERVICES 
          </NavLink>
        </Dropdown>
        <Dropdown overlay={MenuInvestment}>
          <NavLink to="/investment-products" className="ant-dropdown-link font-semibold text-white hover:text-[#FDC500] duration-100 " onClick={(e) => e.preventDefault()}>
            INVESTMENT PRODUCTS 
          </NavLink>
        </Dropdown>
        <NavLink to="/insights" className='font-semibold text-white hover:text-[#FDC500] duration-100'>INSIGHTS</NavLink>
      </div>
      <div className="w-[20%] h-[100%] flex justify-center items-center phone:hidden smallPhone:hidden">
        <button className="w-[50%] h-[45%] bg-[#003566] hover:text-[#FDC500] duration-150 rounded-md text-white font-medium">
          <Link to='/reg'>Get Started</Link>
        </button>
      </div>

      {/* Mobile view */}
      <div className='MobileView relative  ' id='header'>
        <div className='w-[40%] h-[50%] flex justify-center items-center'>
          {Toggle ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0, y: '100%' }} 
              transition={{ duration: 0.3 }}
            >
              <MdOutlineClear className='text-[1.7rem] text-[#FDFDF7] cursor-pointer' onClick={HandleToggle} />
            </motion.div>
          ) : (
            <IoMenuSharp className=' text-[1.7rem] text-[#FDFDF7] cursor-pointer' onClick={HandleToggle} />
          )}
        </div>
        <AnimatePresence>
        {Toggle && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: '0%' }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5 }}
            className='w-[20rem] h-[28rem] bg-[#000814] absolute z-10 top-[99.9%] right-[-100px] flex justify-center items-center flex-col phone:w-[30rem] phone:h-[30rem] smallPhone:w-[18rem] smallPhone:right-[1px]'
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-[100%] h-[80%]  flex justify-around items-start flex-col px-5"
            >
              <NavLink to="/about" className=' font-semibold text-white hover:text-[#FDC500] duration-100' onClick={HandleClose}>ABOUT</NavLink>
              {/* <Dropdown overlay={menu}> */}
                <NavLink to="/planning-services" className="ant-dropdown-link font-semibold text-white hover:text-[#FDC500] duration-100" onClick={HandleClose}>
                  PLANNING SERVICES 
                </NavLink>
              {/* </Dropdown> */}
              {/* <Dropdown overlay={MenuInvestment}> */}
                <NavLink to="/investment" className="ant-dropdown-link font-semibold text-white hover:text-[#FDC500] duration-100 " onClick={HandleClose}>
                  INVESTMENT PRODUCTS 
                </NavLink>
              {/* </Dropdown> */}
              <NavLink to="/insights" className='font-semibold text-white hover:text-[#FDC500] duration-100' onClick={HandleClose}>INSIGHTS</NavLink>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-[100%] h-[20%]  flex justify-start px-5 items-center"
            >
              <button className="w-[50%] h-[50%] bg-[#003566] hover:text-[#FDC500] duration-150 rounded-md text-white font-medium"><Link to='/reg'>Get Started</Link></button>
            </motion.div>
          </motion.div>
        )}
        </AnimatePresence>
       
      </div>
    </div>
  );
};

export default Header;
