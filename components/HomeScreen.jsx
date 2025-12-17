import React, { useState } from 'react';
import { getPigment } from '../data/pigments';
import { moods } from '../data/moods'; 
import { triads } from '../data/triads';
import { hueCategories, hueLibraries } from '../data/hues';

export default function HomeScreen({ onOpenTheme }) {
  const [activeTab, setActiveTab] = useState('moods'); 

  const renderThemeCard = (theme, isTriad = false) => {
    const required = theme.requiredPigments || [];
    const visiblePigments = required.filter(id => id !== 'PW6');
    const previewIDs = visiblePigments.slice(0, 3);
    const remainingCount = visiblePigments.length - 3;
    
    const swatches = theme.swatches || [];
    const railHTML = swatches.slice(0, isTriad ? 3 : 10).map((s, idx) => (
      <div 
        key={idx} 
        className="h-full flex-1 border-r border-white/10 last:border-0" 
        style={{ backgroundColor: s.hex }}
      />
    ));

    return (
      <div 
        key={theme.id}
        onClick={() => onOpenTheme(theme)}
        className="group cursor-pointer bg-white rounded-[24px] border border-stone-100 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
      >
        <div className="h-44 w-full flex relative">
           {railHTML}
           {isTriad && (
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                Triad
              </div>
           )}
        </div>
        
        <div className="p-6 relative">
           <div className="flex justify-between items-start mb-4">
              <div>
                  <h3 className="text-2xl font-bold text-stone-900 leading-tight group-hover:text-stone-700 transition-colors">
                    {theme.title}
                  </h3>
                  <p className="text-xs text-stone-400 mt-1 font-medium">
                    {theme.description}
                  </p>
              </div>
           </div>
           
           <div className="flex flex-wrap gap-2 items-center">
              {previewIDs.map(id => {
                 const p = getPigment(id);
                 return (
                    <div key={id} className="bg-stone-50 border border-stone-200 px-2 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 text-stone-600">
                       <div className="w-2 h-2 rounded-full border border-stone-200" style={{ backgroundColor: p.hex }}></div> 
                       {id}
                    </div>
                 );
              })}
              {remainingCount > 0 && (
                 <span className="text-xs font-bold text-stone-400 ml-1">+{remainingCount} more</span>
              )}
           </div>
        </div>
      </div>
    );
  };

  const renderHueCard = (category) => {
    const libId = `lib_${category.id}`;
    const libData = hueLibraries.find(t => t.id === libId);
    
    let railContent = null;
    let countText = "0 Colors";

    if (libData && libData.swatches) {
        railContent = libData.swatches.slice(0, 12).map((s, idx) => (
            <div key={idx} className="h-full flex-1 border-r border-white/10 last:border-0" style={{ backgroundColor: s.hex }}></div>
        ));
        countText = `${libData.swatches.length} Colors`;
    }

    const handleClick = () => {
        if (!libData) {
            alert("Library under construction.");
            return;
        }
        
        const sortedSwatches = { warm: [], cool: [], neutral: [] };
        const usedPigments = new Set();
        
        libData.swatches.forEach(swatch => {
            const temp = swatch.temperature || 'neutral';
            if (sortedSwatches[temp]) {
                sortedSwatches[temp].push(swatch);
                const formula = swatch.formulas['watercolor'];
                if(formula) {
                    formula.mix.forEach(m => {
                        if (m.id !== 'WATER') usedPigments.add(m.id);
                    });
                }
            }
        });

        const virtualTheme = {
            ...libData,
            type: 'virtual',
            requiredPigments: Array.from(usedPigments),
            sections: sortedSwatches,
            inspiration: null
        };
        
        onOpenTheme(virtualTheme);
    };

    return (
        <div 
          key={category.id}
          onClick={handleClick}
          className="group cursor-pointer bg-white rounded-[24px] border border-stone-100 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
        >
            <div className="h-44 w-full flex relative">
                {railContent}
            </div>
            <div className="p-6 relative">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-2xl font-bold text-stone-900 leading-tight group-hover:text-stone-700 transition-colors">
                            {category.label}
                        </h3>
                        <p className="text-xs text-stone-400 mt-1 font-medium">Browse full collection</p>
                    </div>
                    <div className="w-10 h-10 rounded-full shadow-sm flex items-center justify-center border border-black/5" style={{ backgroundColor: category.color }}></div>
                </div>
                <div className="bg-stone-50 border border-stone-200 px-3 py-1 rounded-full text-[10px] font-bold inline-flex items-center gap-2 text-stone-600">
                   {countText}
                </div>
            </div>
        </div>
    );
  };

  return (
    <div className="absolute inset-0 overflow-y-auto p-6 pt-2 pb-20 animate-fade-in md:px-10 md:pb-10 no-scrollbar">
       
       {/* HERO SECTION */}
       <div className="mb-4 mt-2 md:mt-6 md:mb-8 w-full text-center md:text-left">
           <div className="max-w-2xl mx-auto md:mx-0">
               <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6 text-stone-900 tracking-tight">
                   The first color generator dedicated for 
                   <br/>
                   <span className="font-serif bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 pb-1">
                     painters.
                   </span>
               </h2>
           </div>

           {/* STICKY TOGGLE */}
           <div className="sticky top-0 z-20 -mx-6 px-6 md:-mx-10 md:px-10 bg-white/95 backdrop-blur-xl py-3 mb-2 flex items-center justify-center w-full transition-all">
               <div className="bg-stone-100 p-1 rounded-full flex relative shadow-inner w-full max-w-sm">
                   {['moods', 'triads', 'hues'].map(tab => (
                       <button
                         key={tab}
                         onClick={() => setActiveTab(tab)}
                         className={`flex-1 px-3 py-2 text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 
                            ${activeTab === tab ? 'bg-stone-800 text-white shadow-md' : 'text-stone-500 hover:text-stone-800 bg-transparent'}`}
                       >
                         {tab}
                       </button>
                   ))}
               </div>
           </div>
       </div>

       {/* GRID CONTENT */}
       <div className="relative z-10 bg-white min-h-screen pb-20">
           {activeTab === 'moods' && (
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
                   {moods.map(theme => renderThemeCard(theme))}
               </div>
           )}
           
           {activeTab === 'triads' && (
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
                   {triads.map(theme => renderThemeCard(theme, true))}
               </div>
           )}

           {activeTab === 'hues' && (
               <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 animate-fade-in">
                   {hueCategories.map(cat => renderHueCard(cat))}
               </div>
           )}
       </div>

    </div>
  );
}