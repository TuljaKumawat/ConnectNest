import { createContext, useState } from "react";

export const Contextapi = createContext(null);

export function ContextProvider({ children }) {
    const [token, setToken] = useState(localStorage.getItem("token") || null);
    const [loginName, setLoginName] = useState(localStorage.getItem("loginName") || null);
    const [role, setRole] = useState(localStorage.getItem("role") || null);

    // ✅ Login hone ke baad save
    const saveAuthData = (token, loginName, role) => {
        localStorage.setItem("token", token);
        localStorage.setItem("loginName", loginName);
        localStorage.setItem("role", role);

        setToken(token);
        setLoginName(loginName);
        setRole(role);
    };

    // ✅ Logout hone ke baad clear
    const clearAuthData = () => {
        localStorage.clear();
        setToken(null);
        setLoginName(null);
        setRole(null);
    };

    return (
        <Contextapi.Provider
            value={{ token, loginName, role, saveAuthData, clearAuthData }}
        >
            {children}
        </Contextapi.Provider>
    );
}