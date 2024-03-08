import { Navigate, useLocation } from "react-router-dom";
import { checkPathname } from "../../helper";
import React, { ReactNode } from "react";

interface ICheckPath {

    children: ReactNode
}

export const CheckPath: React.FC<ICheckPath> = ({ children }) => {

    const location = useLocation();
  
    if(!checkPathname(location.pathname)) return <Navigate to="/404" replace={true} />

    return children

}
