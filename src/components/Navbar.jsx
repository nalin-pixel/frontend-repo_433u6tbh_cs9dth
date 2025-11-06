import { Home, Package, ClipboardList } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Package className="h-6 w-6 text-indigo-600" />
          <span className="font-semibold text-slate-800 tracking-tight">SARPRAS Borrow</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
          <a href="#home" className="flex items-center gap-2 hover:text-slate-900 transition"><Home className="h-4 w-4" /> Beranda</a>
          <a href="#peminjaman" className="flex items-center gap-2 hover:text-slate-900 transition"><ClipboardList className="h-4 w-4" /> Peminjaman</a>
          <a href="#inventaris" className="flex items-center gap-2 hover:text-slate-900 transition"><Package className="h-4 w-4" /> Inventaris</a>
        </nav>
      </div>
    </header>
  );
}
