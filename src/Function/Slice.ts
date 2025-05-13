import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UserData {
  userName: string;
  fullName: string;
  email: string;
  accountBalance: number;
  totalWithdrawn: number;
  totalProfit: number;
  referalBonus: number;
  isAdmin: boolean;
  _id: string;
  status: string;
  balance: number;
  isVerified: boolean;
  date: Date;
  createdAt: string;
}

export interface AdminTransaction {
  id: number;
  amount: number;
  mode: string;
  status: string;
  createdAt: string;
  image: File;
  fullName: string;
}

export interface userTransactions {
  amount: number;
  mode: string;
  status: string;
  createdAt: string;
  image: File;
}

export interface MySliceState {
  tradeUser: UserData;
  token: string;
  oneUser: UserData | null;
  allAdminUsers: UserData[];
  adminTransactions: AdminTransaction[];
  userTransactions: userTransactions[];
  isVerified: boolean;
}

const initialState: MySliceState = {
  tradeUser: {
    userName: "",
    fullName: "",
    email: "",
    accountBalance: 0,
    totalWithdrawn: 0,
    referalBonus: 0,
    totalProfit: 0,
    isAdmin: false,
    status: "",
    _id: "",
    balance: 0,
    isVerified: false,
    date: new Date(),
    createdAt: "",
  },
  token: "",
  oneUser: null,
  allAdminUsers: [],
  adminTransactions: [],
  userTransactions: [],
  isVerified: false, // Initialize isVerify property
};

const mySlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userdata(state, action: PayloadAction<UserData>) {
      state.tradeUser = action.payload;
    },
    userToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    userLogout(state) {
      // Reset all state properties to initial state
      state.tradeUser = initialState.tradeUser;
      state.token = initialState.token;
      state.oneUser = initialState.oneUser;
      state.allAdminUsers = initialState.allAdminUsers;
      state.adminTransactions = initialState.adminTransactions;
      state.isVerified = initialState.isVerified;
    },
    setOneUser(state, action: PayloadAction<UserData>) {
      state.oneUser = action.payload;
    },
    clearOneUser(state) {
      state.oneUser = null;
    },
    setAllUsers(state, action: PayloadAction<UserData[]>) {
      state.allAdminUsers = action.payload;
    },
    addAdminTransaction(state, action: PayloadAction<AdminTransaction>) {
      state.adminTransactions.push(action.payload);
    },
    setIsVerify(state, action: PayloadAction<boolean>) {
      state.isVerified = action.payload;
    },
    Admintransactionview(state, action: PayloadAction<AdminTransaction[]>) {
      state.adminTransactions = action.payload;
    },
    setUserTransactions(state, action: PayloadAction<userTransactions[]>) {
      state.userTransactions = action.payload;
    },
  },
});

export const {
  userdata,
  userToken,
  userLogout,
  setOneUser,
  clearOneUser,
  setAllUsers,
  addAdminTransaction,
  setIsVerify,
  Admintransactionview,
  setUserTransactions,
} = mySlice.actions;

export default mySlice.reducer;
