import {Modal} from "antd";
import axios from "axios";
import {useEffect, useState} from "react";
import toast from "react-hot-toast";
import {FaAngleRight} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import { setOneUser } from "../../Function/Slice";
import RootState from "../../Function/Rootstate";

const Profile = () => {
    const user = useSelector(
        (state:  RootState) => state.mySlice.tradeUser
    );
    const oneUserData = useSelector(
        (state: RootState) => state.mySlice.oneUser
    );
    
    const dispatch = useDispatch();

    const [edit, setEdit] = useState<boolean>(false);
    const [change, setChange] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("");
    const [fullName, setFullName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phoneNo, setPhoneNo] = useState<string>("");
    const [dob, setDob] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [postal, setPostal] = useState<string>("");
    const [country, setCountry] = useState<string>("");

    const toggleEdit = () => {
        setEdit(!edit);
    };
    const userToken = useSelector(
        (state: RootState) => state.mySlice.token
    );

    
    const handleUpdate = (e: any) => {
        e.preventDefault();
        const url = "https://exp-pro.onrender.com/api/user/edit";
        const data: any = {};
        const token = userToken;

        const headers = {
            Authorization: `Bearer ${token}`,
        };

        if (userName !== "") data.userName = userName;
        if (fullName !== "") data.fullName = fullName;
        if (email !== "") data.email = email;
        if (phoneNo !== "") data.phoneNumber = phoneNo;
        if (dob !== "") data.dateOfBirth = dob;
        if (address !== "") data.address = address;
        if (postal !== "") data.postalCode = postal;
        if (country !== "") data.country = country;

        if (Object.keys(data).length === 0) {
            alert("No fields to update.");
            return;
        }
        axios
            .put(url, data, {headers})
            .then((response) => {
                toast.success(response?.data?.message);
                // console.log(response);
                setEdit(false);
                getOne();
            })
            .catch((error) => {
                console.log(error);
                toast.success(error?.response?.data?.error?.message);
            });
    };

    const getOne = () => {
  const url = `https://exp-pro.onrender.com/api/user/userprofile/${user._id}`;

        axios
            .get(url)
            .then((response) => {
                // console.log(response);
                dispatch(setOneUser(response.data.data));
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getOne();
    }, []);

    return (
        <>
            <div className="w-full h-[ 80vh ]   flex flex-col">
                <p className="text-xl text-[#d0d0d0] font-semibold phone:text-lg ">
                    Personal Information
                </p>
                <p className="text-sm text-[#cbcbcb] font-medium phone:text-xs">
                    Basic info, like your name and address, that you use here.
                </p>
                <div className="w-full h-[100px] mt-5 ">
                    <div
                        onClick={toggleEdit}
                        className="w-full h-20 border-b border-b-gray-300 flex justify-between items-center cursor-pointer px-4"
                    >
                        <div className="w-1/2 h-[10%] flex items-center justify-between phone:flex-col phone:items-start phone:justify-center phone:gap-2">
                            <p className="text-[#aeaeae] text-sm">
                                Full Name
                            </p>
                            <p className="text-[whitesmoke] text-base phone:text-sm">
                                {oneUserData?.fullName}
                            </p>
                        </div>
                        <span className="w-max h-max rounded-full bg-gray-300 text-gray-400 p-2 flex items-center justify-center">
                            <FaAngleRight className="w-3 h-3" />
                        </span>
                    </div>
                    <div
                        onClick={toggleEdit}
                        className="w-full h-20 border-b border-b-gray-300 flex justify-between items-center cursor-pointer px-4"
                    >
                        <div className="w-1/2 h-full flex items-center justify-between phone:flex-col phone:items-start phone:justify-center phone:gap-2">
                            <p className="text-[#aeaeae] text-sm">
                                Email
                            </p>
                            <p className="text-[whitesmoke] text-base phone:text-sm">
                                {oneUserData?.email}
                            </p>
                        </div>
                        <span className="w-max h-max rounded-full bg-gray-300 text-gray-400 p-2 flex items-center justify-center">
                            <FaAngleRight className="w-3 h-3" />
                        </span>
                    </div>
                    <div
                        onClick={toggleEdit}
                        className="w-full h-20 border-b border-b-gray-300 flex justify-between items-center cursor-pointer px-4"
                    >
                        <div className="w-1/2 h-full flex items-center justify-between phone:flex-col phone:items-start phone:justify-center phone:gap-2">
                            <p className="text-[#aeaeae] text-sm">
                                Phone Number
                            </p>
                            <p className="text-[whitesmoke] text-base phone:text-sm">
                                {/* {oneUserData?.phoneNumber} */}
                            </p>
                        </div>
                        <span className="w-max h-max rounded-full bg-gray-300 text-gray-400 p-2 flex items-center justify-center">
                            <FaAngleRight className="w-3 h-3" />
                        </span>
                    </div>
                    <div
                        onClick={toggleEdit}
                        className="w-full h-20 border-b border-b-gray-300 flex justify-between items-center cursor-pointer px-4"
                    >
                        <div className="w-1/2 h-full flex items-center justify-between phone:flex-col phone:items-start phone:justify-center phone:gap-2">
                            <p className="text-[#aeaeae] text-sm">
                                Date of birth
                            </p>
                            <p className="text-[whitesmoke] text-base phone:text-sm">
                                {/* {oneUserData.dateOfBirth} */}
                            </p>
                        </div>
                        <span className="w-max h-max rounded-full bg-gray-300 text-gray-400 p-2 flex items-center justify-center">
                            <FaAngleRight className="w-3 h-3" />
                        </span>
                    </div>
                    <div
                        onClick={toggleEdit}
                        className="w-full h-20 flex justify-between items-center cursor-pointer px-4"
                    >
                        <div className="w-1/2 h-full flex items-center justify-between phone:flex-col phone:items-start phone:justify-center phone:gap-2">
                            <p className="text-[#aeaeae] text-sm">
                                Address
                            </p>
                            <p className="text-[whitesmoke] text-base phone:text-sm">
                                {/* {`${oneUserData?.address} ${oneUserData?.country} ${oneUserData?.postalCode}`} */}
                            </p>
                        </div>
                        <span className="w-max h-max rounded-full bg-gray-300 text-gray-400 p-2 flex items-center justify-center">
                            <FaAngleRight className="w-3 h-3" />
                        </span>
                    </div>
                </div>
            </div>
            <Modal
                open={edit}
                onCancel={toggleEdit}
                cancelButtonProps={{hidden: true}}
                okButtonProps={{
                    hidden: true,
                }}
                closeIcon={true}
                width={750}
            >
                <div className="w-full h-max px-12 phone:px-0 py-5 flex flex-col items-center gap-5">
                    <p className="text-[rgb(54,74,79)] text-lg font-semibold phone:text-xl w-full">
                        Update Profile
                    </p>
                    <div className="w-full h-max">
                        <div className="w-full h-12 flex items-center gap-4 border-b border-b-gray-300">
                            <div
                                className={`w-max h-full flex items-center ${
                                    change
                                        ? ""
                                        : "border-b-2 border-b-[#0238ac]"
                                }  cursor-pointer`}
                                onClick={() => setChange(false)}
                            >
                                Personal
                            </div>
                            <div
                                className={`w-max h-full flex items-center ${
                                    change
                                        ? "border-b-2 border-b-[#0238ac]"
                                        : ""
                                }  cursor-pointer`}
                                onClick={() => setChange(true)}
                            >
                                Address
                            </div>
                        </div>
                        {change ? (
                            <>
                                <div className="w-full h-max flex mt-8 flex-col gap-4">
                                    <div className="w-full h-max flex flex-col gap-2">
                                        <p className="font-medium text-[rgb(52,67,87)]">
                                            Address
                                        </p>
                                        <input
                                            type="text"
                                            className="w-full h-11 border border-gray-300 rounded pl-4"
                                            onChange={(e) =>
                                                setAddress(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="w-full h-max flex justify-between gap-8">
                                        <div className="w-1/2 h-max flex flex-col gap-2">
                                            <p className="font-medium text-[rgb(52,67,87)]">
                                                Postal
                                            </p>
                                            <input
                                                type="text"
                                                className="w-full h-11 border border-gray-300 rounded pl-4"
                                                onChange={(e) =>
                                                    setPostal(e.target.value)
                                                }
                                            />
                                        </div>
                                        <div className="w-1/2 h-max flex flex-col gap-2">
                                            <p className="font-medium text-[rgb(52,67,87)]">
                                                Country
                                            </p>
                                            <input
                                                type="text"
                                                className="w-full h-11 border border-gray-300 rounded pl-4"
                                                onChange={(e) =>
                                                    setCountry(e.target.value)
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="w-full h-max mt-8 flex flex-col gap-4">
                                    <div className="w-full h-max flex justify-between gap-8">
                                        <div className="w-1/2 h-max flex flex-col gap-2">
                                            <p className="font-medium text-[rgb(52,67,87)]">
                                                Username
                                            </p>
                                            <input
                                                type="text"
                                                className="w-full h-11 border border-gray-300 rounded pl-4"
                                                onChange={(e) =>
                                                    setUserName(e.target.value)
                                                }
                                            />
                                        </div>
                                        <div className="w-1/2 h-max flex flex-col gap-2">
                                            <p className="font-medium text-[rgb(52,67,87)]">
                                                Fullname
                                            </p>
                                            <input
                                                type="text"
                                                className="w-full h-11 border border-gray-300 rounded pl-4"
                                                onChange={(e) =>
                                                    setFullName(e.target.value)
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full h-max flex justify-between gap-8">
                                        <div className="w-1/2 h-max flex flex-col gap-2">
                                            <p className="font-medium text-[rgb(52,67,87)]">
                                                Email
                                            </p>
                                            <input
                                                type="text"
                                                className="w-full h-11 border border-gray-300 rounded pl-4"
                                                onChange={(e) =>
                                                    setEmail(e.target.value)
                                                }
                                            />
                                        </div>
                                        <div className="w-1/2 h-max flex flex-col gap-2">
                                            <p className="font-medium text-[rgb(52,67,87)]">
                                                Phone No
                                            </p>
                                            <input
                                                type="text"
                                                className="w-full h-11 border border-gray-300 rounded pl-4"
                                                onChange={(e) =>
                                                    setPhoneNo(e.target.value)
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full h-max flex justify-between gap-8">
                                        <div className="w-1/2 h-max flex flex-col gap-2">
                                            <p className="font-medium text-[rgb(52,67,87)]">
                                                Date of Birth
                                            </p>
                                            <input
                                                type="text"
                                                className="w-full h-11 border border-gray-300 rounded pl-4"
                                                placeholder="DD/MM/YYYY"
                                                onChange={(e) =>
                                                    setDob(e.target.value)
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                    <button
                        className="w-max h-max px-5 py-2 bg-[#0238ac] text-white rounded text-sm font-semibold"
                        onClick={handleUpdate}
                    >
                        UPDATE
                    </button>
                </div>
            </Modal>
        </>
    );
};

export default Profile;