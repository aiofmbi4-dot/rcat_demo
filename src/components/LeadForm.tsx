"use client";

export default function LeadForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is purely a visual UI scaffold as requested
  };

  return (
    <section id="contact" className="w-full bg-surface py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-display-lg text-primary font-bold mb-8">
            Secure Your Property's Future Today.
          </h2>
          <p className="text-body-lg text-on_secondary_container max-w-lg mb-12">
            Get matched with a top-tier, licensed RCAT member for your next project. Professionalism guaranteed.
          </p>
          <div className="flex gap-4 items-center">
            <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z"/></svg>
            <div className="flex flex-col">
              <span className="text-headline-md text-primary">15+ Years</span>
              <span className="text-label-md text-on_secondary_container">Experience Guaranteed</span>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 bg-surface_container_lowest p-10 border-[1px] border-outline_variant/20 relative">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            
            <div className="relative">
              <input 
                type="text" 
                id="name"
                name="name"
                required
                className="w-full bg-transparent border-b border-outline py-3 text-body-lg text-primary placeholder-transparent focus:outline-none focus:border-b-2 focus:border-primary peer transition-all duration-200" 
                placeholder="Full Name"
              />
              <label htmlFor="name" className="absolute left-0 -top-3 text-label-md text-on_secondary_container transition-all peer-placeholder-shown:text-body-lg peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-label-md peer-focus:text-primary">
                Full Name
              </label>
            </div>

            <div className="relative">
              <input 
                type="email" 
                id="email"
                name="email"
                required
                className="w-full bg-transparent border-b border-outline py-4 text-body-lg text-primary placeholder-transparent focus:outline-none focus:border-b-2 focus:border-primary peer transition-all duration-200" 
                placeholder="Email Address"
              />
              <label htmlFor="email" className="absolute left-0 -top-3 text-label-md text-on_secondary_container transition-all peer-placeholder-shown:text-body-lg peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-label-md peer-focus:text-primary">
                Email Address
              </label>
            </div>

            <div className="relative">
              <input 
                type="tel" 
                id="phone"
                name="phone"
                required
                className="w-full bg-transparent border-b border-outline py-4 text-body-lg text-primary placeholder-transparent focus:outline-none focus:border-b-2 focus:border-primary peer transition-all duration-200" 
                placeholder="Phone Number"
              />
              <label htmlFor="phone" className="absolute left-0 -top-3 text-label-md text-on_secondary_container transition-all peer-placeholder-shown:text-body-lg peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-label-md peer-focus:text-primary">
                Phone Number
              </label>
            </div>

            <button 
              type="submit" 
              className="mt-4 w-full bg-primary_cta_base hover:bg-on_primary_container text-surface px-8 py-5 font-bold text-label-md transition-colors duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 bg-cta-gradient"
            >
              Get My Free Estimate
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
