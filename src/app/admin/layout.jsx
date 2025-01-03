import Image from "next/image";
import SideBar from "../Components/AdminComponents/SideBar";
import { assets } from "@/app/Assets/assets";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Layout({ children }) {
  return (
    <>
      <div className="flex">

        <ToastContainer theme="dark" />

        <SideBar />
        <div className="flex flex-col w-full">
        <div className="flex items-center justify-between w-full py-6 max-h-[72px] px-6 sm:px-12 border-b border-gray-300 bg-white shadow-sm rounded-t-lg">
            <h3 className="font-medium">Admin Panel</h3>
            <Image src={assets.profile_icon} width={40} alt="" />
          </div>
          {children}
        </div>
      </div>
    </>
  );
}