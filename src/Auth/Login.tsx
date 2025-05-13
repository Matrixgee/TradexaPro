import { Link } from "react-router-dom";
import Logo from "../assets/ExpressPro.png";
import { FormEvent, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { userdata, userToken } from "../Function/Slice";

interface LoginProps {
  test;
}

const Login: React.FC<LoginProps> = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setshowPassword] = useState(false);
  const data = { userName, password };
  const url = "https://exp-pro-psi.vercel.app/api/user/login";

  const Nav = useNavigate();
  const dispatch = useDispatch();

  const HandleShowPassword = () => {
    setshowPassword(!showPassword);
  };

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    if (!userName || !password) {
      toast.error("Please input all fields");
      return;
    }
    const toastLoadingId = toast.loading("Please wait...");
    setLoading(true);
    try {
      const response = await axios.post(url, data);
      const { token, data: userData } = response.data;

      localStorage.setItem("Token", token);
      localStorage.setItem("userName", userName);

      if (userData.isAdmin) {
        toast.success("Welcome Admin", { duration: 2000 });
        setTimeout(() => {
          Nav("/admin/testing");
        }, 1000);
      } else {
        toast.success(response.data.message, { duration: 2000 });
        setTimeout(() => {
          Nav("/user/overview");
        }, 2000);
      }

      dispatch(userdata(userData));
      dispatch(userToken(token));
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const errorMsg =
          error.response?.data?.message || "An unexpected error occurred";
        toast.error(errorMsg, { duration: 3000 });
      } else {
        toast.error("Error occurred");
      }
    } finally {
      setLoading(false);
      toast.dismiss(toastLoadingId);
    }
  };

  return (
    <div className="w-[100%] h-[100vh] bg-[#023e8a] flex justify-center items-center">
      <div className="w-[35%] h-[90%] bg-[#FDFDF7] rounded-lg flex justify-center gap-[6%] items-center flex-col phone:w-[80%]">
        <div className="w-[100%] h-[17%] flex justify-center items-center">
          <img src={Logo} alt="" className="w-[90%] h-[90%] object-contain" />
        </div>
        <div className="w-[100%] h-[15%]  flex justify-center px-4  items-center flex-col  smallPhone:w-[90%]">
          <div className="w-[90%] h-[40%] flex flex-col justify-center items-center">
            <h2 className="text-[1.5rem] font-medium text-[#0466c8]">
              Welcome Back!
            </h2>
            <p className=" text-sm  font-semibold  text-[#979dac] smallPhone:text-[10px]">
              Glad to see you again 👋 Login to your account below
            </p>
          </div>
        </div>
        <form
          action=""
          className="w-[90%] h-[50%]  justify-around items-center flex flex-col"
        >
          <div className="w-[100%] h-[35%]  flex justify-center items-start flex-col ">
            <label htmlFor="" className="font-semibold text-[#031d44]">
              Username
            </label>
            <input
              type="text"
              className="w-[100%] h-[55%] rounded-md shadow-sm outline-none px-2 phone:h-[50%]"
              placeholder="e.g Johndoe"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="w-[100%] h-[35%]  flex justify-center items-start flex-col ">
            <label htmlFor="" className="font-semibold text-[#031d44]">
              Password
            </label>
            <div className="w-[100%] h-[45%] flex justify-center items-center bg-white rounded-lg shadow-sm">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="******"
                className="w-[100%] h-[100%] px-3 rounded-lg outline-none"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              {showPassword ? (
                <FaRegEye
                  className="w-[30%] h-[30%] cursor-pointer"
                  onClick={HandleShowPassword}
                />
              ) : (
                <FaRegEyeSlash
                  className="w-[30%] h-[30%] cursor-pointer"
                  onClick={HandleShowPassword}
                />
              )}
            </div>
          </div>
          <div className="w-[100%] h-[40%]  flex justify-around items-center flex-col ">
            <div className=" w-[100%] h-[30%] flex justify-end items-center">
              <Link to="/forgetpass" className="text-red-500 font-semibold">
                Forget Password?
              </Link>
            </div>
            <button
              className="w-[100%] h-[45%] bg-[#023e8a] text-[#FDFDF7] font-semibold rounded-md phone:h-[40%]"
              onClick={handleLogin}
            >
              {loading ? "Loading" : "Login"}
            </button>
            {/* <div className='w-[70%] h-[40%]  flex justify-center items-center'> */}
            <p className="text-[#7d8597]">
              Don't have an account ?{" "}
              <Link to="/reg" className="font-semibold text-[#031d44]">
                Sign Up
              </Link>{" "}
            </p>
            {/* </div> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
