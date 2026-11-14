import { useEffect, useState } from 'react';
import SessionNavigation from './SessionNavigation';
import { addMenuItem, deleteMenuItem, listenMenu, updateMenuItem } from '../services/firestoreService';
import toast from 'react-hot-toast';
import ConfirmDialog from './ConfirmDialog';
import { useAuth } from '../App';

const formatInr = (n = 0) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n || 0);

export default function UpdateMenuSection() {
  const { user, isDemo } = useAuth();
  const [session, setSession] = useState('morning');
  const [menu, setMenu] = useState([]);
  const [form, setForm] = useState({ itemName: '', price: '', isAvailable: true });
  const [editingId, setEditingId] = useState(null);
  const [confirmId, setConfirmId] = useState(null);
  const [simulatedAlert, setSimulatedAlert] = useState(null);

  const canEditMenu = !isDemo || user?.permissions?.includes('update') || user?.role === 'owner';

  useEffect(() => {
    const unsub = listenMenu(session, snap => setMenu(snap.docs.map(d => ({ id: d.id, ...d.data() }))));
    return unsub;
  }, [session]);

  const sendWhatsappPriceChange = (name, oldPrice, newPrice) => {
    const msg = `Price updated: ${name}\nOld: ₹${oldPrice} -> New: ₹${newPrice}\nSession: ${session}`;

    if (isDemo) {
      // In Demo mode, simulate the external WhatsApp notification safely
      setSimulatedAlert({
        recipient: '+91 93426 95097 (Sri Raghavendra Mess Owner)',
        message: msg,
        timestamp: new Date().toLocaleTimeString()
      });
      return;
    }

    // Production behavior
    const url = `https://wa.me/919342695097?text=${encodeURIComponent(msg)}`;
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noreferrer noopener";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const submit = async () => {
    if (!canEditMenu) {
      return toast.error('Demo Notice: Switch to Owner role in the top banner to modify menu items.');
    }
    if (!form.itemName.trim()) return toast.error('Item name required');
    if (!Number(form.price)) return toast.error('Valid price required');

    if (editingId) {
      const existing = menu.find(m => m.id === editingId);
      const oldPrice = existing?.price;
      await updateMenuItem(editingId, { ...form, price: Number(form.price), sessionType: session });
      toast.success('Item updated');
      if (oldPrice != null && oldPrice !== Number(form.price)) {
        sendWhatsappPriceChange(form.itemName, oldPrice, Number(form.price));
      }
    } else {
      await addMenuItem({ ...form, price: Number(form.price), sessionType: session });
      toast.success('Item added');
    }
    setForm({ itemName: '', price: '', isAvailable: true });
    setEditingId(null);
  };

  const startEdit = (item) => {
    if (!canEditMenu) {
      return toast.error('Switch to Owner role to edit menu items.');
    }
    setForm({ itemName: item.itemName, price: item.price, isAvailable: item.isAvailable });
    setEditingId(item.id);
  };

  const toggleAvailability = (item) => {
    if (!canEditMenu) {
      return toast.error('Switch to Owner role to toggle availability.');
    }
    updateMenuItem(item.id, { isAvailable: !item.isAvailable });
  };

  const handleDelete = async () => {
    if (!canEditMenu) {
      setConfirmId(null);
      return toast.error('Switch to Owner role to delete menu items.');
    }
    await deleteMenuItem(confirmId);
    setConfirmId(null);
    toast.success('Deleted');
  };

  return (
    <div className="card space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div>
          <h2 className="text-xl font-semibold">Update Menu</h2>
          {isDemo && !canEditMenu && (
            <p className="text-xs text-amber-600 font-medium">
              View-only mode for {user?.role || 'current'} role. Switch to Owner role above for full edit access.
            </p>
          )}
        </div>
        <SessionNavigation session={session} onChange={setSession} />
      </div>

      <div className="grid md:grid-cols-4 gap-3">
        <input
          className="input"
          placeholder="Item name"
          value={form.itemName}
          onChange={e => setForm(f => ({ ...f, itemName: e.target.value }))}
        />
        <input
          className="input"
          type="number"
          placeholder="Price (₹)"
          value={form.price}
          onChange={e => setForm(f => ({ ...f, price: e.target.value }))}
        />
        <label className="flex items-center gap-2 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={form.isAvailable}
            onChange={e => setForm(f => ({ ...f, isAvailable: e.target.checked }))}
          />
          <span className="text-sm font-medium">Available</span>
        </label>
        <button
          className="btn btn-primary"
          onClick={submit}
        >
          {editingId ? 'Update Item' : 'Add Item'}
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table min-w-[520px]">
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Avail</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {menu.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center text-slate-500 py-4">No items for this session</td>
              </tr>
            )}
            {menu.map(m => (
              <tr key={m.id}>
                <td className="font-medium">{m.itemName}</td>
                <td>{formatInr(m.price)}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={m.isAvailable}
                    onChange={() => toggleAvailability(m)}
                  />
                </td>
                <td>
                  <div className="flex flex-wrap sm:flex-nowrap gap-2">
                    <button
                      className="btn btn-ghost w-full sm:w-auto px-3 text-xs"
                      onClick={() => startEdit(m)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-ghost w-full sm:w-auto px-3 text-xs text-rose-600 hover:text-rose-700"
                      onClick={() => setConfirmId(m.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ConfirmDialog open={!!confirmId} onClose={() => setConfirmId(null)} onConfirm={handleDelete} />

      {/* Simulated External Notification Modal (Demo Isolation) */}
      {simulatedAlert && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white text-slate-900 rounded-2xl max-w-md w-full p-6 shadow-2xl border border-emerald-500/40 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xl">
                💬
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">WhatsApp Notification Simulated</h3>
                <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-semibold">
                  Demo Isolation Active
                </span>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-1.5 text-xs text-slate-700">
              <div><strong className="text-slate-900">Recipient:</strong> {simulatedAlert.recipient}</div>
              <div><strong className="text-slate-900">Dispatched:</strong> {simulatedAlert.timestamp}</div>
              <div className="mt-2 pt-2 border-t border-slate-200">
                <strong className="text-slate-900 block mb-1">Payload Content:</strong>
                <pre className="bg-white p-2 rounded border border-slate-200 text-slate-800 whitespace-pre-wrap font-sans text-xs">
                  {simulatedAlert.message}
                </pre>
              </div>
            </div>

            <p className="text-xs text-slate-500 italic">
              ℹ️ In production, this directly notifies the mess owner via WhatsApp Web. In Demo mode, external API/SMS/WhatsApp triggers are safely simulated without contacting real phone numbers.
            </p>

            <div className="flex justify-end pt-1">
              <button
                className="btn btn-primary px-4 py-1.5 text-sm"
                onClick={() => setSimulatedAlert(null)}
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
