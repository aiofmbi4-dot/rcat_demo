import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-surface_container_low py-12 px-4 md:px-8 lg:px-16 border-t-[1px] border-outline_variant/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-bold text-headline-md tracking-tight text-primary">
          RCAT
        </div>
        <nav aria-label="Footer Navigation">
          <ul className="flex flex-wrap items-center gap-6 text-label-md text-on_surface justify-center text-center">
            <li>
              <Link href="#" className="hover:text-primary outline-none focus-visible:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary outline-none focus-visible:underline">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary outline-none focus-visible:underline">
                Member Directory
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-primary outline-none focus-visible:underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
