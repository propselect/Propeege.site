import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  Clock, 
  User, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Phone,
  MessageCircle,
  Plus,
  Trash2
} from 'lucide-react';
import { SERVICES, STAFF, CONTACT_INFO } from '../constants';
import { Service } from '../types';

export const Booking = () => {
  const [step, setStep] = React.useState(1);
  const [selectedServices, setSelectedServices] = React.useState<Service[]>([]);
  const [date, setDate] = React.useState('');
  const [time, setTime] = React.useState('');
  const [staffId, setStaffId] = React.useState('');
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    notes: ''
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const toggleService = (s: Service) => {
    if (selectedServices.find(item => item.id === s.id)) {
      setSelectedServices(selectedServices.filter(item => item.id !== s.id));
    } else {
      setSelectedServices([...selectedServices, s]);
    }
  };

  const totalPrice = selectedServices.reduce((sum, s) => sum + s.price, 0);

  const confirmBooking = () => {
    const message = `Hello Halima Professional Salon! I'd like to book an appointment:
- Services: ${selectedServices.map(s => s.name).join(', ')}
- Date: ${date}
- Time: ${time}
- Name: ${formData.name}
- Phone: ${formData.phone}
- Notes: ${formData.notes || 'None'}`;
    
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`, '_blank');
    setStep(5);
  };

  return (
    <div className="bg-secondary min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Progress Bar */}
        <div className="mb-12 flex justify-between items-center relative px-2">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-rose-100 -translate-y-1/2 z-0" />
          <div 
            className="absolute top-1/2 left-0 h-1 bg-primary -translate-y-1/2 z-0 transition-all duration-500" 
            style={{ width: `${((step - 1) / 3) * 100}%` }}
          />
          {[1, 2, 3, 4].map(i => (
            <div 
              key={i}
              className={`w-10 h-10 rounded-full flex items-center justify-center relative z-10 transition-colors duration-500 ${
                step >= i ? 'bg-primary text-white shadow-lg' : 'bg-rose-50 text-dark/30'
              }`}
            >
              {step > i ? <CheckCircle2 size={24} /> : <span className="font-button font-bold text-sm">{i}</span>}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-[50px] shadow-xl border border-rose-100 overflow-hidden min-h-[600px] flex flex-col">
          <AnimatePresence mode="wait">
            {/* Step 1: Services */}
            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-8 lg:p-12 flex-grow flex flex-col"
              >
                <h2 className="text-3xl font-heading font-bold text-dark mb-4">Select Services</h2>
                <p className="text-dark/60 mb-8 font-body">Choose one or more treatments you'd like to book.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow overflow-y-auto max-h-[400px] pr-2 scrollbar-hide">
                  {SERVICES.map(s => (
                    <button
                      key={s.id}
                      onClick={() => toggleService(s)}
                      className={`p-6 rounded-3xl border-2 text-left transition-all flex justify-between items-center group ${
                        selectedServices.find(item => item.id === s.id)
                          ? 'border-primary bg-rose-50 shadow-md scale-[0.98]'
                          : 'border-rose-100 hover:border-primary/30'
                      }`}
                    >
                      <div className="space-y-1">
                        <p className={`font-heading font-bold text-lg ${selectedServices.find(item => item.id === s.id) ? 'text-primary' : 'text-dark'}`}>{s.name}</p>
                        <p className="text-xs text-dark/40 font-button tracking-wider">{s.duration} • {s.priceRange}</p>
                      </div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                        selectedServices.find(item => item.id === s.id) ? 'bg-primary text-white' : 'bg-secondary text-dark/20'
                      }`}>
                        {selectedServices.find(item => item.id === s.id) ? <CheckCircle2 size={18} /> : <Plus size={18} />}
                      </div>
                    </button>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-rose-100 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-button uppercase tracking-[0.2em] text-dark/40">Total Price Estimate</p>
                    <p className="text-2xl font-heading font-bold text-primary">₦{totalPrice.toLocaleString()}</p>
                  </div>
                  <button
                    disabled={selectedServices.length === 0}
                    onClick={nextStep}
                    className={`px-10 py-4 rounded-full font-button font-bold flex items-center gap-2 transition-all ${
                      selectedServices.length > 0 
                        ? 'bg-primary text-white shadow-xl shadow-primary/20 hover:scale-105' 
                        : 'bg-rose-50 text-dark/30 cursor-not-allowed'
                    }`}
                  >
                    Select Date & Time
                    <ArrowRight size={20} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Date & Time */}
            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-8 lg:p-12 flex-grow flex flex-col"
              >
                <div className="flex items-center gap-4 mb-8">
                  <button onClick={prevStep} className="p-2 hover:bg-rose-50 rounded-full transition-colors text-dark/40"><ArrowLeft size={24} /></button>
                  <h2 className="text-3xl font-heading font-bold text-dark">Date & Time</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 flex-grow">
                  <div className="space-y-6">
                    <label className="block">
                      <span className="text-xs font-button uppercase tracking-[0.2em] text-dark/40 mb-3 block">Pick a Date</span>
                      <input 
                        type="date" 
                        min={new Date().toISOString().split('T')[0]}
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full p-4 rounded-2xl border-2 border-rose-100 focus:border-primary outline-none font-body transition-all"
                      />
                    </label>
                    <div className="bg-rose-50 p-6 rounded-3xl space-y-2">
                       <p className="text-xs font-button text-primary font-bold uppercase tracking-widest flex items-center gap-2">
                         <Clock size={14} /> Salon Working Hours
                       </p>
                       <p className="text-sm text-dark/70">Mon - Sat: 8:00 AM - 7:00 PM</p>
                       <p className="text-sm text-dark/70">Sun: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <span className="text-xs font-button uppercase tracking-[0.2em] text-dark/40 mb-3 block">Available Slots</span>
                    <div className="grid grid-cols-3 gap-3">
                      {['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'].map(t => (
                        <button
                          key={t}
                          onClick={() => setTime(t)}
                          className={`py-3 rounded-xl border-2 font-button text-sm transition-all ${
                            time === t ? 'bg-primary border-primary text-white shadow-md scale-[1.05]' : 'border-rose-100 hover:border-primary/50 text-dark/70'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-rose-100 flex items-center justify-end">
                  <button
                    disabled={!date || !time}
                    onClick={nextStep}
                    className={`px-12 py-4 rounded-full font-button font-bold flex items-center gap-2 transition-all ${
                      date && time 
                        ? 'bg-primary text-white shadow-xl shadow-primary/20 hover:scale-105' 
                        : 'bg-rose-50 text-dark/30 cursor-not-allowed'
                    }`}
                  >
                    Select Therapist
                    <ArrowRight size={20} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Therapist */}
            {step === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-8 lg:p-12 flex-grow flex flex-col"
              >
                <div className="flex items-center gap-4 mb-8">
                  <button onClick={prevStep} className="p-2 hover:bg-rose-50 rounded-full transition-colors text-dark/40"><ArrowLeft size={24} /></button>
                  <h2 className="text-3xl font-heading font-bold text-dark">Therapist/Stylist</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
                  {STAFF.map(s => (
                    <button
                      key={s.id}
                      onClick={() => setStaffId(s.id)}
                      className={`p-6 rounded-[40px] border-2 text-left transition-all flex items-center gap-6 group ${
                        staffId === s.id ? 'border-primary bg-rose-50 shadow-md' : 'border-rose-100 hover:border-primary/30'
                      }`}
                    >
                      <img src={s.image} alt={s.name} className="w-20 h-20 rounded-full object-cover shadow-lg border-2 border-white" />
                      <div className="space-y-1">
                        <h4 className="font-heading font-bold text-xl text-dark">{s.name}</h4>
                        <p className="text-xs text-primary font-button font-bold uppercase tracking-widest">{s.specialty}</p>
                      </div>
                    </button>
                  ))}
                  <button
                    onClick={() => setStaffId('any')}
                    className={`p-6 rounded-[40px] border-2 text-center transition-all flex items-center justify-center font-button font-bold ${
                      staffId === 'any' ? 'border-primary bg-rose-50' : 'border-rose-100 hover:border-primary/30'
                    }`}
                  >
                    Any Available Professional
                  </button>
                </div>

                <div className="mt-12 pt-8 border-t border-rose-100 flex items-center justify-end">
                  <button
                    disabled={!staffId}
                    onClick={nextStep}
                    className={`px-12 py-4 rounded-full font-button font-bold flex items-center gap-2 transition-all ${
                      staffId 
                        ? 'bg-primary text-white shadow-xl shadow-primary/20 hover:scale-105' 
                        : 'bg-rose-50 text-dark/30 cursor-not-allowed'
                    }`}
                  >
                    Final Details
                    <ArrowRight size={20} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 4: Final Details */}
            {step === 4 && (
              <motion.div 
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-8 lg:p-12 flex-grow flex flex-col"
              >
                <div className="flex items-center gap-4 mb-8">
                  <button onClick={prevStep} className="p-2 hover:bg-rose-50 rounded-full transition-colors text-dark/40"><ArrowLeft size={24} /></button>
                  <h2 className="text-3xl font-heading font-bold text-dark">Your Details</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 flex-grow">
                  <div className="space-y-6">
                    <label className="block">
                      <span className="text-xs font-button uppercase tracking-[0.2em] text-dark/40 mb-3 block">Full Name</span>
                      <input 
                        type="text" 
                        placeholder="Halima Abubakar"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full p-4 rounded-2xl border-2 border-rose-100 focus:border-primary outline-none font-body transition-all"
                      />
                    </label>
                    <label className="block">
                      <span className="text-xs font-button uppercase tracking-[0.2em] text-dark/40 mb-3 block">Phone Number</span>
                      <input 
                        type="tel" 
                        placeholder="+234..."
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full p-4 rounded-2xl border-2 border-rose-100 focus:border-primary outline-none font-body transition-all"
                      />
                    </label>
                    <label className="block">
                      <span className="text-xs font-button uppercase tracking-[0.2em] text-dark/40 mb-3 block">Notes (Optional)</span>
                      <textarea 
                        rows={3}
                        placeholder="Any special requests or allergies?"
                        value={formData.notes}
                        onChange={(e) => setFormData({...formData, notes: e.target.value})}
                        className="w-full p-4 rounded-2xl border-2 border-rose-100 focus:border-primary outline-none font-body transition-all resize-none"
                      />
                    </label>
                  </div>

                  <div className="bg-secondary p-8 rounded-[40px] space-y-6 border border-rose-50 h-fit">
                    <h4 className="text-xl font-heading font-bold text-dark border-b border-rose-100 pb-4">Summary</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-dark/40">Services</span>
                        <span className="text-dark font-semibold text-right">{selectedServices.map(s => s.name).join(', ')}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-dark/40">Appointment</span>
                        <span className="text-dark font-semibold">{date} at {time}</span>
                      </div>
                    </div>
                    <div className="pt-6 border-t border-rose-100 flex justify-between items-center">
                      <span className="text-lg font-heading font-bold text-dark">Total Price</span>
                      <span className="text-2xl font-heading font-bold text-primary">₦{totalPrice.toLocaleString()}</span>
                    </div>
                    <div className="text-[10px] text-dark/40 leading-relaxed italic text-center">
                      Choosing "Confirm via WhatsApp" will instantly send your details to our team to finalize your booking slot.
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-rose-100 flex flex-col sm:flex-row gap-4 justify-end">
                  <button
                    onClick={() => {}} // Integration logic here
                    className="px-10 py-4 rounded-full font-button font-bold bg-secondary text-dark border border-rose-200 hover:bg-rose-50 transition-all flex items-center justify-center gap-2"
                  >
                    Pay at Salon
                  </button>
                  <button
                    disabled={!formData.name || !formData.phone}
                    onClick={confirmBooking}
                    className="px-12 py-4 rounded-full font-button font-bold bg-primary text-white shadow-xl shadow-primary/20 hover:scale-105 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={20} />
                    Confirm via WhatsApp
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 5: Success */}
            {step === 5 && (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 text-center my-auto flex flex-col items-center justify-center space-y-8"
              >
                <div className="w-24 h-24 bg-highlight/20 text-highlight rounded-full flex items-center justify-center animate-bounce">
                  <CheckCircle2 size={64} />
                </div>
                <div className="space-y-4 max-w-md">
                  <h2 className="text-4xl font-heading font-bold text-dark">Booking Request Sent!</h2>
                  <p className="text-dark/60 font-body leading-relaxed">
                    Thank you {formData.name.split(' ')[0]}! We have received your request. Our team will contact you shortly to confirm the availability.
                  </p>
                </div>
                <div className="pt-8">
                  <button 
                    onClick={() => setStep(1)}
                    className="text-primary font-button font-bold hover:underline"
                  >
                    Make Another Booking
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
