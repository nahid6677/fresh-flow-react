import React, { useContext, useEffect } from 'react';
import FreshFlowContext from './components/context/FreshFlowContext';
import { Outlet, useLocation } from 'react-router-dom';
import ChatProp from './components/common/ChatProp';
import MobileNav from './components/common/MobileNav';
import ScrollToTop from "./components/common/ScrollToTop"
import SideBar from './components/side-bar/SideBar';
const App = () => {
  const { loading, setLoading, isMobileOpen, isSearch } = useContext(FreshFlowContext);
  const location = useLocation();
  const currentPath = location.pathname;
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    const cursor = document.querySelector(".custom-cursor__cursor");
    const cursorinner = document.querySelector(".custom-cursor__cursor-two");
    const links = document.querySelectorAll("a");

    if (!cursor || !cursorinner) return;

    const moveCursor = (e) => {
      cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
    };
    const moveCursorInner = (e) => {
      cursorinner.style.left = e.clientX + "px";
      cursorinner.style.top = e.clientY + "px";
    };

    const mouseDown = () => {
      cursor.classList.add("click");
      cursorinner.classList.add("custom-cursor__innerhover");
    };
    const mouseUp = () => {
      cursor.classList.remove("click");
      cursorinner.classList.remove("custom-cursor__innerhover");
    };

    links.forEach((link) => {
      link.addEventListener("mouseover", () => {
        cursor.classList.add("custom-cursor__hover");
      });
      link.addEventListener("mouseleave", () => {
        cursor.classList.remove("custom-cursor__hover");
      });
    });

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousemove", moveCursorInner);
    document.addEventListener("mousedown", mouseDown);
    document.addEventListener("mouseup", mouseUp);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousemove", moveCursorInner);
      document.removeEventListener("mousedown", mouseDown);
      document.removeEventListener("mouseup", mouseUp);
    };
  }, []);


  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [currentPath])







  return (
    <div className={`custom-cursor ${isMobileOpen ? "locked" : ""} ${isSearch ? 'search-active' : ''}`}>
      <div className="custom-cursor__cursor"></div>
      <div className="custom-cursor__cursor-two"></div>

      <ChatProp />

      {/* {loading ?
        <div className='bg-gray d-flex justify-content-center align-item-center'>
          LOADING..........
        </div>
        :
        <Outlet />} */}
      <Outlet />
      <MobileNav />
      <ScrollToTop />
      <SideBar />

    </div>
  );
};

export default App;
