import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero.png" 
          alt="Professional Roofing Texas" 
          fill 
          className="object-cover object-center grayscale-[0.2] brightness-[0.8]"
          priority
        />
        {/* Editorial Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="max-w-4xl space-y-8">
          <div className="space-y-2">
             <span className="label-md text-primary-dark bg-white px-3 py-1 inline-block">Established 1975</span>
             <h1 className="display-lg text-on-surface">
              Protect Your Home with Texas' Most Trusted Roofers.
            </h1>
          </div>
          
          <p className="body-lg text-on-surface/80 max-w-xl">
            Connecting property owners with licensed, professional roofing contractors since 1975. 
            Experience the gold standard of Texas roofing excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="cta-gradient px-8 py-4 text-white label-md shadow-xl shadow-primary-orange/30 group">
              Find a Licensed Roofer
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button className="bg-white border-2 border-on-surface px-8 py-4 text-on-surface label-md hover:bg-on-surface hover:text-white transition-all duration-200">
              Contractor Login
            </button>
          </div>
        </div>
      </div>

      {/* Vertical Label (Editorial detail) */}
      <div className="absolute right-12 bottom-24 hidden lg:block rotate-90 origin-right">
        <span className="label-md text-on-surface/40 tracking-[0.2em]">RCAT // ARCHITECTURAL MONOLITH</span>
      </div>
    </section>
  );
}
