import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Fleet from "./components/Fleet";
import Testimonials from "./components/Testimonials";
import Booking from "./components/Booking";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import OurPromise from "./components/OurPromise";

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col">
        <Hero className="section-spacing" />
        
        <OurPromise className="section-spacing" />
        <Fleet className="section-spacing" />
        <Services className="section-spacing" />
        
        <About className="section-spacing" />
        <Testimonials className="section-spacing" />
        <Booking className="section-spacing" />
        <Contact className="section-spacing" />
      </main>
      <Footer />
    </div>
  );
}
