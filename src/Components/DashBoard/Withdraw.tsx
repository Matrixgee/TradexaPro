import {Modal} from "antd";
// import axios from "axios";
import {useState} from "react";
import toast from "react-hot-toast";
import {useSelector} from "react-redux";
// import {useNavigate} from "react-router";
import RootState from "../../Function/Rootstate";

const Withdraw = () => {
    const [openModal, setOpenModal] = useState(false);
    const [amount, setAmount] = useState(0);
    const [mode, setMode] = useState("");
    // const nav = useNavigate();
    const user = useSelector(
        (state: RootState) => state.mySlice.tradeUser
    );
    // console.log(user);

    const handleWithdraw = () => {
        if (!amount && !mode) {
            alert("Enter Value");
        } else if (user.balance < amount) {
            toast.error("Insufficient Balance");
        } else {
            setOpenModal(true);
        }
    };
    // const userToken = useSelector(
    //     (state: RootState) => state.mySlice.token
    // );

    

    // const handlePostWithdrawal = () => {
    //     const toastLoadingId = toast.loading("Please Wait...");
    //     const data = {
    //         amount: amount,
    //         withdrawMode: mode,
    //     };
    //     const url = "https://exp-pro.onrender.com/api/user/withdraw";
    //     const token = userToken;

    //     const headers = {
    //         Authorization: `Bearer ${token}`,
    //     };
    //     axios
    //         .post(url, data, {headers})
    //         .then((response) => {
    //             toast.dismiss(toastLoadingId);
    //             toast.success(response?.data?.message, {duration: 5000});
    //             console.log(response);
    //             setTimeout(() => {
    //                 nav("/user/dashboard");
    //             }, 3000);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //             toast.dismiss(toastLoadingId);
    //             toast.error(error?.response?.data?.message);
    //         });
    // };

    return (
        <>
            <div className="w-full h-max phone:flex phone:justify-center phone:items-center phone:h-full ">
                <div className="w-full h-max flex items-center flex-col px-10 phone:px-4 py-8 gap-3">
                    <div className="w-1/2 phone:w-full h-max bg-white rounded px-20 phone:px-5 py-5 flex flex-col gap-5 items-center">
                        <p className="text-3xl font-semibold text-[rgb(54,74,99)] text-center phone:text-xl">
                            Request New Withdrawal
                        </p>
                        <div className="w-full h-max flex flex-col gap-2">
                            <p className="text-sm text-[rgb(52,67,87)] font-medium">
                                Amount <span className="text-xs ">(USD)</span>
                            </p>
                            <input
                                type="number"
                                className="w-full h-10 border border-[rgb(128,148,174)] outline-1 pl-2 outline-[#0238ac] rounded"
                                value={amount}
                                onChange={(e) => setAmount(Number(e.target.value))}
                                placeholder="Input amount here..."
                            />
                        </div>
                        <select
                            name=""
                            id=""
                            className="w-full h-10 border border-[rgb(128,148,174)] outline-1 outline-[#0238ac] rounded"
                            onChange={(e) => setMode(e.target.value)}
                            value={mode}
                        >
                            <option value="">Select Method</option>
                            <option value="Bitcoin">Bitcoin</option>
                            <option value="Ethereum">Ethereum</option>
                        </select>
                        <button
                            className="w-full h-10 bg-[#0238ac] text-white rounded text-sm font-semibold"
                            onClick={handleWithdraw}
                        >
                            WITHDRAW
                        </button>
                    </div>
                </div>
            </div>
            <Modal
                open={openModal}
                onCancel={() => setOpenModal(false)}
                cancelButtonProps={{hidden: true}}
                okButtonProps={{
                    hidden: true,
                }}
                closeIcon={true}
            >
                <div className="w-full h-max flex flex-col items-center gap-5">
                    <p className="text-lg">Please Confirm </p>
                    <div className="w-full h-max text-lg">
                        <p>
                            Amount: <span>{amount}</span>
                        </p>
                        <p>
                            Mode: <span>{mode.toUpperCase()}</span>
                        </p>
                    </div>
                    <div className="w-full h-max flex gap-4 items-center justify-center">
                        <button
                            className="w-max h-max px-4 py-2 bg-red-500 rounded text-white font-semibold"
                            onClick={() => {
                                setAmount(0);
                                setMode("");
                                setOpenModal(false);
                            }}
                        >
                            CANCEL
                        </button>
                        <button
                            className="w-max h-max px-4 py-2 bg-green-500 rounded text-white font-semibold"
                            
                        >
                            CONFIRM
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Withdraw;