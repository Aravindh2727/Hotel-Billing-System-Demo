import { useEffect, useState } from 'react';
import { logout } from '../services/authService';
import { useAuth } from '../App';
import { DEMO_ROLES } from '../services/demoAuthService';

export default function Header() {
  const { user, isDemo } = useAuth();
  const [clock, setClock] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setClock(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const roleInfo = user?.role ? DEMO_ROLES[user.role] : null;

  return (
    <header className="sticky top-0 z-30">
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-indigo-700 to-amber-500 text-white shadow-xl">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,#fcd34d,transparent_25%),radial-gradient(circle_at_80%_10%,#a5b4fc,transparent_30%)]"></div>
        <div className="relative max-w-6xl mx-auto px-5 py-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-full bg-white/20 backdrop-blur overflow-hidden border border-white/40 shadow-sm flex items-center justify-center font-bold text-amber-200">
              <img
                src={`${import.meta.env.BASE_URL}sri-raghavendra-image.jpg`}
                alt="Sri Raghavendra"
                className="h-full w-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            <div className="leading-tight">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-[0.2em] text-amber-200">Hotel Billing</span>
                {isDemo && (
                  <span className="bg-amber-400 text-slate-950 font-extrabold text-[10px] px-1.5 py-0.5 rounded uppercase">
                    Demo
                  </span>
                )}
              </div>
              <div className="text-xl font-bold">Sri Raghavendra Mess</div>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            {isDemo && roleInfo && (
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/20 backdrop-blur text-xs font-semibold text-amber-100 border border-white/20">
                <span>{roleInfo.badge}</span>
              </div>
            )}

            <div className="px-3 py-2 rounded-lg bg-white/15 backdrop-blur text-sm font-semibold shadow-sm">
              {new Intl.DateTimeFormat('en-GB').format(clock)} - {clock.toLocaleTimeString('en-IN')}
            </div>

            <button
              className="btn px-4 py-2 rounded-lg bg-white text-indigo-900 font-bold shadow hover:bg-amber-100 text-sm"
              onClick={logout}
            >
              Logout
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
