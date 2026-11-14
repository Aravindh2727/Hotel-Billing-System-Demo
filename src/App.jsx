import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { listenAuth, signInDemoRole } from './services/authService.js';
import { resetDemoData } from './services/firestoreService.js';
import { isDemoMode, getAppMode, setAppMode } from './config/env.js';
import LoginPage from './pages/LoginPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import ProtectedRoute from './routes/ProtectedRoute.jsx';
import DemoBanner from './components/DemoBanner.jsx';

const AuthContext = createContext({
  user: null,
  isDemo: false,
  appMode: 'production',
  switchDemoRole: () => {},
  resetDemo: () => {},
  toggleMode: () => {}
});

export const useAuth = () => useContext(AuthContext);

function AppRoutes({ user, checking }) {
  const navigate = useNavigate();

  // Handle redirect from 404.html (for GitHub Pages & SPA routers)
  useEffect(() => {
    const redirect = sessionStorage.redirect;
    if (redirect) {
      delete sessionStorage.redirect;
      try {
        const url = new URL(redirect, window.location.origin);
        const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
        let targetPath = url.pathname;
        if (base && targetPath.startsWith(base)) {
          targetPath = targetPath.slice(base.length);
        }
        if (!targetPath || targetPath === '') {
          targetPath = '/';
        }
        navigate(targetPath + url.search + url.hash, { replace: true });
      } catch (e) {
        console.warn('Redirect handling error:', e);
      }
    }
  }, [navigate]);

  if (checking) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-slate-900 text-white gap-3">
        <div className="w-10 h-10 border-4 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
        <div className="text-amber-200 font-semibold tracking-wide">Loading System...</div>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={user ? <Navigate to="/dashboard" replace /> : <LoginPage />} />
      <Route path="/login" element={user ? <Navigate to="/dashboard" replace /> : <LoginPage />} />
      <Route path="/dashboard/*" element={
        <ProtectedRoute>
          <DashboardPage />
        </ProtectedRoute>
      }/>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function App() {
  const [user, setUser] = useState(null);
  const [checking, setChecking] = useState(true);
  const [appMode, setMode] = useState(getAppMode());

  useEffect(() => {
    const unsub = listenAuth(u => {
      setUser(u);
      setChecking(false);
    });
    return unsub;
  }, []);

  const switchDemoRole = useCallback(async (roleKey) => {
    await signInDemoRole(roleKey);
  }, []);

  const resetDemo = useCallback(() => {
    resetDemoData();
  }, []);

  const toggleMode = useCallback((newMode) => {
    setAppMode(newMode);
    setMode(newMode);
  }, []);

  const basename = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  const isDemo = isDemoMode();

  return (
    <AuthContext.Provider value={{
      user,
      isDemo,
      appMode,
      switchDemoRole,
      resetDemo,
      toggleMode
    }}>
      <BrowserRouter basename={basename}>
        {isDemo && <DemoBanner />}
        <AppRoutes user={user} checking={checking} />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
