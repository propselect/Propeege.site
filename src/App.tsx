import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';

// Lazy load other pages for performance
const Services = React.lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const Booking = React.lazy(() => import('./pages/Booking').then(m => ({ default: m.Booking })));
const About = React.lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Gallery = React.lazy(() => import('./pages/Gallery').then(m => ({ default: m.Gallery })));
const Contact = React.lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const AdminDashboard = React.lazy(() => import('./pages/AdminDashboard').then(m => ({ default: m.AdminDashboard })));
const Login = React.lazy(() => import('./pages/Login').then(m => ({ default: m.Login })));

const LoadingFallback = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
  </div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

function App() {
  return (
    <>
      <ScrollToTop />
      <React.Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </React.Suspense>
    </>
  );
}

export default App;
