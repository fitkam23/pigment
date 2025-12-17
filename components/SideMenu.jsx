import React, { useState } from 'react';
import { 
  X, 
  FlaskConical, 
  Settings2, 
  LogOut, 
  Heart, 
  Coffee, 
  Gift 
} from 'lucide-react';

export default function SideMenu({ isOpen, onClose, user, onLogin, onLogout, onHome }) {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-50 h-full w-full">
      {/* Overlay Gelap */}
      <div 
        onClick={onClose} 
        className="absolute inset-0 bg-stone-900/20 backdrop-blur-sm transition-opacity animate-fade-in"
      ></div>
      
      {/* Panel Menu */}
      <div className="absolute right-0 top-0 h-full w-72 bg-white/95 backdrop-blur-xl shadow-2xl flex flex-col border-l border-white/20 animate-slide-left">
          
          {/* Bagian Atas: Header & Navigasi (Scrollable kalau layar pendek) */}
          <div className="flex-1 overflow-y-auto p-8 no-scrollbar">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-stone-900 tracking-tight">Menu</h2>
                  <button onClick={onClose} className="p-2 -mr-2 text-stone-400 hover:text-stone-800 transition-colors">
                      <X className="w-6 h-6" />
                  </button>
              </div>

              {/* Nav Items */}
              <nav className="flex flex-col gap-6">
                  <button onClick={onHome} className="flex items-center gap-4 text-stone-800 font-bold p-2 -ml-2 rounded-xl transition-colors hover:bg-stone-50">
                      <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center"><FlaskConical className="w-4 h-4" /></div>
                      Lab
                  </button>
                  <button className="flex items-center gap-4 text-stone-500 font-bold p-2 -ml-2 rounded-xl transition-colors hover:bg-stone-50">
                      <div className="w-8 h-8 rounded-full bg-stone-50 flex items-center justify-center"><Settings2 className="w-4 h-4" /></div>
                      My Palette (Soon)
                  </button>
              </nav>
          </div>
          
          {/* Bagian Bawah: Auth & About (Sticky di Bawah) */}
          <div className="p-8 pt-0 border-t border-stone-100 bg-white/50 backdrop-blur-md">
              {/* Auth Section */}
              <div className="py-6 flex flex-col gap-3">
                  <div className="w-full">
                      {!user ? (
                          <button onClick={onLogin} className="w-full py-3 bg-stone-900 text-white rounded-xl text-sm font-bold transition-all shadow-md flex items-center justify-center gap-2 hover:bg-stone-800 active:scale-95">
                              Sign In
                          </button>
                      ) : (
                          <div className="flex items-center gap-3 p-2 rounded-xl bg-stone-50 border border-stone-100">
                              <div className="w-10 h-10 rounded-full bg-stone-200 overflow-hidden border border-white flex items-center justify-center text-xs font-bold text-stone-500">
                                  {user.photoURL ? <img src={user.photoURL} alt="User" className="w-full h-full object-cover" /> : "U"}
                              </div>
                              <div className="flex-1 min-w-0">
                                  <p className="text-xs font-bold text-stone-900">Logged In</p>
                                  <p className="text-[10px] text-stone-500 truncate">{user.email || 'Anonymous'}</p>
                              </div>
                          </div>
                      )}
                  </div>

                  {user && (
                      <button onClick={onLogout} className="w-full py-3 text-red-500 font-bold text-sm bg-red-50 rounded-xl transition-colors flex items-center justify-center gap-2 hover:bg-red-100 active:scale-95">
                          <LogOut className="w-4 h-4" /> Sign Out
                      </button>
                  )}
              </div>

              {/* About The Dev (Accordion) */}
              <div className="pt-2">
                  <button 
                    onClick={() => setIsAboutOpen(!isAboutOpen)}
                    className="w-full text-center text-[10px] uppercase tracking-widest text-stone-500 hover:text-stone-800 transition-colors flex items-center justify-center gap-1 pb-2"
                  >
                     made with <Heart className="w-3 h-3 text-stone-500 fill-current" /> by fitkam
                  </button>
                  
                  {isAboutOpen && (
                    <div className="text-[10px] text-stone-500 text-center leading-relaxed animate-fade-in pb-4">
                       <p className="mb-1 font-bold text-stone-700">
                        Built by a painter, for painters.
                       </p>
                       <p className="mb-3">
                        This app simplifies color mixing decisions so you can focus on creating. 
                        It takes time to build & maintain—support helps keep it going! ✨
                       </p>
                       
                       {/* Donation Buttons */}
                       <div className="flex items-center justify-center gap-2 mb-3">
                          <a 
                            href="https://ko-fi.com/fitkamgummy" 
                            target="_blank" 
                            rel="noreferrer"
                            className="flex items-center gap-1 px-3 py-2 rounded-full bg-blue-100 text-blue-700 border border-blue-200 font-bold tracking-wide transition-transform active:scale-95 hover:bg-blue-200"
                          >
                            <Coffee className="w-3 h-3" /> 
                            <span>Ko-fi</span>
                          </a>

                          <a 
                            href="https://saweria.co/fitkamgummy" 
                            target="_blank" 
                            rel="noreferrer"
                            className="flex items-center gap-1 px-3 py-2 rounded-full bg-amber-100 text-amber-700 border border-amber-200 font-bold tracking-wide transition-transform active:scale-95 hover:bg-amber-200"
                          >
                             <Gift className="w-3 h-3" />
                             <span>Saweria</span>
                          </a>
                       </div>
                    </div>
                  )}
              </div>
          </div>

      </div>
    </div>
  );
}