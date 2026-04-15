import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Initiatives from "../components/Initiatives";
import LeadForm from "../components/LeadForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Initiatives />
      <LeadForm />
      <Footer />
    </main>
  );
}
