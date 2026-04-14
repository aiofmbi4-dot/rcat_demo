import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-surface py-6 px-4 md:px-8 lg:px-16 border-b-[1px] border-surface_container_low">
      <div className="max-w-7xl mx-auto flex items-center justify-between grid-cols-12 gap-4">
        {/* Logo */}
        <Link href="/" className="font-bold text-headline-md tracking-tight text-primary outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-none">
          RCAT
        </Link>
        
        {/* Navigation */}
        <nav aria-label="Main Navigation">
          <ul className="flex items-center space-x-8">
            <li>
              <Link href="#initiatives" className="text-label-md text-on_surface hover:text-primary outline-none focus-visible:underline">
                Initiatives
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hidden md:inline-block bg-primary_cta_base hover:bg-on_primary_container text-surface px-6 py-3 font-bold text-label-md transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                Get Linked
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
