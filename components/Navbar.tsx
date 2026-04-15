import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-outline-variant px-6 py-4 flex justify-between items-center transition-all duration-200">
      <div className="flex items-center gap-2">
        <span className="text-on-surface font-black text-2xl tracking-tighter">RCAT</span>
        <div className="h-6 w-[2px] bg-primary-orange ml-2"></div>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        <Link href="#" className="label-md text-on-surface hover:text-primary-orange transition-colors">Find a Contractor</Link>
        <Link href="#" className="label-md text-on-surface hover:text-primary-orange transition-colors">Resources</Link>
        <Link href="#" className="label-md text-on-surface hover:text-primary-orange transition-colors">About</Link>
      </div>

      <button className="cta-gradient px-6 py-2.5 text-white label-md shadow-lg shadow-primary-orange/20 active:scale-95">
        Get Licensed
      </button>
    </nav>
  );
}
