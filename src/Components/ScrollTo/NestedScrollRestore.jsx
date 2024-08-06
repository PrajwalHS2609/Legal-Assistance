import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const NestedScrollRestore = ({ children }) => {
    const location = useLocation();
    const scrollPositions = useRef({});
  
    useEffect(() => {
      const saveScrollPosition = () => {
        scrollPositions.current[location.pathname] = window.scrollY;
      };
  
      window.addEventListener('scroll', saveScrollPosition);
  
      return () => {
        window.removeEventListener('scroll', saveScrollPosition);
      };
    }, [location.pathname]);
  
    useEffect(() => {
      if (scrollPositions.current[location.pathname]) {
        window.scrollTo(0, scrollPositions.current[location.pathname]);
      } else {
        window.scrollTo(0, 0);
      }
    }, [location.pathname]);
  
    return children;
  };

export default NestedScrollRestore;
