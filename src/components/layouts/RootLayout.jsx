import Navbar from "@/components/ui/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import PageLoader from "../ui/PageLoader";
import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export default function RootLayout() {
  const [showLoader, setShowLoader] = useState(true);
  const [currentPath, setCurrentPath] = useState("/");

  const location = useLocation();

  useEffect(() => {
    if (location.pathname == currentPath) return;

    setShowLoader(true);
  }, [location.pathname, currentPath]);

  const onAnimationComplete = () => {
    setCurrentPath(location.pathname);

    setTimeout(() => setShowLoader(false), 1000);
  };

  return (
    <>
      <Navbar />
      <AnimatePresence>
        {/* {showLoader && (
          <PageLoader animationCompleteCallback={onAnimationComplete} />
        )} */}
        <Outlet />
      </AnimatePresence>
    </>
  );
}
