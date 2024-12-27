'use client'
import { Header } from "@/app/Components/Header";
import { BlogList } from "@/app/Components/BlogList";
import { Footer } from "@/app/Components/Footer";

export default function Home() {
  return (
    <div>
      < Header />
      < BlogList />
      < Footer />
    </div>
  );
}
