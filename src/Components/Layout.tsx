import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"
import { FaArrowUp, FaArrowDown } from "react-icons/fa"
import { useState } from "react"
import  { Link } from 'react-scroll'


const Arrow = ()=>{

const [scroll, setscroll] = useState<boolean>(false)

const Onscroll = ()=>{
  if(window.scrollY >= 1200){
    setscroll(true)
  }else{
    setscroll(false)
  }
}
 window.addEventListener('scroll',Onscroll)

  return (
    <div className="w-[50px] h-[50px] bg-blue-600  rounded-lg flex justify-center items-center fixed bottom-3 right-4 cursor-pointer">{
      !scroll ? <Link to ='footer' smooth={true} duration={1000}> <FaArrowDown className="text-white"/> </Link>
      
      : <Link to ='home' smooth={true} duration={1000}>
        <FaArrowUp className="text-white"/>
      </Link>
    }
      </div>
  )
}










const Layout = () => {
  return (
<>
 <Arrow/>
<Header/>
<Outlet/>
<Footer/>
</>
  )
}

export default Layout