import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full bg-surface pt-24 pb-32 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
        <div className="lg:col-span-8 flex flex-col justify-center">
          <h1 className="text-display-lg text-primary font-bold mb-8">
            Protect Your Home with Texas' Most Trusted Roofers.
          </h1>
          <p className="text-body-lg text-on_secondary_container max-w-2xl mb-12">
            Connecting property owners with licensed, professional roofing contractors since 1975.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link 
              href="#contact" 
              className="inline-flex items-center justify-center bg-primary_cta_base hover:bg-on_primary_container text-surface px-8 py-4 font-bold text-label-md transition-colors duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 bg-cta-gradient"
            >
              Get My Free Estimate
            </Link>
            <Link 
              href="#initiatives" 
              className="inline-flex items-center justify-center border-2 border-primary text-primary hover:bg-surface_container_low px-8 py-4 font-bold text-label-md transition-colors duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Explore Network
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
