import { useEffect, useState } from "react";
import { PackageSearch } from "lucide-react";

const sampleItems = [
  { id: 1, name: "Proyektor Epson", code: "PR-001", status: "Tersedia" },
  { id: 2, name: "Laptop Lenovo", code: "LP-014", status: "Dipinjam" },
  { id: 3, name: "Speaker Portable", code: "SP-008", status: "Tersedia" },
  { id: 4, name: "Kamera Canon", code: "KM-023", status: "Perbaikan" },
];

export default function InventoryList() {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState(sampleItems);

  useEffect(() => {
    const q = query.toLowerCase();
    setItems(sampleItems.filter((it) => it.name.toLowerCase().includes(q) || it.code.toLowerCase().includes(q)));
  }, [query]);

  return (
    <section id="inventaris" className="py-16 border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Inventaris</h2>
            <p className="text-slate-600">Cari dan cek ketersediaan barang.</p>
          </div>
          <div className="relative w-full max-w-xs">
            <PackageSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari nama atau kode barang..."
              className="w-full rounded-md border border-slate-300 pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <div key={item.id} className="rounded-lg border border-slate-200 p-4 bg-white shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-slate-900">{item.name}</h3>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  item.status === "Tersedia"
                    ? "bg-green-100 text-green-700"
                    : item.status === "Dipinjam"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-slate-100 text-slate-700"
                }`}>
                  {item.status}
                </span>
              </div>
              <p className="text-sm text-slate-600">Kode: {item.code}</p>
              <button className="mt-4 w-full rounded-md bg-indigo-600 text-white py-2 text-sm font-medium hover:bg-indigo-700 transition disabled:opacity-50" disabled={item.status !== "Tersedia"}>
                {item.status === "Tersedia" ? "Pinjam Sekarang" : "Tidak Tersedia"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
