export default function Initiatives() {
  const initiatives = [
    {
      id: "01",
      title: "Contractor Search",
      description: "Find licensed professionals across Texas using our vetted database of certified roofing experts. Safety and quality guaranteed.",
      cta: "Search Database"
    },
    {
      id: "02",
      title: "Member Licensing",
      description: "The RCAT Licensed Roofing Contractor program sets the standard for quality and ethical practices. Join the elite network.",
      cta: "Get Licensed"
    },
    {
      id: "03",
      title: "Consumer Resources",
      description: "Learn how to avoid scams and roofing fraud with our comprehensive homeowner protection guides and expert tips.",
      cta: "View Resources"
    }
  ];

  return (
    <section className="bg-surface-container-low py-24 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4">
            <span className="label-md text-primary-dark">Commitment to Excellence</span>
            <h2 className="headline-md text-on-surface">Our Core Initiatives</h2>
          </div>
          <p className="body-lg text-on-surface/60 max-w-md">
            We provide the infrastructure for property owners to find trust and for contractors to build legitimacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-outline-variant">
          {initiatives.map((item) => (
            <div key={item.id} className="group relative p-12 bg-white border-b border-r border-outline-variant hover:bg-on-surface transition-all duration-300">
              <span className="text-6xl font-black text-on-surface/5 group-hover:text-white/10 transition-colors absolute top-8 right-8">{item.id}</span>
              <div className="space-y-6 relative z-10">
                <h3 className="headline-md text-on-surface group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="body-lg text-on-surface/70 group-hover:text-white/70 transition-colors">
                  {item.description}
                </p>
                <div className="pt-4 flex items-center gap-2 text-primary-orange group-hover:text-white transition-colors cursor-pointer group-hover:translate-x-2 transition-transform duration-300">
                  <span className="label-md underline underline-offset-8 decoration-2">{item.cta}</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
