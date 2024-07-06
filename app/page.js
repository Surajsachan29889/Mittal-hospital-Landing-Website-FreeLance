import Hero from "@/components/Hero";
import AboutUs from "@/components/aboutUs";
import Category from "@/components/category";
import Doctorsec from "@/components/doctorsec";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";


export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <Category/>
      <Doctorsec/>
      <Footer/>
      
    </main>
  );
}
