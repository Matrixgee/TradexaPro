import React, { useEffect, useState } from "react";
import { FaMoneyBillWave, FaTrashAlt, FaUserCheck } from "react-icons/fa";
import { MdOutlineClear } from "react-icons/md";

import { CiMenuKebab } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import RootState from "../../Function/Rootstate";
import { setAllUsers } from "../../Function/Slice";
import toast from "react-hot-toast";
import axios from "axios";

const Testing = () => {
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState<{ [key: string]: boolean }>({});
  const [deleteLoading, setDeleteLoading] = useState<{
    [key: string]: boolean;
  }>({});
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>();
  const [type, setType] = useState<string>("");
  const [field, setfield] = useState<string>("");
  const [creditLoading, setCreditLoading] = useState<boolean>(false);
  const [currentUserId, setCurrentUserId] = useState<string>("");

  const userToken = useSelector((state: RootState) => state.mySlice.token);
  const users = useSelector(
    (state: RootState) => state.mySlice.allAdminUsers || []
  );
  const userdata = Object.values(users);

  const dispatch = useDispatch();

  const handleRequestError = (error: any) => {
    const errorMsg = error.response
      ? error.response.data.error
      : "An error occurred.";
    toast.error(errorMsg);
  };

  const getAllUsers = async () => {
    const url = "https://exp-pro.onrender.com/api/user/getallusers";
    const token = userToken;
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const response = await axios.get(url, { headers });
      dispatch(setAllUsers(response.data.data));
    } catch (error) {
      handleRequestError(error);
    }
  };

  useEffect(() => {
    getAllUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMenuToggle = (index: number) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  const handleVerifyUser = async (userId: string) => {
    const toastLoadingId = toast.loading("Please wait....");
    try {
      setLoading((prev) => ({ ...prev, [userId]: true }));
      const url = `https://exp-pro.onrender.com/api/admin/verifyUser/${userId}`;
      const headers = {
        Authorization: `Bearer ${userToken}`,
      };
      const response = await axios.put(url, {}, { headers });
      dispatch(setAllUsers(response.data.data));
      toast.success(response.data.message);
      getAllUsers();
    } catch (error) {
      handleRequestError(error);
    } finally {
      setLoading((prev) => ({ ...prev, [userId]: false }));
      toast.dismiss(toastLoadingId);
    }
  };

  const handleOpenCreditDebitModal = (userId: string) => {
    setCurrentUserId(userId);
    setOpenModal(true);
  };

  const handleDeleteUser = async (userId: string) => {
    const toastLoadingId = toast.loading("Please wait....");
    try {
      setDeleteLoading((prev) => ({ ...prev, [userId]: true }));
      const url = `https://exp-pro.onrender.com/api/admin/deleteOneUser/${userId}`;
      const headers = {
        Authorization: `Bearer ${userToken}`,
      };
      const response = await axios.delete(url, { headers });
      dispatch(setAllUsers(response.data.data));
      toast.success(response.data.message);
    } catch (error) {
      handleRequestError(error);
    } finally {
      setDeleteLoading((prev) => ({ ...prev, [userId]: false }));
      toast.dismiss(toastLoadingId);
    }
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  const handleModeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
  };
  const handleFieldChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setfield(e.target.value);
  };

  const handleCreditDebitUser = async () => {
    if (!amount || !type || !field || (type !== "credit" && type !== "debit")) {
      alert("All fields must be filled");
      return;
    }

    const toastLoadingId = toast.loading("Please wait...");
    setCreditLoading(true);
    try {
      const url = `https://exp-pro.onrender.com/api/admin/creditOrDebit/${currentUserId}`;
      const headers = {
        Authorization: `Bearer ${userToken}`,
      };
      const data = {
        type,
        amount,
        field,
      };
      console.log("Request Data:", data); // Debugging line to check the request payload
      const response = await axios.put(url, data, { headers });
      dispatch(setAllUsers(response.data.data));
      getAllUsers();
      toast.success(response.data.message);
      setOpenModal(false);
    } catch (error) {
      handleRequestError(error);
    } finally {
      setCreditLoading(false);
      toast.dismiss(toastLoadingId);
    }
  };

  return (
    <div className="w-full h-[100vh] flex flex-col overflow-y-auto">
      <div className="w-max h-10 flex items-center gap-4 justify-between bg-gray-300">
        <p className="w-32 h-full flex justify-center items-center">Name</p>
        <p className="w-32 h-full flex justify-center items-center">UserName</p>
        <p className="w-32 h-full flex justify-center items-center">
          Account Balance
        </p>
        <p className="w-32 h-full flex justify-center items-center">Verify</p>
        <p className="w-32 h-full flex justify-center items-center">
          Date Registered
        </p>
        <p className="w-32 h-full flex justify-center items-center">Action</p>
      </div>
      <div className="w-max h-max flex flex-col gap-2 p-4">
        {userdata.map((user, index) => (
          <div
            key={user._id}
            className="w-full h-16 text-sm flex items-center shadow bg-sky-100 justify-between text-black"
          >
            <p className="w-[8.6rem] h-full flex justify-center items-center">
              {user.fullName}
            </p>
            <p className="w-[8.6rem] h-full flex justify-center items-center">
              {user.userName}
            </p>
            <p className="w-[8.6rem] h-full flex justify-center items-center">
              ${user.accountBalance}
            </p>
            <p className="w-[8.6rem] h-full flex justify-center items-center">
              {user.isVerified ? "Verified" : "Not Verified"}
            </p>
            <p className="w-[8.6rem] h-full flex justify-center items-center">
              {new Date(user.createdAt).toLocaleDateString()}
            </p>
            <div className="w-[8.6rem] h-full flex justify-center items-center relative">
              {openMenuIndex === index ? (
                <div className="absolute right-0 top-0 bg-white w-[10rem] h-[12rem] shadow-md rounded p-2 z-10">
                  <MdOutlineClear
                    onClick={() => handleMenuToggle(index)}
                    className="absolute top-2 right-2 cursor-pointer"
                  />
                  <div className="w-full flex flex-col gap-2 mt-8">
                    <button
                      className={`w-full h-10 flex justify-center items-center rounded transition-colors ${
                        loading[user._id]
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-blue-400 hover:bg-blue-600 text-white"
                      }`}
                      onClick={() => handleVerifyUser(user._id)}
                      disabled={loading[user._id]}
                    >
                      <FaUserCheck className="mr-2" />{" "}
                      {loading[user._id] ? "Verifying..." : "Verify"}
                    </button>
                    <button
                      className="w-full h-10 bg-green-400 text-white flex justify-center items-center rounded hover:bg-green-600 transition-colors"
                      onClick={() => handleOpenCreditDebitModal(user._id)}
                    >
                      <FaMoneyBillWave className="mr-2" /> Credit/Debit
                    </button>
                    <button
                      className={`w-full h-10 flex justify-center items-center rounded transition-colors ${
                        deleteLoading[user._id]
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-red-500 hover:bg-red-600 text-white"
                      }`}
                      onClick={() => handleDeleteUser(user._id)}
                      disabled={deleteLoading[user._id]}
                    >
                      <FaTrashAlt className="mr-2" />{" "}
                      {deleteLoading[user._id] ? "Deleting..." : "Delete"}
                    </button>
                  </div>
                </div>
              ) : (
                <CiMenuKebab
                  className="text-2xl cursor-pointer"
                  onClick={() => handleMenuToggle(index)}
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          <div className="bg-white p-4 rounded shadow-lg w-96">
            <h2 className="text-xl mb-4">Credit/Debit User</h2>
            <div className="mb-4">
              <label htmlFor="amount" className="block mb-2">
                Amount
              </label>
              <input
                type="number"
                id="amount"
                className="w-full border px-2 py-1"
                value={amount}
                onChange={handleAmountChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="type" className="block mb-2">
                Mode
              </label>
              <select
                id="type"
                className="w-full border px-2 py-1"
                value={type}
                onChange={handleModeChange}
              >
                <option value="">Select Mode</option>
                <option value="credit">Credit</option>
                <option value="debit">Debit</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="type" className="block mb-2">
                Where to Credit/Debit:
              </label>
              <select
                id="type"
                className="w-full border px-2 py-1"
                value={field}
                onChange={handleFieldChange}
              >
                <option value="">Select Where</option>
                <option value="accountBalance">Account Balance</option>
                <option value="totalProfit">Total Profit</option>
                <option value="referalBonus">Referal Bonus</option>
              </select>
            </div>
            <div className="flex justify-end gap-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
                onClick={() => setOpenModal(false)}
              >
                Cancel
              </button>
              <button
                className={`bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors ${
                  creditLoading ? "cursor-not-allowed" : ""
                }`}
                onClick={handleCreditDebitUser}
                disabled={creditLoading}
              >
                {creditLoading ? "Processing..." : "Submit"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testing;
