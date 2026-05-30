import React from 'react';
import { motion } from 'motion/react';
import { LogIn, Lock, Mail, ArrowRight } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo/admin access, we'll allow any login for now
    // or specifically 'admin@halimabeautysalon.ng'
    if (email === 'admin@halimasalon.ng' && password === 'admin123') {
      localStorage.setItem('isAdmin', 'true');
      navigate('/admin');
    } else {
      alert('Invalid admin credentials. Use admin@halimasalon.ng / admin123');
    }
  };

  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white w-full max-w-md rounded-[50px] shadow-2xl p-10 md:p-14 border border-rose-100"
      >
        <div className="text-center mb-10">
          <Link to="/" className="flex flex-col items-center mb-6">
            <span className="text-3xl font-heading font-bold text-dark tracking-wide">HALIMA</span>
            <span className="text-[10px] font-button tracking-[0.2em] text-primary -mt-1 uppercase">Beauty Salon & Spa</span>
          </Link>
          <h2 className="text-2xl font-heading font-bold text-dark">Admin Access</h2>
          <p className="text-dark/40 text-sm font-body mt-2">Manage your salon operations securely.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-button uppercase tracking-widest text-dark/40 ml-4">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-dark/20" size={18} />
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@halimasalon.ng"
                className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-rose-50 focus:border-primary outline-none font-body transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-button uppercase tracking-widest text-dark/40 ml-4">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-dark/20" size={18} />
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-rose-50 focus:border-primary outline-none font-body transition-all"
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-dark text-white py-4 rounded-2xl font-button font-bold text-lg hover:bg-primary transition-all flex items-center justify-center gap-2 shadow-lg shadow-dark/10"
          >
            Sign In
            <ArrowRight size={20} />
          </button>
        </form>

        <p className="text-center mt-8 text-xs text-dark/40 font-body">
          Forgot password? Please contact system administrator.
        </p>
      </motion.div>
    </div>
  );
};
