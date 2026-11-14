import { useEffect, useState } from 'react';
import { isSessionValid, signInWithEmail, signInDemoRole, DEMO_ROLES } from '../services/authService';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../App';
import { isDemoMode, setAppMode } from '../config/env';

export default function LoginPage() {
  const { user } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const isDemo = isDemoMode();
  const ownerEmail = import.meta.env.VITE_OWNER_EMAIL || 'sriraghavendramess28@gmail.com';

  useEffect(() => {
    if (user && isSessionValid()) navigate('/dashboard', { replace: true });
  }, [user, navigate]);

  const handleLogin = async () => {
    if (!isDemo && email.trim().toLowerCase() !== ownerEmail.toLowerCase()) {
      return toast.error('Only owner email allowed in production');
    }
    if (!password) return toast.error('Password required');
    try {
      setLoading(true);
      await signInWithEmail(email.trim(), password);
      toast.success('Login success');
      navigate('/dashboard', { replace: true });
    } catch (e) {
      toast.error(e.message || 'Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  const handleQuickDemoLogin = async (roleKey = 'owner') => {
    try {
      setLoading(true);
      await signInDemoRole(roleKey);
      toast.success(`Logged in as ${DEMO_ROLES[roleKey]?.displayName || 'Demo User'}`);
      navigate('/dashboard', { replace: true });
    } catch (e) {
      toast.error('Failed to start demo session');
    } finally {
      setLoading(false);
    }
  };

  const fillCredentials = (roleEmail, rolePass) => {
    setEmail(roleEmail);
    setPassword(rolePass);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-slate-950 text-white overflow-hidden px-4 py-10">
      <Toaster />

      {/* ambient orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>

      {/* Top Header Logo */}
      <div className="absolute top-6 left-4 flex items-center gap-3 text-sm text-slate-200 bg-white/5 px-4 py-2 rounded-full backdrop-blur shadow-lg shadow-amber-500/20">
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center font-bold text-slate-900 shadow-lg">
          AVS
        </div>
        <div>
          <div className="font-semibold tracking-wide uppercase text-amber-200">Sri Raghavendra Mess</div>
          <div className="text-xs text-slate-200/80">Hotel Billing System</div>
        </div>
      </div>

      {/* Mode Switcher in top right */}
      <div className="absolute top-6 right-4 z-20">
        <button
          onClick={() => setAppMode(isDemo ? 'production' : 'demo')}
          className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-200 border border-white/20 transition flex items-center gap-1.5"
        >
          <span className={`w-2 h-2 rounded-full ${isDemo ? 'bg-emerald-400' : 'bg-blue-400'}`}></span>
          {isDemo ? 'Demo Mode Active' : 'Production Mode'}
        </button>
      </div>

      {/* Login Card */}
      <div className="card max-w-md w-full bg-white text-slate-900 shadow-2xl relative overflow-hidden my-auto">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-400 via-pink-500 to-indigo-500 animate-shimmer"></div>
        <div className="p-7 md:p-8 space-y-6">

          <div className="text-center space-y-2">
            {isDemo ? (
              <span className="inline-block bg-amber-100 text-amber-900 text-xs uppercase font-extrabold px-3 py-1 rounded-full tracking-wider">
                Interactive Public Demo
              </span>
            ) : (
              <p className="text-xs uppercase tracking-[0.25em] text-amber-500">Owner Access</p>
            )}
            <h1 className="text-2xl md:text-3xl font-bold">Welcome Back</h1>
            <p className="text-sm text-slate-500">
              {isDemo
                ? 'Explore full billing, orders, analytics, and menu features in sandbox mode.'
                : 'Manage menu, orders, and accounts securely.'}
            </p>
          </div>

          {/* Quick 1-Click Demo Login Bar */}
          {isDemo && (
            <div className="space-y-3 bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-2xl border border-amber-200/80">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-900 uppercase tracking-wider">
                  ⚡ 1-Click Instant Access
                </span>
                <span className="text-[11px] text-amber-700">No signup needed</span>
              </div>

              <button
                className="btn w-full h-11 text-sm font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-slate-950 shadow-md hover:brightness-105 border-0"
                onClick={() => handleQuickDemoLogin('owner')}
                disabled={loading}
              >
                🚀 Enter Demo as Owner (Full Access)
              </button>

              <div className="pt-2 border-t border-amber-200/60">
                <div className="text-[11px] font-semibold text-slate-600 mb-2">Or test other demo roles:</div>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handleQuickDemoLogin('cashier')}
                    disabled={loading}
                    className="px-2.5 py-1.5 text-xs font-semibold bg-white text-slate-800 rounded-lg border border-amber-200 hover:bg-amber-100/50 shadow-xs text-left"
                  >
                    ⚡ Cashier (POS)
                  </button>
                  <button
                    onClick={() => handleQuickDemoLogin('auditor')}
                    disabled={loading}
                    className="px-2.5 py-1.5 text-xs font-semibold bg-white text-slate-800 rounded-lg border border-amber-200 hover:bg-amber-100/50 shadow-xs text-left"
                  >
                    📊 Auditor (Reports)
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Email / Password Form */}
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wide">Email</label>
                {isDemo && (
                  <button
                    type="button"
                    onClick={() => fillCredentials('owner@raghavendramess.demo', 'demopassword')}
                    className="text-[11px] text-indigo-600 hover:underline"
                  >
                    Auto-fill demo credentials
                  </button>
                )}
              </div>
              <input
                className="input bg-white text-slate-900 border border-slate-200"
                type="email"
                value={email}
                onChange={e=>setEmail(e.target.value)}
                placeholder={isDemo ? "owner@raghavendramess.demo" : "owner@gmail.com"}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1">Password</label>
              <input
                className="input bg-white text-slate-900 border border-slate-200"
                type="password"
                value={password}
                onChange={e=>setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>{isDemo ? '🔒 Isolated Sandbox' : '🔒 Secure Production'}</span>
            <span className="flex items-center gap-1">24/7 Support</span>
          </div>

          <button
            className="btn w-full h-12 font-semibold text-lg bg-gradient-to-r from-amber-400 via-pink-500 to-indigo-500 shadow-lg shadow-amber-500/40 border-0 animate-gradient text-white"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? 'Signing in...' : isDemo ? 'Sign In to Demo' : 'Enter Dashboard'}
          </button>

          {/* Mode Switch Helper */}
          <div className="text-center text-xs text-slate-500 pt-1">
            {isDemo ? (
              <span>Are you the mess owner? <button onClick={() => setAppMode('production')} className="text-indigo-600 font-semibold underline">Switch to Production Login</button></span>
            ) : (
              <span>Looking for the public portfolio demo? <button onClick={() => setAppMode('demo')} className="text-amber-600 font-semibold underline">Switch to Demo Mode</button></span>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .orb { position:absolute; border-radius:9999px; filter: blur(80px); opacity:0.35; animation: float 16s ease-in-out infinite; }
        .orb-1 { width:320px; height:320px; background:radial-gradient(circle,#f59e0b,transparent 60%); top:-80px; left:-80px; }
        .orb-2 { width:260px; height:260px; background:radial-gradient(circle,#8b5cf6,transparent 60%); bottom:10%; right:-60px; animation-duration:18s; }
        .orb-3 { width:180px; height:180px; background:radial-gradient(circle,#22d3ee,transparent 60%); bottom:-40px; left:25%; animation-duration:20s; }
        @keyframes float { 0%,100% { transform: translateY(0px) scale(1); } 50% { transform: translateY(-20px) scale(1.05); } }
        .animate-gradient { background-size: 200% 200%; animation: gradientMove 6s ease infinite; }
        .animate-shimmer { background-size: 200% 100%; animation: gradientMove 5s linear infinite; opacity:0.9; }
        @keyframes gradientMove { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
      `}</style>
    </div>
  );
}
