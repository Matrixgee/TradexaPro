import  { FormEvent, useState } from 'react';
import Logo from '../assets/ExpressPro.png'
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Modal } from 'antd';




const Register = () => {

  const [fullName, setfullName] = useState<string> ('')
  const [userName, setuserName] = useState <string> ('')
  const [email, setemail] = useState <string> ('')
  const [password, setpassword] = useState <string> ('')
  const [confirmPassword, setconfirmPassword] = useState <string> ('')
  const [ShowPassword, setShowPassword] = useState<boolean>(false)
const [ShowConfirmpassword, setShowConfirmpassword] = useState<boolean>(false)
const [loading, setloading] = useState<boolean>(false)
const [ShowModal, setShowModal] = useState <boolean>(false)

const data = {fullName,userName,password,email,confirmPassword}
const url = 'https://exp-pro.onrender.com/api/user/signup'

// const Nav = useNavigate()
  


const HandleShowPassword = ()=>{
setShowPassword(!ShowPassword)
}
const HandleConfirmPassword = ()=>{
  setShowConfirmpassword(!ShowConfirmpassword)
}


const handleRegister = async (e: FormEvent) => {
  e.preventDefault();

  const passwordRegex = /^(?=.*[a-zA-Z0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/;
  const isValidPassword = passwordRegex.test(password);

  if (!fullName || !userName || !password || !email || !confirmPassword) {
    toast.error('Please fill all the fields');
  } else if (confirmPassword !== password) {
    toast.error('Passwords do not match');
  } else if (!isValidPassword) {
    toast.error('Password must contain at least one special character');
  } else {
    const toastLoadingId = toast.loading("Please wait...");
    try {
      setloading(true);
      const response = await axios.post(url, data);
      toast.success(response.data.message);
      setShowModal(true);
      
      setfullName('');
      setuserName('');
      setemail('');
      setpassword('');
      setconfirmPassword('');
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const errorMsg = error.response?.data?.message || 'An unexpected error occurred';
        toast.error(errorMsg, { duration: 3000 });
      } else {
        toast.error('Error occurred');
      }
    } finally {
      setloading(false);
      toast.dismiss(toastLoadingId);
    }
  }
};





  return (
    <div className="w-[100%] h-[55rem] bg-[#023e8a] flex justify-center items-center phone:h-[60rem]">
      <div className="w-[35%] h-[95%] bg-[#FDFDF7] rounded-lg flex justify-center items-center flex-col phone:w-[85%]">
        <div className="w-[100%] h-[12%] flex justify-center items-center">
          <img src={Logo} alt="" className='w-[70%] h-[70%] object-contain' />
        </div>
        <div className='w-[100%] h-[11%] flex justify-center items-start px-6 flex-col'>
          <h2 className='font-semibold text-[1.7rem] text-[#031d44]'>Register</h2>
          <p className=' text-sm font-medium text-[#979dac]'>Enter your details below and create an account to get started.</p>
        </div>
        <form action="" className='w-[90%] h-[70%]'>
          <div className='w-[100%] h-[15.5%]  flex justify-center items-start flex-col'>
            <label htmlFor="" className='font-semibold text-[#031d44]'>FullName</label>
            <input type="text"  placeholder='John Doe' className='w-[100%] h-[50%] px-3 shadow-sm  rounded-lg outline-none ' onChange={(e)=>setfullName(e.target.value)} value={fullName}/>
          </div>
          <div className='w-[100%] h-[15.5%]  flex justify-center items-start flex-col'>
            <label htmlFor="" className='font-semibold text-[#031d44]'>UserName</label>
            <input type="text"  placeholder='e.g Johndoe' className='w-[100%] h-[50%] px-3 shadow-sm  rounded-lg outline-none' onChange={(e)=>setuserName(e.target.value)} value={userName}/>
          </div>
          <div className='w-[100%] h-[15.5%]  flex justify-center items-start flex-col'>
            <label htmlFor="" className='font-semibold text-[#031d44]'>Email</label>
            <input type="email"  placeholder='e.g johndoe@mail.com' className='w-[100%] h-[50%] px-3 shadow-sm  rounded-lg outline-none' onChange={(e)=>setemail(e.target.value)} value={email}/>
          </div>
          <div className='w-[100%] h-[15.5%]  flex justify-center items-start flex-col'>
            <label htmlFor="" className='font-semibold text-[#031d44]'>Password</label>
            <div className='w-[100%] h-[50%] flex justify-center items-center bg-white rounded-lg shadow-sm'>
              <input type={ShowPassword ? 'text' : 'password'}   placeholder='******' className='w-[100%] h-[100%] px-3 rounded-lg outline-none' onChange={(e)=>setpassword(e.target.value)} value={password}/>
              {
              ShowPassword ? <FaRegEye className='w-[30%] h-[30%] cursor-pointer' onClick={HandleShowPassword} /> : <FaRegEyeSlash className='w-[30%] h-[30%] cursor-pointer' onClick={HandleShowPassword}/>
              }
              
            </div>
          </div>
          <div className='w-[100%] h-[15.5%]  flex justify-center items-start flex-col'>
            <label htmlFor="" className='font-semibold text-[#031d44]'>Confirm Password</label>
            <div className='w-[100%] h-[50%] flex justify-center items-center bg-white rounded-lg shadow-sm'>
              <input type={ShowConfirmpassword ? "text" : "password"}  placeholder='******' className='w-[100%] h-[100%] px-3 rounded-lg outline-none' onChange={(e)=>setconfirmPassword(e.target.value)} value={confirmPassword}/>
              {
              ShowConfirmpassword ? <FaRegEye className='w-[30%] h-[30%] cursor-pointer' onClick={HandleConfirmPassword} /> : <FaRegEyeSlash className='w-[30%] h-[30%] cursor-pointer' onClick={HandleConfirmPassword}/>
              }
            </div>
          </div>
          <div className='w-[100%] h-[23%] flex justify-around items-center flex-col'>
            <button className='w-[100%] h-[30%] bg-[#023e8a] rounded-md text-[#Fdfdf7]' onClick={handleRegister} disabled={loading}>
              {
                loading ? 'Loading' : 'Register'
              }
            </button>
            <p>Already have an account? <Link to='/logs' className='font-semibold text-[#031d44]'>Login</Link> </p>
          </div>
        </form>
      </div>
      <Modal title="Registration Successful" open={ShowModal} onOk={() => setShowModal(false)} onCancel={() => setShowModal(false)}>
        <p>Your account has been registered successfully. Please check your email for verification.</p>
      </Modal>
    </div>
  )
}

export default Register;