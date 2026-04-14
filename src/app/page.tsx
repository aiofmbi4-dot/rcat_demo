import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CoreInitiatives from "@/components/CoreInitiatives";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col w-full">
        <Hero />
        <CoreInitiatives />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
