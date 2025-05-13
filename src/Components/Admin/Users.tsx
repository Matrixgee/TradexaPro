// import { useEffect, useRef, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import RootState from "../../Function/Rootstate";
// import { CiMenuKebab } from "react-icons/ci";
// import axios from "axios";
// import { setAllUsers } from "../../Function/Slice";
// import toast from "react-hot-toast";
// import { Modal, Spin } from "antd";

// const Users = () => {
//   const users = useSelector(
//     (state: RootState) => state.mySlice.allAdminUsers || []
//   );
//   const userdaTa = Object.values(users);
//   const userToken = useSelector((state: RootState) => state.mySlice.token);
//   const [menuIndices, setMenuIndices] = useState<number[]>([]);
//   const [verifyLoading, setVerifyLoading] = useState<boolean>(false); // Loading state for verify action
//   const [deleteLoading, setDeleteLoading] = useState<boolean>(false);
//   const [creditLoading, setCreditLoading] = useState<boolean>(false);
//   const [verifyModalVisible, setVerifyModalVisible] = useState<boolean>(false);
//   const [deleteModalVisible, setDeleteModalVisible] = useState<boolean>(false);
//   const [openModal, setOpenModal] = useState<boolean>(false);
//   const [selectedUserId, setSelectedUserId] = useState<string>("");
//   const dispatch = useDispatch();
//   const [amount, setAmount] = useState<number>();
//   const [type, setType] = useState("");

//   const handleRequestError = (error: any) => {
//     const errorMsg = error.response
//       ? error.response.data.error
//       : "An error occurred.";
//     toast.error(errorMsg);
//   };

//   const handleShowMenu = (index: number) => {
//     setMenuIndices((prevIndices) => {
//       return prevIndices.includes(index)
//         ? prevIndices.filter((i) => i !== index)
//         : [...prevIndices, index];
//     });
//   };

//   const menuRef = useRef<HTMLDivElement>(null);
//   useEffect(() => {
//     const handleClickOut = (e: MouseEvent) => {
//       if (!menuRef.current?.contains(e.target as Node)) {
//         setMenuIndices([]);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOut);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOut);
//     };
//   }, []);

//   const getAllUsers = async () => {
//     const url = "https://exp-pro.onrender.com/api/user/getallusers";
//     const token = userToken;
//     const headers = {
//       Authorization: `Bearer ${token}`,
//     };
//     try {
//       const response = await axios.get(url, { headers });
//       dispatch(setAllUsers(response.data.data));
//     } catch (error) {
//       handleRequestError(error);
//     }
//   };

//   useEffect(() => {
//     getAllUsers();
//   }, []);

//   const handleVerifyUser = async (_id: string) => {
//     const toastloadingId = toast.loading("Please wait....");
//     try {
//       setVerifyLoading(true);
//       const url = `https://exp-pro.onrender.com/api/admin/verifyUser/${_id}`;
//       const token = userToken; // Assuming userToken is defined
//       const headers = {
//         Authorization: `Bearer ${token}`,
//       };
//       const data = {};
//       const response = await axios.put(url, data, { headers });
//       dispatch(setAllUsers(response.data.data));
//       toast.success(response.data.message);
//       setVerifyModalVisible(true);
//       getAllUsers();
//     } catch (error) {
//       handleRequestError(error);
//     } finally {
//       setVerifyLoading(false);
//       setVerifyModalVisible(false);
//       toast.dismiss(toastloadingId);
//     }
//   };

//   const handleDeleteUser = async (_id: string) => {
//     const toastloadingId = toast.loading("Please wait....");
//     try {
//       setDeleteLoading(true);
//       const url = `https://exp-pro.onrender.com/api/admin/deleteOneUser/${_id}`;
//       const token = userToken; // Assuming userToken is defined
//       const headers = {
//         Authorization: `Bearer ${token}`,
//       };
//       const response = await axios.delete(url, { headers });
//       dispatch(setAllUsers(response.data.data));
//       setDeleteModalVisible(true);
//     } catch (error) {
//       handleRequestError(error);
//     } finally {
//       setDeleteLoading(false);
//       setDeleteModalVisible(false);
//       toast.dismiss(toastloadingId);
//     }
//   };

//   const handleCredit = async (_id: string) => {
//     if (!amount || !type || (type !== "credit" && type !== "debit")) {
//       alert("All fields must be required");
//     } else {
//       const toastLoadingId = toast.loading("Please wait...");
//       setCreditLoading(true);
//       try {
//         const url = `https://exp-pro.onrender.com/api/admin/creditOrDebit/${_id}`;
//         const token = userToken; // Assuming userToken is defined
//         const headers = {
//           Authorization: `Bearer ${token}`,
//         };
//         const data = {
//           type,
//           amount,
//         };
//         const response = await axios.put(url, data, { headers });
//         dispatch(setAllUsers(response.data.data));
//         toast.success(response.data.message);
//         setCreditLoading(false);
//       } catch (error) {
//         handleRequestError(error);
//       } finally {
//         setCreditLoading(false);
//         toast.dismiss(toastLoadingId);
//       }
//     }
//   };

