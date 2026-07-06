import DataImage from "./data";
import { listTools, listTools2, listProyek } from "./data";

const SectionHeader = ({ badge, title, subtitle, center = true }) => (
  <div
    className={`mb-14 ${center ? "text-center" : ""}`}
    data-aos="fade-up"
    data-aos-duration="800"
  >
    <span className="section-badge mb-4">{badge}</span>
    <h2 className="text-3xl md:text-4xl font-bold mt-3">{title}</h2>
    {subtitle && (
      <p className={`text-zinc-400 mt-3 max-w-md leading-relaxed ${center ? "mx-auto" : ""}`}>
        {subtitle}
      </p>
    )}
  </div>
);

function App() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        id="beranda"
        className="min-h-screen flex items-center pt-28 pb-20 relative"
      >
        <div className="grid md:grid-cols-2 items-center gap-12 lg:gap-16 w-full">
          <div className="animate__animated animate__fadeInUp animate__delay-1s order-2 md:order-1">
            <div className="inline-flex items-center gap-2.5 mb-6 glass-card px-4 py-2 rounded-full text-sm text-zinc-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for collaboration
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] mb-5">
              Hi, I'm{" "}
              <span className="gradient-text">Alia Risky</span>
              <br />
              <span className="text-zinc-100">Fauziah</span>
            </h1>

            <p className="text-base leading-relaxed text-zinc-400 mb-8 max-w-lg">
              English Education student at Universitas Negeri Malang. Passionate
              about communication, public speaking, and language teaching. I've
              competed in speech contests and love inspiring others through the
              power of English.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="" className="btn-primary">
                Download CV
                <i className="ri-download-cloud-line"></i>
              </a>
              <a href="#tentang" className="btn-secondary">
                Tentang Saya
                <i className="ri-arrow-down-line"></i>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-zinc-800/80">
              {[
                { value: "5+", label: "Achievements", icon: "ri-trophy-line" },
                { value: "3+", label: "Years Experience", icon: "ri-time-line" },
                { value: "4+", label: "Organizations", icon: "ri-team-line" },
              ].map((stat) => (
                <div key={stat.label} className="group">
                  <div className="flex items-center gap-1.5 mb-1">
                    <i className={`${stat.icon} text-blue-400/70 text-sm group-hover:text-blue-400 transition-colors`}></i>
                    <span className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</span>
                  </div>
                  <p className="text-xs md:text-sm text-zinc-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end animate__animated animate__fadeInUp animate__delay-2s order-1 md:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/15 via-indigo-600/10 to-violet-600/5 blur-3xl rounded-full scale-90"></div>

              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50 ring-1 ring-zinc-700/60">
                <img
                  src={DataImage.HeroImage}
                  alt="Alia Risky Fauziah"
                  className="relative w-64 sm:w-72 md:w-80 lg:w-96 object-cover block"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────── */}
      <section id="tentang" className="py-24">
        <SectionHeader badge="Tentang Saya" title="Who Am I?" />

        <div
          className="xl:w-4/5 w-full mx-auto glass-card rounded-2xl p-8 md:p-10 glass-card-hover"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="relative flex-shrink-0 mx-auto md:mx-0">
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/40 to-violet-500/40 rounded-2xl blur-sm"></div>
              <img
                src={DataImage.HeroImage}
                alt="Alia"
                className="relative w-28 h-28 rounded-2xl object-cover border border-zinc-600/50"
                loading="lazy"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Alia Risky Fauziah</h3>
              <p className="text-blue-400 text-sm mb-4 flex items-center gap-1.5">
                <i className="ri-book-open-line"></i>
                English Education · Universitas Negeri Malang
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Hi everyone! My name is Alia Risky Fauziah, you can call me
                Alia. I'm 18 years old and currently studying at Universitas
                Negeri Malang, Faculty of Letters, majoring in English
                Education. I graduated from SMA Nuris Jember and have always
                loved English since high school — joining speech contests and
                winning a few times! My favorite food is chocolate 🍫 and in my
                free time I love singing. Nice to meet you all! 😊
              </p>
            </div>
          </div>
        </div>

        {/* ── ORGANIZATION ── */}
        <div className="mt-28">
          <SectionHeader
            badge="Aktivitas"
            title="Organization"
            subtitle="Beberapa organisasi yang pernah saya ikuti sampai sekarang"
            center={false}
          />

          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                key={tool.id}
                className="group flex items-center gap-4 p-4 glass-card rounded-xl glass-card-hover"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={tool.dad}
              >
                <div className="w-14 h-14 flex-shrink-0 bg-zinc-700/80 rounded-xl overflow-hidden ring-1 ring-zinc-600/50 group-hover:ring-blue-500/30 transition-all">
                  <img
                    src={tool.gambar}
                    alt={tool.nama}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-sm leading-snug group-hover:text-white transition-colors">
                    {tool.nama}
                  </h4>
                  <p className="text-xs text-zinc-500 mt-0.5">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── EDUCATION ── */}
        <div className="mt-28">
          <SectionHeader
            badge="Riwayat"
            title="Education"
            subtitle="Jenjang pendidikan yang pernah saya tempuh"
            center={false}
          />

          <div className="relative">
            <div className="absolute left-7 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-zinc-700 to-transparent hidden sm:block"></div>

            <div className="flex flex-col gap-5">
              {listTools2.map((tool, index) => (
                <div
                  key={tool.id}
                  className="relative flex items-start gap-6 sm:pl-16 pl-0"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay={tool.dad}
                >
                  <div className="absolute left-0 top-5 w-14 h-14 flex-shrink-0 hidden sm:flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-blue-500 border-4 border-zinc-950 z-10 shadow-lg shadow-blue-500/30"></div>
                  </div>

                  <div className="flex items-center gap-4 w-full p-5 glass-card rounded-xl glass-card-hover">
                    <div className="w-14 h-14 flex-shrink-0 bg-zinc-700/80 rounded-xl overflow-hidden ring-1 ring-zinc-600/50">
                      <img
                        src={tool.gambar}
                        alt={tool.nama}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold">{tool.nama}</h4>
                      <p className="text-sm text-zinc-500 mt-0.5">{tool.ket}</p>
                    </div>
                    <span
                      className={`text-xs font-medium px-3 py-1 rounded-full flex-shrink-0 ${
                        index === listTools2.length - 1
                          ? "bg-green-500/10 text-green-400 border border-green-500/25"
                          : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                      }`}
                    >
                      {index === listTools2.length - 1 ? "Aktif" : "Lulus"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ────────────────────────────────────── */}
      <section id="proyek" className="py-24">
        <SectionHeader
          badge="Karya Saya"
          title="Portfolio"
          subtitle="Beberapa kegiatan dan pencapaian yang pernah saya raih"
        />

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
          {listProyek.map((proyek) => (
            <article
              key={proyek.id}
              className="group glass-card rounded-2xl overflow-hidden glass-card-hover"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={proyek.dad}
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={proyek.gambar}
                  alt={proyek.nama}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={proyek.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl hover:bg-white/20 transition-colors"
                  >
                    Lihat Detail
                    <i className="ri-external-link-line"></i>
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-300 transition-colors">
                  {proyek.nama}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  {proyek.desk}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {proyek.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <a
                  href={proyek.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors group/link"
                >
                  Lihat Selengkapnya
                  <i className="ri-arrow-right-line transition-transform group-hover/link:translate-x-1"></i>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────── */}
      <section id="kontak" className="py-24">
        <SectionHeader
          badge="Hubungi Saya"
          title="Contact"
          subtitle="Ingin berkolaborasi atau sekadar menyapa? Kirim pesan ke saya!"
        />

        <div
          className="max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          <form
            action="https://formsubmit.co/aliarisky10@gmail.com"
            method="POST"
            className="glass-card p-8 md:p-10 rounded-2xl"
            autoComplete="off"
          >
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-zinc-300 flex items-center gap-1.5">
                  <i className="ri-user-line text-blue-400/70"></i>
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="nama"
                  placeholder="Nama kamu..."
                  className="bg-zinc-900/80 border border-zinc-700/80 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 px-4 py-3 rounded-xl text-sm transition-all placeholder:text-zinc-600"
                  required
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-zinc-300 flex items-center gap-1.5">
                  <i className="ri-mail-line text-blue-400/70"></i>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email@kamu.com"
                  className="bg-zinc-900/80 border border-zinc-700/80 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 px-4 py-3 rounded-xl text-sm transition-all placeholder:text-zinc-600"
                  required
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  className="text-sm font-semibold text-zinc-300 flex items-center gap-1.5"
                  htmlFor="pesan"
                >
                  <i className="ri-chat-3-line text-blue-400/70"></i>
                  Pesan
                </label>
                <textarea
                  name="pesan"
                  id="pesan"
                  rows="5"
                  placeholder="Tulis pesanmu di sini..."
                  className="bg-zinc-900/80 border border-zinc-700/80 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 px-4 py-3 rounded-xl text-sm transition-all resize-none placeholder:text-zinc-600"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full justify-center mt-1 cursor-pointer">
                Kirim Pesan
                <i className="ri-send-plane-line"></i>
              </button>
            </div>
          </form>

          <div className="flex justify-center gap-4 mt-10">
            {[
              { href: "https://www.instagram.com/alrskyriss/", icon: "ri-instagram-fill", label: "Instagram", hover: "hover:border-pink-500/50 hover:text-pink-400" },
              { href: "https://wa.me/6285745695068", icon: "ri-whatsapp-fill", label: "WhatsApp", hover: "hover:border-green-500/50 hover:text-green-400" },
              { href: "https://www.tiktok.com/@alrskyy_", icon: "ri-tiktok-fill", label: "TikTok", hover: "hover:border-zinc-400/50 hover:text-white" },
            ].map((s) => (
              <a
                key={s.icon}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2.5 text-sm text-zinc-400 glass-card px-5 py-3 rounded-xl transition-all duration-200 ${s.hover}`}
              >
                <i className={`${s.icon} ri-lg`}></i>
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
