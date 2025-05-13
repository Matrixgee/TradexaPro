
import React from "react";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import RootState from "../Function/Rootstate";

interface AdminPrivateProps {
    // path: string;
    element: React.ReactNode;
    children?: React.ReactNode;
}

const AdminPrivate: React.FC<AdminPrivateProps> = ({element, children}) => {
    const userToken = useSelector(
        (state: RootState) => state.mySlice.token
    );
    const user = useSelector(
        (state: RootState) => state.mySlice.tradeUser
    );

    return userToken === "" || !user.isAdmin ? (
        <Navigate to="/logs" replace />
    ) : children ? (
        <>{children}</>
    ) : (
        <>{element}</>
    );
};

export default AdminPrivate;
