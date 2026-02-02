export default function Footer() {
  return (
    <footer className="bg-[#0B3C5D] text-white">
      <div className="pmx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide">
              Legal Information
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">Copyright Policy</li>
              <li className="hover:text-white cursor-pointer">Hyperlinking Policy</li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide">
              Help
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="hover:text-white cursor-pointer">FAQs</li>
              <li className="hover:text-white cursor-pointer">Feedback / Grievance</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide">
              Connect with Us
            </h4>
            <p className="text-sm text-white/80">National Call Center</p>
            <p className="mt-2 text-lg font-semibold">
              1800-258-1800
            </p>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/15 pt-6 text-center text-xs text-white/60">
          © {new Date().getFullYear()} DigiKagatPatra. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
