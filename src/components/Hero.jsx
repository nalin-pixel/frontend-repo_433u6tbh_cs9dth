export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Sistem Peminjaman & Pengembalian Barang Sarpras
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              Kelola inventaris, ajukan peminjaman, dan pantau status pengembalian dengan mudah dalam satu tempat.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#peminjaman" className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-2.5 text-white font-medium shadow hover:bg-indigo-700 transition">
                Ajukan Peminjaman
              </a>
              <a href="#inventaris" className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-2.5 text-slate-700 font-medium hover:bg-slate-50 transition">
                Lihat Inventaris
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-xl bg-gradient-to-br from-indigo-100 via-white to-blue-100 border border-slate-200 p-6">
              <div className="grid grid-cols-3 gap-3 h-full">
                <div className="rounded-lg bg-white border border-slate-200 shadow-sm" />
                <div className="rounded-lg bg-white border border-slate-200 shadow-sm" />
                <div className="rounded-lg bg-white border border-slate-200 shadow-sm" />
                <div className="rounded-lg bg-white border border-slate-200 shadow-sm" />
                <div className="rounded-lg bg-white border border-slate-200 shadow-sm" />
                <div className="rounded-lg bg-white border border-slate-200 shadow-sm" />
                <div className="rounded-lg bg-white border border-slate-200 shadow-sm" />
                <div className="rounded-lg bg-white border border-slate-200 shadow-sm" />
                <div className="rounded-lg bg-white border border-slate-200 shadow-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
