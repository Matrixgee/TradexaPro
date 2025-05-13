import Logo from '../assets/ExpressPro.png';
// import { AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
// import { AiFillGithub } from "react-icons/ai";







const Footer = () => {
  return (
    <div className="w-[100%] h-[100vh] bg-[whitesmoke] flex items-center justify-center flex-col phone:h-auto phone:mt-10" id='footer'>
      <div className="w-[100%] h-[85%] flex items-end justify-center phone:h-auto phone:flex-col phone:items-start phone:p-10 phone:gap-10">
        <div className="w-[30%] h-[70%]  flex items-start justify-center flex-col phone:w-full phone:gap-5 ">
          <div className="w-[80%] h-[60%] phone:w-[40%]  "><img src={Logo} alt="" className='w-[100%] h-[100%] object-contain' /></div>
          <div className="w-[80%] h-[50%] phone:w-[100%] phone:flex phone:flex-col phone:justify-center phone:gap-1 ">
            <div className='w-[60%] h-[20%]  flex items-center justify-center phone:mb-2 '><h1 className='font-bold text-1xl'>Location to HQ</h1></div>
            <div className='w-[100%] h-[20%] flex flex-row '>
              <div className='w-[10%] h-[100%]  flex items-center justify-center'><img src='' alt=""  className='w-[30%] h-[30%] object-contain'/></div>
              <div className='w-[10%] h-[100%]  flex items-center justify-center'></div>
              <div className='w-[80%] h-[100%]  flex items-center'><h1 className='font-small text-1xl text-grey'>23 Valley Lane,Austin</h1></div>
            </div>

            <div className='w-[100%] h-[20%]  flex items-center  flex-row'>
              <div className='w-[10%] h-[80%]  flex items-center justify-center'><img src='' alt=""  className='w-[30%] h-[30%] object-contain'/></div>
              <div className='w-[8%] h-[80%]  flex items-center justify-center'></div>
              <div className='w-[80%] h-[80%] flex items-center'><h1 className='font-semi text-1xl text-grey'>
                <a href ='expresstradepr@gmail.com'>expresstradepr@gmail.com</a>
                </h1>
                </div>
            </div>
          </div>
        </div>
        
        <div className="w-[20%] h-[70%] phone:w-[100%] phone:flex phone:flex-col phone:items-center phone:gap-3 phone:justify-center ">
          <div className='w-[80%] h-[10%] phone:w-[100%] phone:h-auto phone:flex phone:justify-center '><h1 className='font-bold text-1xl '>Customer's Support</h1></div>

          <div className='w-[80%] h-[10%] flex phone:w-[100%] phone:justify-center '>
            <div className='w-[10%] h-[80%]  flex items-center justify-center'><img src='' alt=""  className='w-[30%] h-[30%] object-contain'/></div>
            <div className='w-[10%] h-[80%]  flex items-center justify-center'></div>
            <div className='w-[80%] h-[100%]  flex items-center'><h1 className='font-semi text-1xl text-grey phone:text-sm'>Private Policy</h1></div>
          </div>

          <div className='w-[80] h-[15%] flex phone:w-[100%] phone:justify-center '>
            <div className='w-[10%] h-[100%] flex items-center justify-center'><img src='' alt=""  className='w-[30%] h-[30%] object-contain'/></div>
            <div className='w-[8%] h-[100%]  flex items-center justify-center'></div>
            <div className='w-[80%] h-[100%]  flex items-center'><h1 className='font-semi text-1xl phone:text-sm '>Terms $ Conditions</h1></div>
          </div>
        </div>

        <div className="w-[20%] h-[70%] flex flex-col phone:w-[100%] phone:gap-2 phone:items-center phone:justify-center ">
          <div className='w-[80%] h-[10%] phone:w-[100%] phone:h-auto phone:flex phone:justify-center'><h1 className='font-bold text-1xl '>Planning Service</h1></div>
          <div className='w-[80%] h-[10%] flex phone:w-[100%] phone:justify-center '>
            <div className='w-[10%] h-[80%]  flex items-center justify-center '><img src='' alt=""  className='w-[30%] h-[30%] object-contain'/></div>
            <div className='w-[80%] h-[80%]  flex items-center'><h1 className='font-semi text-1xl text-grey phone:text-sm'>Planning Services</h1></div>
          </div>
      
          <div className='w-[80%] h-[10%] flex phone:w-[100%] phone:justify-center '>
            <div className='w-[10%] h-[80%]  flex items-center justify-center'><img src='' alt=""  className='w-[30%] h-[30%] object-contain'/></div>
            <div className='w-[80%] h-[80%]  flex items-center'><h1 className='font-semi text-1xl text-grey phone:text-sm'>Assets Management</h1></div>
          </div>

          <div className='w-[80%] h-[10%] flex phone:w-[100%] phone:justify-center '>
            <div className='w-[10%] h-[80%]  flex items-center justify-center'><img src='' alt=""  className='w-[30%] h-[30%] object-contain'/></div>
            <div className='w-[80%] h-[80%]  flex items-center'><h1 className='font-semi text-1xl text-grey phone:text-sm'>Alternative Investing</h1></div>
          </div>
                
          <div className='w-[80%] h-[10%] flex phone:w-[100%] phone:justify-center '>
            <div className='w-[10%] h-[80%]  flex items-center justify-center'><img src='' alt=""  className='w-[30%] h-[30%] object-contain'/></div>
            <div className='w-[80%] h-[80%]  flex items-center'><h1 className='font-semi text-1xl text-grey phone:text-sm'>Retirement  Planning</h1></div>
          </div>

          <div className='w-[80%] h-[10%] flex phone:w-[100%] phone:justify-center '>
            <div className='w-[10%] h-[80%] flex items-center justify-center'><img src='' alt=""  className='w-[30%] h-[30%] object-contain'/></div>
            <div className='w-[80%] h-[80%] flex items-center'><h1 className='font-semi text-1xl text-grey phone:text-sm'>Private Wealth</h1></div>
          </div>

        </div>

        <div className="w-[20%] h-[70%] phone:w-[100%] phone:gap-2 phone:items-center phone:justify-center ">
          <div className='w-[80%] h-[10%] phone:w-[100%] phone:h-auto phone:flex phone:justify-center phone:mb-2 '><h1 className='font-bold text-1xl '>Investment Service</h1></div>
          <div className='w-[80%] h-[10%] flex phone:w-[100%] phone:justify-center '>
            <div className='w-[10%] h-[70%] flex items-center justify-center'><img src='' alt=""  className='w-[30%] h-[30%] object-contain'/></div>
            <div className='w-[80%] h-[70%]flex items-center'><h1 className='font-semi text-1xl text-grey phone:text-sm'>Option Trading</h1></div>
          </div>
          <div className='w-[80%] h-[10%] flex phone:w-[100%] phone:justify-center '>
            <div className='w-[10%] h-[70%]  flex items-center justify-center'><img src='' alt=""  className='w-[30%] h-[30%] object-contain'/></div>
            <div className='w-[80%] h-[70%]  flex items-center'><h1 className='font-semi text-1xl text-grey phone:text-sm'>Real Estate</h1></div>
          </div>
          <div className='w-[80%] h-[10%] flex phone:w-[100%] phone:justify-center '>
            <div className='w-[10%] h-[70%]  flex items-center justify-center'><img src='' alt=""  className='w-[30%] h-[30%] object-contain'/></div>
            <div className='w-[80%] h-[70%]  flex items-center'><h1 className='font-semi text-1xl text-grey phone:text-sm'>Stock Market</h1></div>
          </div>
          <div className='w-[80%] h-[10%] flex phone:w-[100%] phone:justify-center '>
            <div className='w-[10%] h-[80%] flex items-center justify-center'><img src='' alt=""  className='w-[30%] h-[30%] object-contain'/></div>
            <div className='w-[80%] h-[80%]  flex items-center'><h1 className='font-semi text-1xl text-grey phone:text-sm'>Infrastucture</h1></div>
          </div>
          <div className='w-[80%] h-[10%] flex phone:w-[100%] phone:justify-center '>
            <div className='w-[10%] h-[80%]  flex items-center justify-center'><img src='' alt=""  className='w-[30%] h-[30%] object-contain'/></div>
            <div className='w-[80%] h-[80%]  flex items-center'><h1 className='font-semi text-1xl text-grey phone:text-sm'>Forex Trading</h1></div>
          </div>
          <div className='w-[80%] h-[10%] flex phone:w-[100%] phone:justify-center '>
            <div className='w-[10%] h-[80%]  flex items-center justify-center'><img src='' alt=""  className='w-[30%] h-[30%] object-contain'/></div>
            <div className='w-[80%] h-[80%]  flex items-center'><h1 className='font-semi text-1xl text-grey phone:text-sm'>Cryto Asset</h1></div>
          </div>
          <div className='w-[80%] h-[10%] flex phone:w-[100%] phone:justify-center '>
            <div className='w-[10%] h-[80%]  flex items-center justify-center'><img src='' alt=""  className='w-[30%] h-[30%] object-contain'/></div>
            <div className='w-[80%] h-[80%]  flex items-center'><h1 className='font-semi text-1xl text-grey phone:text-sm'>Fixed Income</h1></div>
          </div>
          <div className='w-[80%] h-[10%] flex phone:w-[100%] phone:justify-center '>
            <div className='w-[10%] h-[80%]  flex items-center justify-center'><img src='' alt=""  className='w-[30%] h-[30%] object-contain'/></div>
            <div className='w-[80%] h-[80%]  flex items-center'><h1 className='font-semi text-1xl text-grey phone:text-sm'>Agriculture</h1></div>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[20%] flex items-center justify-center phone:h-[50px] phone:justify-between phone:px-2">
        <div className='w-[45%] h-[100%]  flex items-center phone:w-[60%]'><h1 className='phone:text-[10px] '>© EXPRESS TRADE PRO, All rights reserved</h1></div>
        <div className='w-[45%] h-[100%] flex items-center justify-center phone:w-[30%] phone:gap-2 '>
          <div className='w-[10%] h-[30%] phone:w-[20%] phone:h-[40%] '><BsFacebook className='w-full h-full' /></div>
          {/* <div  className='w-[10%] h-[30%] phone:w-[20%] phone:h-[40%] '><AiFillLinkedin className='w-full h-full' /></div> */}
          {/* <div  className='w-[10%] h-[30%] phone:w-[20%] phone:h-[40%] '><AiFillGithub className='w-full h-full' /></div> */}
        </div>
      </div>
    </div>
  )
}

export default Footer