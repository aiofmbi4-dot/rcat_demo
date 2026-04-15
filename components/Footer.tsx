import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-on-surface text-white py-24 px-6 md:px-12 mt-auto">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 border-b border-white/10 pb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-white font-black text-3xl tracking-tighter">RCAT</span>
              <div className="h-4 w-[2px] bg-primary-orange"></div>
            </div>
            <p className="body-lg text-white/50 max-w-sm">
              Roofing Contractors Association of Texas. Establishing licensing standards and ethical practices for the roofing industry since 1975.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
            <div className="space-y-4">
              <h4 className="label-md text-white">For Consumers</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="body-lg text-white/40 hover:text-primary-orange transition-colors">Find a Contractor</Link></li>
                <li><Link href="#" className="body-lg text-white/40 hover:text-primary-orange transition-colors">Resource Guides</Link></li>
                <li><Link href="#" className="body-lg text-white/40 hover:text-primary-orange transition-colors">Report Fraud</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="label-md text-white">For Members</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="body-lg text-white/40 hover:text-primary-orange transition-colors">Licensing Program</Link></li>
                <li><Link href="#" className="body-lg text-white/40 hover:text-primary-orange transition-colors">Member Benefits</Link></li>
                <li><Link href="#" className="body-lg text-white/40 hover:text-primary-orange transition-colors">Directories</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="label-md text-white">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="body-lg text-white/40 hover:text-primary-orange transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="body-lg text-white/40 hover:text-primary-orange transition-colors">Terms of Service</Link></li>
                <li><Link href="#" className="body-lg text-white/40 hover:text-primary-orange transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 gap-6">
          <p className="label-md text-white/20">© 2026 Roofing Contractors Association of Texas. All Rights Reserved.</p>
          <div className="flex items-center gap-8">
            <Link href="#" className="label-md text-white/40 hover:text-white transition-colors">LinkedIn</Link>
            <Link href="#" className="label-md text-white/40 hover:text-white transition-colors">Twitter</Link>
            <Link href="#" className="label-md text-white/40 hover:text-white transition-colors">Instagram</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
