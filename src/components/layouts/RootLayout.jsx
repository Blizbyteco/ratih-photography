import Navbar from "@/components/ui/Navbar";
import { Outlet } from "react-router-dom";
import PageLoader from "../ui/PageLoader";

export default function RootLayout() {
  return (
    <>
        <Navbar />
        <PageLoader />
        <Outlet />
    </>
  )
}
