import Link from "next/link";

const initiatives = [
  {
    title: "Contractor Search",
    description: "Find licensed professionals across Texas using our vetted database of certified roofing experts.",
    linkText: "Search Database",
    linkHref: "#search",
    icon: (
      <svg className="w-8 h-8 text-primary mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
    ),
  },
  {
    title: "Member Licensing",
    description: "The RCAT Licensed Roofing Contractor program sets the standard for quality and ethical practices.",
    linkText: "Get Licensed",
    linkHref: "#license",
    icon: (
      <svg className="w-8 h-8 text-primary mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    ),
  },
  {
    title: "Consumer Resources",
    description: "Learn how to avoid scams and roofing fraud with our comprehensive homeowner protection guides.",
    linkText: "View Resources",
    linkHref: "#resources",
    icon: (
      <svg className="w-8 h-8 text-primary mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
    ),
  }
];

export default function CoreInitiatives() {
  return (
    <section id="initiatives" className="w-full bg-surface_container py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-headline-md text-primary mb-16">Our Core Initiatives</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {initiatives.map((init, idx) => (
            <div key={idx} className="bg-surface_container_lowest p-8 flex flex-col hover:bg-surface_bright transition-colors duration-200 border-l-4 border-transparent hover:border-primary">
              {init.icon}
              <h3 className="text-headline-md text-primary mb-4">{init.title}</h3>
              <p className="text-body-lg text-on_secondary_container mb-8 flex-grow">
                {init.description}
              </p>
              <Link 
                href={init.linkHref} 
                className="text-label-md text-primary font-bold inline-flex items-center outline-none focus-visible:ring-2 focus-visible:ring-primary w-fit relative group"
              >
                {init.linkText}
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
