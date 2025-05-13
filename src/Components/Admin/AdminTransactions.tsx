import axios from "axios";
import {useEffect, useState,useRef} from "react";
import {BsEye} from "react-icons/bs";
import {CiMenuKebab} from "react-icons/ci";
import {useDispatch, useSelector} from "react-redux";
import { Admintransactionview } from "../../Function/Slice";
import toast from "react-hot-toast";
import {Modal} from "antd";
import RootState from "../../Function/Rootstate";



const AdminTransactions = () => {
    const dispatch = useDispatch();
    const userToken = useSelector((state: RootState) => state.mySlice.token);
    const AdminTrans = useSelector((state: RootState) => state.mySlice.adminTransactions);

    const [menuIndex, setMenuIndex] = useState<number | null>(null);
    const [showMenu, setShowMenu] = useState(Array(AdminTrans?.length || 0).fill(false));
    const menuRefs = useRef<HTMLDivElement[]>(Array(AdminTrans?.length || 0).fill(null));
    const [loading, setLoading] = useState<boolean>(false);
    const [openConfirm, setOpenConfirm] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState('');


    const handleRequestError = (error: any) => {
        const errorMsg = error.response ? error.response.data.message : 'An error occurred.';
        toast.error(errorMsg);
    };

    useEffect(() => {
        getAllTransactions();
    }, []);

    const getAllTransactions = async () => {
        const url = 'https://exp-pro.onrender.com/api/admin/allTransactions';
        const token = userToken;
        const headers = { Authorization: `Bearer ${token}` };
        try {
            const response = await axios.get(url, { headers });
            dispatch(Admintransactionview(response.data.data));
        } catch (error) {
           handleRequestError(error)
        }
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (
            menuRefs.current &&
            menuRefs.current.every((ref) => ref && !ref.contains(event.target as Node))
        ) {
            setMenuIndex(null);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [AdminTrans, menuIndex]);

    const openProofOfPayment = (url: any) => {
        window.open(url, "_blank");
    };

    const handleShow = (index: number, item_id: string) => {
        const newShowMenu = [...showMenu];
        newShowMenu[index] = !newShowMenu[index];
        setShowMenu(newShowMenu);
        setSelectedItemId(item_id);
        setMenuIndex(index);
    };

    const handleConfirm = () => {
        if (!selectedItemId) return;
        const toastLoadingId = toast.loading("Please wait...");
        setLoading(true);
        const url = `https://exp-pro.onrender.com/api/admin/approveDeposit/${selectedItemId}`;
        const data = {};
        const token = userToken;
        const headers = { Authorization: `Bearer ${token}` };
        axios.put(url, data, { headers })
            .then((response) => {
                setLoading(false);
                toast.dismiss(toastLoadingId);
                console.log(response);
                setLoading(false);
                getAllTransactions();
                toast.success(`Payment Confirmed`);
                setOpenConfirm(false);
            })
            .catch((error) => {
                setLoading(false);
                toast.dismiss(toastLoadingId);
                console.log(error);
            });
    };

    const handleDecline = () => {
        const toastLoadingId = toast.loading("Please wait...");
        setLoading(true);
        const url = `https://exp-pro.onrender.com/api/admin/declineDeposit/${selectedItemId}`;
        const data = {};
        const token = userToken;
        const headers = { Authorization: `Bearer ${token}` };
        axios.put(url, data, { headers })
            .then((response) => {
                setLoading(false);
                toast.dismiss(toastLoadingId);
                console.log(response);
                setLoading(false);
                getAllTransactions();
                toast.success(`Payment Declined`);
            })
            .catch((error) => {
                setLoading(false);
                toast.dismiss(toastLoadingId);
                handleRequestError(error)
            });
    };


    return (
        <>
            <div className="w-full h-screen flex flex-col gap-2 overflow-y-auto">
                {AdminTrans?.length > 0 ? (
                    <>
                        <div className="w-full h-max border border-gray-200 bg-white rounded overflow-x-auto">
                            <div className="w-max h-10 border-t border-t-gray-300 pl-6 flex gap-4">
                                <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                    Reference
                                </div>
                                <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                    Mode
                                </div>
                                <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                    User
                                </div>
                                <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                    Amount
                                </div>
                                <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                    Status
                                </div>
                                <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                    Date
                                </div>
                                <div className="w-[5rem] h-full flex items-center text-xs text-black font-medium">
                                    Action
                                </div>
                                <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                    Receipt
                                </div>
                            </div>
                            <div className="w-full h-max flex flex-col">
                                {AdminTrans.map((item: any, index: number) => (
                                    <div  
                                        className="w-max h-10 phone:h-20 border-t border-t-gray-300 pl-6 flex gap-4"
                                        key={index}
                                    >
                                        <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                            #
                                            {item?._id
                                                ?.slice(-10)
                                                .toUpperCase()}
                                        </div>
                                        <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                            {item?.type}/{item?.mode}
                                        </div>
                                        <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                            {item?.fullName}
                                        </div>
                                        <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                            ${item?.amount}
                                        </div>
                                        <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] ">
                                            <p
                                                className={`w-max h-max px-3 py-1 phone:py-1 text-white rounded-full flex items-center justify-center ${
                                                    item?.status === "approved"
                                                        ? "bg-green-400"
                                                        : item?.status ===
                                                          "pending"
                                                        ? "bg-yellow-400"
                                                        : item?.status ===
                                                          "rejected"
                                                        ? "bg-red-400"
                                                        : ""
                                                }`}
                                            >
                                                {item?.status}
                                            </p>
                                        </div>
                                        <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                        {new Date(item?.createdAt).toLocaleDateString()}
                                        </div>
                                        <div className="w-[5rem] h-full flex items-center text-xs text-black font-medium relative">
                                            <CiMenuKebab
                                                className="w-6 h-6 cursor-pointer"
                                                onClick={() =>
                                                    handleShow(index,item?._id)
                                                }
                                            />
                                            {showMenu[index] && (
                                                <div className="absolute top-12 right-[10px] z-10 w-32 h-max flex flex-col bg-orange-100 gap-2 p-2">
                                                    <div
                                                        className="w-full h-8 flex items-center justify-center bg-white cursor-pointer"
                                                        onClick={() => 
                                                            setOpenConfirm(true)
                                                        }
                                                    >
                                                        Confirm
                                                    </div>
                                                    <div
                                                        className="w-full h-8 flex items-center justify-center bg-white cursor-pointer"
                                                        onClick={handleDecline}
                                                    >
                                                        Decline
                                                    </div>
                                                    {/* <div className="w-full h-8 flex items-center justify-center bg-white cursor-pointer">
                                                        Reject
                                                    </div>
                                                    <div className="w-full h-8 flex items-center justify-center bg-white cursor-pointer">
                                                        Delete
                                                    </div> */}
                                                </div>
                                            )}
                                        </div>
                                        <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                            <BsEye
                                                className="w-5 h-5 cursor-pointer"
                                                onClick={() =>
                                                    openProofOfPayment(
                                                        item?.image
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="w-full h-max border border-[#cd9f0c] bg-[#fef7e2] rounded">
                            <div className="w-full h-24 flex flex-col items-center justify-center gap-2">
                                <p className="text-[#cd9f0c]">
                                    No Transaction Recorded Yet
                                </p>
                            </div>
                        </div>
                    </>
                )}
                    <Modal
                open={openConfirm}
                onCancel={() => setOpenConfirm(false)}
                cancelButtonProps={{hidden: true}}
                okButtonProps={{
                    hidden: true,
                }}
                closeIcon={true}
            >
                <div className="w-full h-max px-12 phone:px-0 py-5 flex flex-col items-center gap-5">
                    <p className="text-[rgb(54,74,79)] text-2xl font-semibold phone:text-xl">
                        Confirm Payment
                    </p>
                    <p>Are you sure you want to confirm this payment?</p>
                    <div className="w-max h-max flex gap-6">
                        <button
                            className="w-max h-max px-6 py-2 bg-[#031d44] text-white rounded text-sm font-semibold"
                            onClick={handleConfirm}
                            disabled={loading}
                        >
                            {loading ? "LOADING..." : "CONFIRM"}
                        </button>
                        <button
                            className="w-max h-max px-6 py-2 bg-red-500 text-white rounded text-sm font-semibold"
                            onClick={() => setOpenConfirm(false)}
                            disabled={loading}
                        >
                            No
                        </button>
                    </div>
                </div>
            </Modal>
            </div>
        
        </>
    );
};

export default AdminTransactions;