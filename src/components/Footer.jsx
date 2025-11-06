export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>
          © {new Date().getFullYear()} Sistem Sarpras • Peminjaman & Pengembalian Barang
        </p>
        <p className="text-slate-500">Dibuat dengan cinta untuk tata kelola sarpras yang lebih rapi.</p>
      </div>
    </footer>
  );
}
