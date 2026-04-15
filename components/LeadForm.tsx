export default function LeadForm() {
  return (
    <section className="bg-white py-32 px-6 md:px-12">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="flex-1 space-y-8">
            <span className="label-md text-primary-dark">Step into the Professional League</span>
            <h2 className="display-lg text-on-surface">Secure Your Property's Future Today.</h2>
            <p className="body-lg text-on-surface/70 max-w-md">
              Get matched with a top-tier, licensed RCAT member for your next project. 
              We vetting process ensures that you only work with the most elite roofing contractors in Texas. Professionalism guaranteed.
            </p>
            
            <div className="pt-8 grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <span className="text-4xl font-black text-on-surface">15+</span>
                <p className="label-md text-on-surface/40">Years Average Experience</p>
              </div>
              <div className="space-y-2">
                <span className="text-4xl font-black text-on-surface">100%</span>
                <p className="label-md text-on-surface/40">Vetted Contractors</p>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full bg-surface-container-low p-12 border border-outline-variant">
            <h3 className="headline-md mb-8">Request an Estimate</h3>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="label-md text-on-surface/60">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="bg-transparent border-b-2 border-outline-variant focus:border-primary-orange py-2 outline-none transition-colors body-lg"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="label-md text-on-surface/60">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="bg-transparent border-b-2 border-outline-variant focus:border-primary-orange py-2 outline-none transition-colors body-lg"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="label-md text-on-surface/60">Property Location (Zip Code)</label>
                <input 
                  type="text" 
                  placeholder="77001" 
                  className="bg-transparent border-b-2 border-outline-variant focus:border-primary-orange py-2 outline-none transition-colors body-lg"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="label-md text-on-surface/60">Project Brief</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell us about your roofing needs..." 
                  className="bg-transparent border-b-2 border-outline-variant focus:border-primary-orange py-2 outline-none transition-colors body-lg resize-none"
                ></textarea>
              </div>

              <button className="w-full cta-gradient py-5 text-white label-md shadow-xl shadow-primary-orange/20 active:scale-[0.98]">
                Get My Free Estimate
              </button>
              
              <p className="text-[10px] text-on-surface/40 uppercase tracking-widest text-center mt-4">
                By submitting, you agree to our Terms of Service & Privacy Policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
