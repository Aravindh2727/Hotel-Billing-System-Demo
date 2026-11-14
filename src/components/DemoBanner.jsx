import { useState } from 'react';
import { useAuth } from '../App';
import { DEMO_ROLES } from '../services/demoAuthService';
import toast from 'react-hot-toast';

export default function DemoBanner() {
  const { user, switchDemoRole, resetDemo, toggleMode } = useAuth();
  const [showConfirmReset, setShowConfirmReset] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const currentRole = user?.role || 'owner';

  const handleRoleChange = async (newRole) => {
    try {
      await switchDemoRole(newRole);
      toast.success(`Switched role to ${DEMO_ROLES[newRole]?.displayName || newRole}`);
    } catch (e) {
      toast.error('Failed to switch demo role');
    }
  };

  const handleReset = () => {
    resetDemo();
    setShowConfirmReset(false);
    toast.success('Demo data restored to initial pristine state!');
  };

  if (collapsed) {
    return (
      <aside aria-label="Demo Status" className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setCollapsed(false)}
          className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-xs uppercase px-3.5 py-2 rounded-full shadow-2xl hover:scale-105 transition border border-amber-300"
          title="Click to expand Demo Controls"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          Demo Mode
        </button>
      </aside>
    );
  }

  return (
    <aside aria-label="Demo Controls" className="sticky top-0 z-40 bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 text-white border-b border-amber-500/40 shadow-lg text-xs md:text-sm">
      <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-2.5">
        
        {/* Left: Indicator & Description */}
        <div className="flex items-center gap-2.5 flex-wrap justify-center md:justify-start">
          <span className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 border border-amber-400/50 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Public Demo
          </span>
          <span className="text-slate-300 text-xs hidden sm:inline">
            Isolated Sandbox  Zero Production Access
          </span>
        </div>

        {/* Center: Role Switcher */}
        {user && (
          <div className="flex items-center gap-1.5 bg-slate-950/60 p-1 rounded-xl border border-slate-700/80">
            <span className="text-[11px] text-slate-400 px-2 uppercase font-semibold">Role:</span>
            {Object.keys(DEMO_ROLES).map(roleKey => {
              const role = DEMO_ROLES[roleKey];
              const isActive = currentRole === roleKey;
              return (
                <button
                  key={roleKey}
                  onClick={() => handleRoleChange(roleKey)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 shadow-sm'
                      : 'text-slate-300 hover:bg-white/10'
                  }`}
                  title={role.description}
                >
                  {role.badge}
                </button>
              );
            })}
          </div>
        )}

        {/* Right: Actions (Reset, Switch Mode, Collapse) */}
        <div className="flex items-center gap-2 flex-wrap">
          {user && (
            <button
              onClick={() => setShowConfirmReset(true)}
              className="px-2.5 py-1 bg-rose-600/30 hover:bg-rose-600 text-rose-200 hover:text-white border border-rose-500/40 rounded-lg text-xs font-semibold transition"
              title="Reset all bills, menu items, and expenses to default sample state"
            >
              🔄 Reset Data
            </button>
          )}

          <button
            onClick={() => toggleMode('production')}
            className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-600 rounded-lg text-xs transition"
            title="Switch to live production authentication"
          >
            Prod Mode
          </button>

          <button
            onClick={() => setCollapsed(true)}
            className="text-slate-400 hover:text-slate-100 px-1 py-0.5 text-xs font-bold"
            title="Minimize banner"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Confirmation Modal for Reset */}
      {showConfirmReset && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white text-slate-900 rounded-2xl max-w-sm w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center gap-3 text-amber-600">
              <span className="text-2xl">⚠️</span>
              <h3 className="text-lg font-bold">Reset Demo Data?</h3>
            </div>
            <p className="text-sm text-slate-600">
              This will restore all menu items, bills, and expenses to the initial realistic sample dataset. Any temporary bills or changes you added will be refreshed.
            </p>
            <div className="flex gap-2 justify-end pt-2">
              <button
                className="btn btn-ghost px-4 py-2 text-sm"
                onClick={() => setShowConfirmReset(false)}
              >
                Cancel
              </button>
              <button
                className="btn bg-rose-600 hover:bg-rose-700 text-white font-semibold px-4 py-2 text-sm rounded-xl"
                onClick={handleReset}
              >
                Yes, Reset Data
              </button>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}

