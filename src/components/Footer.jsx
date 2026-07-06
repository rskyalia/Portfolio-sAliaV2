const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { href: "#beranda", label: "Beranda" },
    { href: "#tentang", label: "Tentang" },
    { href: "#proyek", label: "Portofolio" },
    { href: "#kontak", label: "Kontak" },
  ];

  const socials = [
    { href: "https://www.tiktok.com/@alrskyy_", icon: "ri-tiktok-fill", color: "hover:bg-zinc-700" },
    { href: "https://www.instagram.com/alrskyriss/", icon: "ri-instagram-fill", color: "hover:bg-pink-600/80" },
    { href: "https://wa.me/6285745695068", icon: "ri-whatsapp-fill", color: "hover:bg-green-600/80" },
  ];

  return (
    <footer className="mt-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></div>

      <div className="py-12 flex md:flex-row flex-col gap-10 md:gap-0 justify-between items-center">
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold">
            Alia<span className="gradient-text">.</span>
          </h1>
          <p className="text-sm text-zinc-500 mt-1.5">
            English Education · Universitas Negeri Malang
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-400 hover:text-white transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-px after:bg-blue-400 after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {socials.map((social) => (
            <a
              key={social.icon}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.icon}
              className={`w-10 h-10 flex items-center justify-center rounded-xl bg-zinc-800/80 border border-zinc-700/60 text-zinc-400 hover:text-white transition-all duration-200 hover:scale-105 ${social.color}`}
            >
              <i className={`${social.icon} ri-lg`}></i>
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-zinc-800/60 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-zinc-600">
        <span>© {currentYear} Alia Risky Fauziah. All rights reserved.</span>
        <span className="flex items-center gap-1.5">
          Made with <i className="ri-heart-fill text-red-500/70 text-sm"></i> in Indonesia
        </span>
      </div>
    </footer>
  );
};

export default Footer;
