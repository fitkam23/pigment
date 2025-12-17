import React, { useState } from 'react';
import { ArrowLeft, Palette } from 'lucide-react';
// Updated import path agar sesuai dengan struktur file
import { getPigment } from '../data/pigments'; 

export default function RecipeScreen({ theme, medium, setMedium, onBack }) {
  const [activeSwatchId, setActiveSwatchId] = useState(null);
  const [activeSection, setActiveSection] = useState(null); // 'warm', 'cool', 'neutral'

  // Helper render Mix Bar
  const renderMixBars = (formula) => {
    const totalRatio = formula.mix.reduce((sum, item) => sum + item.ratio, 0);
    
    return formula.mix.map((item, idx) => {
      const pigmentData = getPigment(item.id);
      const pigmentHex = pigmentData.hex;
      const pigmentName = pigmentData.name;
      const percent = (item.ratio / totalRatio) * 100;

      return (
        <div key={idx} className="mb-4">
           <div className="flex justify-between items-end mb-1 text-stone-600">
              <span className="text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                {pigmentName} <span className="text-[10px] text-stone-400">({item.id})</span>
              </span>
              <span className="text-xs font-bold text-stone-400">
                {item.ratio} {item.ratio <= 1 ? "Part" : "Parts"}
              </span>
           </div>
           <div className="h-2 w-full bg-stone-100 rounded-full overflow-hidden flex border border-stone-100">
              <div 
                className="h-full transition-all duration-1000" 
                style={{ width: `${percent}%`, backgroundColor: pigmentHex }}
              ></div>
           </div>
        </div>
      );
    });
  };

  // Helper render Recipe Card
  const RecipeCard = ({ swatch }) => {
    if (!swatch) return null;
    const formula = swatch.formulas[medium]; // 'watercolor' or 'gouache'

    return (
      <div className="w-full bg-stone-50/50 rounded-2xl border border-stone-100 p-4 md:p-6 shadow-sm animate-fade-in mt-4">
          <div className="flex items-center gap-4 mb-6">
              <div 
                className="w-12 h-12 rounded-full border-4 border-white shadow-md transition-all flex-none" 
                style={{ backgroundColor: swatch.hex }}
              ></div>
              <div>
                  <h3 className="text-2xl font-bold text-stone-800 tracking-tight leading-none">{swatch.name}</h3>
              </div>
          </div>
          
          <div className="w-full">
              <div className="mb-6 bg-white p-5 rounded-xl border border-stone-100 text-base text-stone-700 leading-relaxed shadow-sm">
                  <span className="font-bold text-stone-900 block mb-1 text-xs tracking-widest uppercase">Note</span>
                  {formula.note}
              </div>
              <div>{renderMixBars(formula)}</div>
          </div>
      </div>
    );
  };

  return (
    <div className="absolute inset-0 bg-white flex flex-col animate-fade-in overflow-y-auto pb-10 z-20 md:overflow-hidden">
      
      {/* SUB-HEADER (Medium Toggle) */}
      <div className="px-6 py-2 flex items-center justify-center relative bg-white/90 backdrop-blur-sm sticky top-0 z-10 md:px-10 md:py-4 flex-none border-b border-stone-50 shadow-sm">
          <button onClick={onBack} className="absolute left-6 md:left-10 flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-stone-400 hover:text-stone-800 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back
          </button>
          
          <div className="bg-stone-100 p-1 rounded-full flex relative shadow-inner">
              <button 
                onClick={() => setMedium('watercolor')}
                className={`px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-full transition-all duration-300 ${medium === 'watercolor' ? 'bg-stone-800 text-white shadow-md' : 'text-stone-500'}`}
              >
                Watercolor
              </button>
              <button 
                onClick={() => setMedium('gouache')}
                className={`px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-full transition-all duration-300 ${medium === 'gouache' ? 'bg-stone-800 text-white shadow-md' : 'text-stone-500'}`}
              >
                Gouache
              </button>
          </div>
      </div>

      {/* CONTENT GRID */}
      <div className="flex-1 overflow-y-auto p-4 md:p-10 md:grid md:grid-cols-12 md:gap-8 md:items-start">
          
          {/* LEFT COLUMN: Details & Swatches */}
          <div className="apple-card p-6 mb-6 md:mb-0 md:col-span-8 relative h-auto">
             <div className="mb-6">
                 <h2 className="text-3xl font-bold mb-1 text-stone-900 tracking-tight">{theme.title}</h2>
                 <p className="text-sm font-semibold text-stone-400 mb-4 tracking-wide">{theme.description}</p>
             </div>

             <div className="h-px bg-stone-100 w-full mb-6"></div>

             {/* === SWATCH RAIL LOGIC === */}
             <div className="mb-6">
                <h3 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-3">Palette</h3>
                
                {/* 1. Logic buat VIRTUAL THEME (Hues) - Accordion Style */}
                {theme.type === 'virtual' ? (
                   <div className="flex flex-col gap-3">
                      {['warm', 'cool', 'neutral'].map(section => {
                          const sectionSwatches = theme.sections[section];
                          if(!sectionSwatches || sectionSwatches.length === 0) return null;

                          return (
                             <div key={section} className="relative">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-stone-300 mb-1 ml-1">{section}</p>
                                
                                {/* RAIL */}
                                <div className="w-full h-12 rounded-lg overflow-hidden flex shadow-sm border border-black/5 bg-white">
                                    {sectionSwatches.map(swatch => (
                                        <div 
                                          key={swatch.id}
                                          onClick={() => {
                                            setActiveSwatchId(swatch.id);
                                            setActiveSection(section); 
                                          }}
                                          className={`h-full cursor-pointer transition-all duration-500 relative ${activeSwatchId === swatch.id ? 'flex-[2.5] ring-2 ring-stone-400 z-10' : 'flex-1 hover:flex-[1.2]'}`}
                                          style={{ backgroundColor: swatch.hex }}
                                        />
                                    ))}
                                </div>

                                {/* ACCORDION OUTPUT */}
                                {activeSection === section && activeSwatchId && (
                                   <div className="mt-3 mb-2 animate-fade-in">
                                      <RecipeCard swatch={sectionSwatches.find(s => s.id === activeSwatchId)} />
                                   </div>
                                )}
                             </div>
                          )
                      })}
                   </div>
                ) : (
                /* 2. Logic buat MOODS/TRIADS (Standard) */
                   <div className="w-full h-16 rounded-xl overflow-hidden flex cursor-pointer shadow-inner border border-black/5">
                      {theme.swatches.map(swatch => (
                          <div 
                            key={swatch.id}
                            onClick={() => setActiveSwatchId(swatch.id)}
                            className={`h-full cursor-pointer transition-all duration-500 ${activeSwatchId === swatch.id ? 'flex-[2.5] ring-2 ring-stone-400 z-10' : 'flex-1 hover:flex-[1.2]'}`}
                            style={{ backgroundColor: swatch.hex }}
                          />
                      ))}
                   </div>
                )}
             </div>

             {/* MOODS OUTPUT */}
             {theme.type !== 'virtual' && (
                <div className="bg-stone-50/50 rounded-2xl border border-stone-100 p-4 md:p-6 min-h-[300px] flex flex-col justify-center">
                   {!activeSwatchId ? (
                      <div className="text-center p-6 w-full">
                          <Palette className="w-10 h-10 mb-3 text-stone-300 mx-auto" />
                          <p className="text-stone-400 text-sm font-medium">Select a color from the palette above<br/>to view the mixing formula.</p>
                      </div>
                   ) : (
                      <RecipeCard swatch={theme.swatches.find(s => s.id === activeSwatchId)} />
                   )}
                </div>
             )}
          </div>
          
          {/* RIGHT COLUMN: Muse Card */}
          {theme.inspiration && (
             <div className="apple-card p-0 overflow-hidden md:col-span-4 h-auto sticky top-0 border border-stone-100 shadow-lg">
                <img src={theme.inspiration.imageUrl} className="w-full h-64 object-cover" alt="Inspiration" />
                <div className="p-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Inspiration</p>
                    <p className="text-sm text-stone-600 leading-relaxed mb-4">{theme.inspiration.info}</p>
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-stone-100"></div>
                        <div>
                            <p className="text-xs font-bold text-stone-900">{theme.inspiration.artist}</p>
                            <a href={theme.inspiration.link} target="_blank" className="text-[10px] text-blue-500 font-medium hover:underline flex items-center gap-1">
                                {theme.inspiration.handle}
                            </a>
                        </div>
                    </div>
                </div>
             </div>
          )}

      </div>
    </div>
  );
}