import { useEffect, useState } from 'react';
import Header from '../components/Header';
import MainNavigation from '../components/MainNavigation';
import MenuSection from '../components/MenuSection';
import UpdateMenuSection from '../components/UpdateMenuSection';
import AccountsSection from '../components/AccountsSection';
import OrdersSection from '../components/OrdersSection';
import { useAuth } from '../App';

export default function DashboardPage() {
  const { user } = useAuth();
  const defaultTab = user?.role === 'auditor' ? 'accounts' : 'menu';
  const [tab, setTab] = useState(defaultTab);

  useEffect(() => {
    document.title = `Sri Raghavendra Mess - ${tab}`;
  }, [tab]);

  // Adjust default tab when role changes
  useEffect(() => {
    if (user?.role === 'auditor' && tab === 'menu') {
      setTab('accounts');
    }
  }, [user?.role]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="max-w-6xl mx-auto px-3 pb-10">
        <MainNavigation active={tab} onChange={setTab} />
        {tab === 'menu' && <MenuSection />}
        {tab === 'update' && <UpdateMenuSection />}
        {tab === 'accounts' && <AccountsSection />}
        {tab === 'orders' && <OrdersSection />}
      </main>
    </div>
  );
}
