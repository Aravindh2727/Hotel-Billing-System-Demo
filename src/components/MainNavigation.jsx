import clsx from 'clsx';
import { useAuth } from '../App';

const buttons = [
  { key: 'menu', label: 'Menu', icon: '🍽️' },
  { key: 'update', label: 'Update Menu', icon: '📝' },
  { key: 'orders', label: 'Orders', icon: '📋' },
  { key: 'accounts', label: 'Accounts', icon: '📊' },
];

export default function MainNavigation({ active, onChange }) {
  const { user, isDemo } = useAuth();
  const role = user?.role || 'owner';

  return (
    <nav aria-label="Main Navigation" className="grid grid-cols-2 md:grid-cols-4 gap-3 my-4">
      {buttons.map(btn => {
        const isActive = active === btn.key;
        const isRestrictedForRole = isDemo && (
          (role === 'cashier' && (btn.key === 'update' || btn.key === 'accounts')) ||
          (role === 'auditor' && (btn.key === 'update' || btn.key === 'menu'))
        );

        return (
          <button
            key={btn.key}
            className={clsx(
              "btn h-14 text-sm md:text-base flex items-center justify-center gap-2 relative transition",
              isActive ? "btn-primary shadow-lg" : "btn-ghost",
              isRestrictedForRole && "opacity-80"
            )}
            onClick={() => onChange(btn.key)}
          >
            <span>{btn.icon}</span>
            <span>{btn.label}</span>
            {isRestrictedForRole && (
              <span className="absolute top-1 right-2 text-[9px] bg-slate-200 text-slate-700 px-1.5 py-0.2 rounded font-semibold">
                view-only
              </span>
            )}
          </button>
        );
      })}
    </nav>
  );
}
