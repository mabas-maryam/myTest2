import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Video from "@/app/components/Video";
import Clients from "@/app/components/Clients";

export default function Home() {
  return (
    <div className="bg-[#172755] text-white">
      <Navbar />
      <Hero />
      <Features />
      <Video />
      <Clients />
      <Faq />
      <Footer />
    </div>
  );
}
