import { Link } from "react-router-dom";

const ForgetPassword = () => {
  return (
    <div className="w-[100%] h-[100vh]  flex justify-center items-center">
      <div className="w-[90%] h-[60%] bg-[#FDFDF7] shadow-xl rounded-md flex justify-around items-center flex-col phone:w-[90%] phone:h-[45%]">
        <div className="w-[100%] h-[20%] flex justify-center items-center ">
          <h2 className=" font-semibold text-2xl text-[#0238ea]">
            Forget Password
          </h2>
        </div>
        <div className="w-[100%] h-[25%] flex justify-center items-center">
          <input
            type="text"
            className="w-[80%] h-[50%] rounded-sm bg-[#ebf2fa] px-4 outline-none"
            placeholder="Enter your mail"
          />
        </div>
        <div className="w-[50%] h-[20%] flex justify-center items-center">
          <button className="w-[60%] h-[55%] bg-[#0238ea] rounded-lg text-[#FDFDF7] font-medium">
            SUBMIT
          </button>
        </div>
        <div className="w-[80%] h-[15%] flex justify-center items-center">
          <p className=" font-medium  text-lg text-[#031d44]">
            Back to{" "}
            <Link to="/auth/login" className="text-green-500">
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
