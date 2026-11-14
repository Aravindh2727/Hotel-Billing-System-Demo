import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { listenAuth, signInDemoRole } from './services/authService';
import { resetDemoData } from './services/firestoreService';
import { isDemoMode, getAppMode, setAppMode } from './config/env';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ProtectedRoute from './routes/ProtectedRoute';
import DemoBanner from './components/DemoBanner';

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
    delete sessionStorage.redirect;
    const baseClean = import.meta.env.BASE_URL.replace(/\/$/, '') + '/';
    if (redirect && window.location.pathname === baseClean) {
      navigate(redirect.replace(/^.*?\/dashboard\//, ''));
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
      <Route path="login" element={<LoginPage />} />
      <Route path="dashboard/*" element={
        <ProtectedRoute>
          <DashboardPage />
        </ProtectedRoute>
      }/>
      <Route path="*" element={<Navigate to={user ? "dashboard" : "login"} replace />} />
    </Routes>
  );
}

export default function App() {
  const [user, setUser] = useState(null);
  const [checking, setChecking] = useState(true);
  const [appMode, setMode] = useState(getAppMode());
  const futureFlags = { v7_startTransition: true, v7_relativeSplatPath: true };

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
      <BrowserRouter basename={basename} future={futureFlags}>
        {isDemo && <DemoBanner />}
        <AppRoutes user={user} checking={checking} />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
