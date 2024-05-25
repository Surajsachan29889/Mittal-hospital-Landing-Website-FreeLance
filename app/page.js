import Hero from "@/components/Hero";
import Category from "@/components/categorySec/category";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <Hero/>
      <Category/>
      
    </main>
  );
}
