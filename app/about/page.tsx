import About from "../components/About";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | LimoLux Houston Limousine Service",
  description: "Learn about LimoLux, Houston’s premier provider of luxury limousine and transportation services. Discover our experience, values, and what sets us apart.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="pt-16">
        <About />
      </div>
    </main>
  );
}
