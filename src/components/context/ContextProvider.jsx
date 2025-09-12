import React, { useState } from 'react';
import FreshFlowContext from './FreshFlowContext';

const ContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isSearch, setIsSearch] = useState(false);
    const [isSideBar, setSideBar] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileOpen((prev) => !prev);
    };

    const contextInfo = {
        loading, setLoading,
        isMobileOpen, setIsMobileOpen,
        isSearch, setIsSearch,
        toggleMobileMenu,
        isSideBar, setSideBar
        
    }
    return <FreshFlowContext value={contextInfo}> {children} </FreshFlowContext>
};

export default ContextProvider;