import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  Settings, 
  LogOut, 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  CheckCircle2, 
  XCircle,
  Clock,
  Calendar,
  LayoutDashboard,
  Scissors
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SERVICES } from '../constants';

export const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState('bookings');

  React.useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    if (!isAdmin) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/');
  };

  const bookings = [
    { id: 'BK-101', client: 'Aisha Abubakar', service: 'Knotless Braids', date: '2026-06-05', time: '10:00', status: 'pending', phone: '+234 801 234 5678' },
    { id: 'BK-102', client: 'Fatima Musa', service: 'Spa Pedicure', date: '2026-06-05', time: '14:30', status: 'confirmed', phone: '+234 802 345 6789' },
    { id: 'BK-103', client: 'Zainab Bello', service: 'Basic Cleanse Facial', date: '2026-06-06', time: '11:00', status: 'completed', phone: '+234 803 456 7890' },
  ];

  return (
    <div className="min-h-screen bg-[#FDF8F9] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-rose-100 hidden lg:flex flex-col">
        <div className="p-8 pb-12">
          <div className="flex flex-col">
            <span className="text-xl font-heading font-bold text-dark tracking-wide">HALIMA</span>
            <span className="text-[8px] font-button tracking-[0.2em] text-primary -mt-1 uppercase">Admin Panel</span>
          </div>
        </div>

        <nav className="flex-grow px-4 space-y-2">
          {[
            { id: 'bookings', label: 'Bookings', icon: <Calendar size={18} /> },
            { id: 'services', label: 'Services', icon: <Scissors size={18} /> },
            { id: 'staff', label: 'Staff Management', icon: <Users size={18} /> },
            { id: 'settings', label: 'Settings', icon: <Settings size={18} /> },
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl font-button text-sm font-semibold transition-all ${
                activeTab === item.id ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-dark/50 hover:bg-rose-50'
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-8">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-6 py-4 rounded-2xl font-button text-sm font-bold text-rose-400 hover:bg-rose-50 transition-all underline decoration-rose-200"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-4 lg:p-12 overflow-y-auto">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-heading font-bold text-dark">
              {activeTab === 'bookings' ? 'Daily Bookings' : activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h1>
            <p className="text-dark/40 font-body mt-1">Gonan Ganye Studio Management System</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-dark/20" size={18} />
              <input 
                type="text" 
                placeholder="Search..."
                className="pl-12 pr-4 py-3 bg-white border border-rose-100 rounded-2xl outline-none focus:border-primary transition-all font-body text-sm min-w-[250px]"
              />
            </div>
            <button className="bg-dark text-white p-3 rounded-2xl hover:bg-primary transition-all shadow-lg shadow-dark/10">
              <Plus size={20} />
            </button>
          </div>
        </header>

        {activeTab === 'bookings' && (
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { label: 'Pending Slots', value: '12', color: 'bg-rose-50 text-primary' },
                { label: 'Today Confirmed', value: '24', color: 'bg-blue-50 text-blue-600' },
                { label: 'Weekly Revenue', value: '₦142k', color: 'bg-emerald-50 text-emerald-600' },
              ].map((stat, i) => (
                <div key={i} className={`${stat.color} p-8 rounded-[40px] shadow-sm flex flex-col items-center text-center`}>
                   <p className="text-3xl font-heading font-bold">{stat.value}</p>
                   <p className="text-[10px] font-button uppercase tracking-widest opacity-60 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Table */}
            <div className="bg-white rounded-[40px] shadow-sm border border-rose-100 overflow-hidden">
               <div className="overflow-x-auto">
                 <table className="w-full text-left">
                   <thead>
                     <tr className="bg-rose-50/50">
                       <th className="px-8 py-5 text-[10px] font-button uppercase tracking-widest text-dark/40">Reference</th>
                       <th className="px-8 py-5 text-[10px] font-button uppercase tracking-widest text-dark/40">Client</th>
                       <th className="px-8 py-5 text-[10px] font-button uppercase tracking-widest text-dark/40">Service</th>
                       <th className="px-8 py-5 text-[10px] font-button uppercase tracking-widest text-dark/40">Time</th>
                       <th className="px-8 py-5 text-[10px] font-button uppercase tracking-widest text-dark/40">Status</th>
                       <th className="px-8 py-5 text-[10px] font-button uppercase tracking-widest text-dark/40">Actions</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-rose-50">
                     {bookings.map((booking) => (
                       <tr key={booking.id} className="hover:bg-rose-50/20 transition-colors">
                         <td className="px-8 py-6 font-mono text-xs text-dark/60">{booking.id}</td>
                         <td className="px-8 py-6">
                           <div className="flex flex-col">
                             <span className="font-heading font-bold text-dark">{booking.client}</span>
                             <span className="text-[10px] text-dark/40 font-button">{booking.phone}</span>
                           </div>
                         </td>
                         <td className="px-8 py-6 text-sm font-body text-dark/80">{booking.service}</td>
                         <td className="px-8 py-6">
                            <div className="flex items-center gap-2 text-dark/60 text-xs">
                              <Clock size={14} className="text-primary" />
                              {booking.time}
                            </div>
                         </td>
                         <td className="px-8 py-6">
                           <span className={`px-4 py-1.5 rounded-full text-[10px] font-button font-bold uppercase tracking-wider ${
                             booking.status === 'confirmed' ? 'bg-emerald-100 text-emerald-700' : 
                             booking.status === 'pending' ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-700'
                           }`}>
                             {booking.status}
                           </span>
                         </td>
                         <td className="px-8 py-6">
                           <button className="text-dark/30 hover:text-primary transition-colors">
                             <MoreVertical size={18} />
                           </button>
                         </td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
            </div>
          </div>
        )}

        {activeTab === 'services' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(service => (
              <div key={service.id} className="bg-white p-8 rounded-[40px] shadow-sm border border-rose-100 group hover:shadow-xl transition-all">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-heading font-bold text-dark">{service.name}</h3>
                  <button className="text-primary hover:bg-rose-50 p-2 rounded-xl transition-colors">
                    <Settings size={18} />
                  </button>
                </div>
                <div className="space-y-2 mb-8">
                  <p className="text-xs text-dark/40 font-button uppercase tracking-widest">{service.category} Service</p>
                  <p className="text-sm font-body font-bold text-dark">Default Price: {service.priceRange}</p>
                </div>
                <div className="flex gap-2">
                  <button className="flex-grow py-3 bg-secondary rounded-xl text-xs font-button font-bold text-dark/60 hover:bg-rose-100 transition-all border border-rose-100">
                    Edit Details
                  </button>
                  <button className="px-4 py-3 bg-rose-50 text-rose-400 rounded-xl hover:bg-rose-100 transition-all">
                    <XCircle size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};