//   const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setAmount(Number(e.target.value));
//   };

//   const handleModeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setType(e.target.value);
//   };

//   return (
//     <>
//       <div className="w-full h-screen flex flex-col gap-2 overflow-y-auto">
//         <div className="w-max h-10 flex items-center gap-4 justify-between bg-gray-300">
//           <p className="w-32 h-full flex justify-center items-center">Name</p>
//           <p className="w-32 h-full flex justify-center items-center">
//             UserName
//           </p>
//           <p className="w-32 h-full flex justify-center items-center">
//             Account balance
//           </p>
//           <p className="w-32 h-full flex justify-center items-center">Verify</p>
//           <p className="w-32 h-full flex justify-center items-center">
//             Date Registered
//           </p>
//           <p className="w-32 h-full flex justify-center items-center">Action</p>
//         </div>
//         <div className="w-max h-max flex flex-col gap-2">
//           {userdaTa?.map((items, index) => (
//             <div
//               className="w-max h-16 flex items-center gap-4 justify-between bg-sky-100 shadow"
//               key={index}
//             >
//               <p className="w-32 h-full flex justify-center items-center text-sm">
//                 {items.fullName}
//               </p>
//               <p className="w-32 h-full flex justify-center items-center text-sm">
//                 {items.userName}
//               </p>
//               <p className="w-32 h-full flex justify-center items-center text-sm">
//                 {items.accountBalance}
//               </p>
//               <p className="w-32 h-full flex justify-center items-center text-sm">
//                 {`${items.isVerified}`}
//               </p>
//               <p className="w-32 h-full flex justify-center items-center text-sm">
//                 {new Date(items?.createdAt).toLocaleDateString()}
//               </p>
//               <p
//                 className="w-32 h-full flex justify-center items-center text-sm relative"
//                 ref={menuRef}
//               >
//                 <CiMenuKebab
//                   className="w-6 h-6 cursor-pointer"
//                   onClick={() => handleShowMenu(index)} // Pass the index to determine which menu to show
//                 />
//                 {menuIndices.includes(index) && ( // Conditionally render the menu based on the selected index
//                   <div className="absolute top-12 right-[10px] z-10 w-32 h-max flex flex-col bg-orange-100 gap-2 p-2">
//                     <div
//                       className="w-full h-8 flex items-center justify-center bg-white cursor-pointer"
//                       onClick={() => {
//                         setSelectedUserId(items._id);
//                         setOpenModal(true);
//                       }}
//                     >
//                       Credit/Debit
//                       {creditLoading && <Spin />}
//                     </div>
//                     <div
//                       className="w-full h-8 flex items-center justify-center bg-white cursor-pointer"
//                       onClick={() => handleVerifyUser(items._id)}
//                     >
//                       Verify User
//                       {verifyLoading && <Spin />}
//                     </div>
//                     <div
//                       className="w-full h-8 flex items-center justify-center bg-white cursor-pointer"
//                       onClick={() => {
//                         setSelectedUserId(items._id);
//                         setDeleteModalVisible(true);
//                       }}
//                     >
//                       Delete User
//                       {deleteLoading && <Spin />}
//                     </div>
//                   </div>
//                 )}
//               </p>
//             </div>
//           ))}
//         </div>
//         <Modal
//           title="User Verify Successful"
//           open={verifyModalVisible}
//           onOk={() => setVerifyModalVisible(false)}
//           onCancel={() => setVerifyModalVisible(false)}
//         >
//           User verification was successful!
//         </Modal>
//         <Modal
//           title="Delete User"
//           open={deleteModalVisible}
//           onOk={() => {
//             handleDeleteUser(selectedUserId);
//             setDeleteModalVisible(false);
//           }}
//           onCancel={() => setDeleteModalVisible(false)}
//         >
//           Are you sure you want to delete this user?
//         </Modal>
//         <Modal
//           title="Credit/Debit User"
//           open={openModal}
//           onOk={() => {
//             handleCredit(selectedUserId);
//             setOpenModal(false);
//           }}
//           onCancel={() => setOpenModal(false)}
//         >
//           <div className="w-full h-max flex flex-col items-center gap-5">
//             <div className="w-full h-max text-lg flex flex-col gap-2">
//               <input
//                 type="number"
//                 placeholder="Enter amount"
//                 value={amount === undefined ? "" : amount.toString()}
//                 onChange={handleAmountChange}
//                 className="w-full p-2 border border-gray-300 rounded"
//               />
//               <select
//                 value={type}
//                 onChange={handleModeChange}
//                 className="w-full p-2 border border-gray-300 rounded"
//               >
//                 <option value="">Select mode</option>
//                 <option value="credit">Credit</option>
//                 <option value="debit">Debit</option>
//               </select>
//             </div>
//           </div>
//         </Modal>
//       </div>
//     </>
//   );
// };

// export default Users;
