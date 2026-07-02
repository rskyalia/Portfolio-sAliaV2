const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-32 border-t border-zinc-800">
      <div className="py-10 flex md:flex-row flex-col gap-8 md:gap-0 justify-between items-center">
        {/* Brand */}
        <div>
          <h1 className="text-2xl font-bold">
            Alia<span className="text-blue-500">.</span>
          </h1>
          <p className="text-sm text-zinc-500 mt-1">English Education Student</p>
        </div>

        {/* Nav Links */}
        <div className="flex gap-6">
          {["#beranda", "#tentang", "#proyek", "#kontak"].map((href, i) => (
            <a
              key={href}
              href={href}
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              {["Beranda", "Tentang", "Portofolio", "Kontak"][i]}
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          {[
            { href: "https://www.tiktok.com/@alrskyy_", icon: "ri-tiktok-fill" },
            { href: "https://www.instagram.com/alrskyriss/", icon: "ri-instagram-fill" },
            { href: "https://wa.me/6285745695068", icon: "ri-whatsapp-fill" },
            { href: "#", icon: "ri-facebook-fill" },
          ].map((social) => (
            <a
              key={social.icon}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-zinc-800 hover:bg-blue-600 transition-colors"
            >
              <i className={`${social.icon} ri-lg`}></i>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-800 py-4 text-center text-xs text-zinc-600">
        © {currentYear} Alia Risky Fauziah. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
