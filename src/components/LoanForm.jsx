import { useState } from "react";
import { Calendar, User, ClipboardCheck } from "lucide-react";

export default function LoanForm() {
  const [form, setForm] = useState({
    borrower: "",
    item: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Pengajuan terkirim!\nPeminjam: ${form.borrower}\nBarang: ${form.item}`);
  };

  return (
    <section id="peminjaman" className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Form Peminjaman</h2>
        <p className="text-slate-600 mb-6">Isi data berikut untuk mengajukan peminjaman barang.</p>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Nama Peminjam</label>
            <div className="relative">
              <User className="h-4 w-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                name="borrower"
                value={form.borrower}
                onChange={handleChange}
                required
                placeholder="Masukkan nama lengkap"
                className="w-full rounded-md border border-slate-300 pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Nama/ID Barang</label>
            <div className="relative">
              <ClipboardCheck className="h-4 w-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                name="item"
                value={form.item}
                onChange={handleChange}
                required
                placeholder="Contoh: Proyektor PR-001"
                className="w-full rounded-md border border-slate-300 pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Tanggal Pinjam</label>
              <div className="relative">
                <Calendar className="h-4 w-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="date"
                  name="startDate"
                  value={form.startDate}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-slate-300 pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Tanggal Kembali</label>
              <div className="relative">
                <Calendar className="h-4 w-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="date"
                  name="endDate"
                  value={form.endDate}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-slate-300 pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
          </div>

          <div className="pt-2">
            <button type="submit" className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-2.5 text-white font-medium shadow hover:bg-indigo-700 transition">
              Ajukan Peminjaman
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
