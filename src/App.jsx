import DataImage from "./data";
import { listTools, listTools2, listProyek } from "./data";

function App() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        id="beranda"
        className="min-h-screen flex items-center pt-24 pb-16"
      >
        <div className="grid md:grid-cols-2 items-center gap-12 w-full">
          {/* Text */}
          <div className="animate__animated animate__fadeInUp animate__delay-1s">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 bg-zinc-800 border border-zinc-700 px-4 py-2 rounded-full text-sm text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></span>
              Available for collaboration
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-600">
                Alia Risky
              </span>
              <br />
              Fauziah
            </h1>

            <p className="text-base leading-relaxed text-zinc-400 mb-8 max-w-lg">
              English Education student at Universitas Negeri Malang. Passionate
              about communication, public speaking, and language teaching. I've
              competed in speech contests and love inspiring others through the
              power of English.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href=""
                className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/25"
              >
                Download CV
                <i className="ri-download-cloud-line"></i>
              </a>
              <a
                href="#tentang"
                className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 px-6 py-3 rounded-xl font-medium transition-all duration-200"
              >
                Tentang Saya
                <i className="ri-arrow-down-line"></i>
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-10 pt-8 border-t border-zinc-800">
              <div>
                <span className="text-3xl font-bold text-violet-400">5+</span>
                <p className="text-sm text-zinc-500 mt-1">Achievements</p>
              </div>
              <div>
                <span className="text-3xl font-bold text-violet-400">3+</span>
                <p className="text-sm text-zinc-500 mt-1">Years Experience</p>
              </div>
              <div>
                <span className="text-3xl font-bold text-violet-400">4+</span>
                <p className="text-sm text-zinc-500 mt-1">Organizations</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative flex justify-center md:justify-end animate__animated animate__fadeInUp animate__delay-2s">
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-violet-600/20 blur-3xl rounded-full scale-75"></div>
            <img
              src={DataImage.HeroImage}
              alt="Alia Risky Fauziah"
              className="relative w-72 md:w-96 rounded-3xl object-cover shadow-2xl shadow-black/50 border border-zinc-700"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────── */}
      <section id="tentang" className="py-20">
        <div className="text-center mb-14" data-aos="fade-up" data-aos-duration="800">
          <p className="text-sm text-violet-400 font-semibold uppercase tracking-widest mb-2">
            Tentang Saya
          </p>
          <h2 className="text-4xl font-bold">Who Am I?</h2>
        </div>

        <div
          className="xl:w-3/4 w-full mx-auto bg-zinc-800/60 border border-zinc-700 rounded-2xl p-8 md:p-10 backdrop-blur-sm"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <img
              src={DataImage.HeroImage}
              alt="Alia"
              className="w-24 h-24 rounded-2xl object-cover border border-zinc-600 flex-shrink-0 mx-auto md:mx-0"
              loading="lazy"
            />
            <div>
              <h3 className="text-xl font-bold mb-1">Alia Risky Fauziah</h3>
              <p className="text-violet-400 text-sm mb-4">
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
        <div className="mt-24">
          <div
            className="mb-10"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <p className="text-sm text-violet-400 font-semibold uppercase tracking-widest mb-2">
              Aktivitas
            </p>
            <h2 className="text-3xl font-bold">Organization</h2>
            <p className="text-zinc-400 mt-2 max-w-md">
              Beberapa organisasi yang pernah saya ikuti sampai sekarang
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                key={tool.id}
                className="group flex items-center gap-4 p-4 bg-zinc-800/50 border border-zinc-700 rounded-xl hover:border-violet-500/50 hover:bg-zinc-800 transition-all duration-200"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={tool.dad}
              >
                <div className="w-14 h-14 flex-shrink-0 bg-zinc-700 rounded-xl overflow-hidden group-hover:bg-zinc-600 transition-colors">
                  <img
                    src={tool.gambar}
                    alt={tool.nama}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-sm leading-snug">{tool.nama}</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── EDUCATION ── */}
        <div className="mt-24">
          <div
            className="mb-10"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <p className="text-sm text-violet-400 font-semibold uppercase tracking-widest mb-2">
              Riwayat
            </p>
            <h2 className="text-3xl font-bold">Education</h2>
            <p className="text-zinc-400 mt-2 max-w-md">
              Jenjang pendidikan yang pernah saya tempuh
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-7 top-0 bottom-0 w-px bg-zinc-700 hidden sm:block"></div>

            <div className="flex flex-col gap-6">
              {listTools2.map((tool, index) => (
                <div
                  key={tool.id}
                  className="relative flex items-start gap-6 sm:pl-16 pl-0"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay={tool.dad}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-5 w-14 h-14 flex-shrink-0 hidden sm:flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-violet-500 border-4 border-zinc-900 z-10"></div>
                  </div>

                  <div className="flex items-center gap-4 w-full p-5 bg-zinc-800/50 border border-zinc-700 rounded-xl hover:border-violet-500/50 transition-all duration-200">
                    <div className="w-14 h-14 flex-shrink-0 bg-zinc-700 rounded-xl overflow-hidden">
                      <img
                        src={tool.gambar}
                        alt={tool.nama}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{tool.nama}</h4>
                      <p className="text-sm text-zinc-500 mt-0.5">{tool.ket}</p>
                    </div>
                    <div className="ml-auto">
                      <span className="text-xs font-medium bg-violet-500/10 text-violet-400 border border-violet-500/20 px-3 py-1 rounded-full">
                        {index === listTools2.length - 1 ? "Aktif" : "Lulus"}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ────────────────────────────────────── */}
      <section id="proyek" className="py-20">
        <div
          className="text-center mb-14"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <p className="text-sm text-violet-400 font-semibold uppercase tracking-widest mb-2">
            Karya Saya
          </p>
          <h2 className="text-4xl font-bold">Portfolio</h2>
          <p className="text-zinc-400 mt-3 max-w-md mx-auto">
            Beberapa kegiatan dan pencapaian yang pernah saya raih
          </p>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className="group bg-zinc-800/50 border border-zinc-700 rounded-2xl overflow-hidden hover:border-violet-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/5"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={proyek.dad}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={proyek.gambar}
                  alt={proyek.nama}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{proyek.nama}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  {proyek.desk}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {proyek.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium px-3 py-1 bg-violet-500/10 text-violet-400 border border-violet-500/20 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <a
                  href={proyek.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors group/link"
                >
                  Lihat Selengkapnya
                  <i className="ri-arrow-right-line transition-transform group-hover/link:translate-x-1"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────── */}
      <section id="kontak" className="py-20">
        <div
          className="text-center mb-14"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <p className="text-sm text-violet-400 font-semibold uppercase tracking-widest mb-2">
            Hubungi Saya
          </p>
          <h2 className="text-4xl font-bold">Contact</h2>
          <p className="text-zinc-400 mt-3 max-w-md mx-auto">
            Ingin berkolaborasi atau sekadar menyapa? Kirim pesan ke saya!
          </p>
        </div>

        <div
          className="max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          <form
            action="https://formsubmit.co/aliarisky10@gmail.com"
            method="POST"
            className="bg-zinc-800/60 border border-zinc-700 p-8 rounded-2xl backdrop-blur-sm"
            autoComplete="off"
          >
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-zinc-300">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="nama"
                  placeholder="Nama kamu..."
                  className="bg-zinc-900 border border-zinc-700 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500/50 px-4 py-3 rounded-xl text-sm transition-colors placeholder:text-zinc-600"
                  required
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-zinc-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email@kamu.com"
                  className="bg-zinc-900 border border-zinc-700 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500/50 px-4 py-3 rounded-xl text-sm transition-colors placeholder:text-zinc-600"
                  required
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  className="text-sm font-semibold text-zinc-300"
                  htmlFor="pesan"
                >
                  Pesan
                </label>
                <textarea
                  name="pesan"
                  id="pesan"
                  rows="5"
                  placeholder="Tulis pesanmu di sini..."
                  className="bg-zinc-900 border border-zinc-700 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500/50 px-4 py-3 rounded-xl text-sm transition-colors resize-none placeholder:text-zinc-600"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/25 cursor-pointer mt-1"
              >
                Kirim Pesan
                <i className="ri-send-plane-line"></i>
              </button>
            </div>
          </form>

          {/* Social quick links */}
          <div className="flex justify-center gap-4 mt-8">
            {[
              { href: "https://www.instagram.com/alrskyriss/", icon: "ri-instagram-fill", label: "Instagram" },
              { href: "https://wa.me/6285745695068", icon: "ri-whatsapp-fill", label: "WhatsApp" },
              { href: "https://www.tiktok.com/@alrskyy_", icon: "ri-tiktok-fill", label: "TikTok" },
            ].map((s) => (
              <a
                key={s.icon}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
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
