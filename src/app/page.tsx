'use client'
import { Header } from "@/app/Components/Header";
import { BlogList } from "@/app/Components/BlogList";
import { Footer } from "@/app/Components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <div>
      <ToastContainer theme="light" />
      < Header />
      < BlogList />
      < Footer />
    </div>
  );
}
