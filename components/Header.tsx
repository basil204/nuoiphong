import React from 'react';
import { Coffee, ArrowDown, Heart } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/80 border-b border-slate-200/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-orange-500 text-white flex items-center justify-center shadow-lg shadow-orange-500/20 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
            <Coffee size={20} strokeWidth={2.5} />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-slate-800 leading-none flex items-center gap-1">
              Nuôi Team <span className="text-orange-500">MKT</span>
              <Heart className="text-red-400 fill-red-400 w-3 h-3 animate-pulse" />
            </h1>
            <span className="text-xs text-slate-500 font-medium tracking-wide mt-1">
              Quỹ bảo trợ 4 tâm hồn sáng tạo
            </span>
          </div>
        </div>

        <button 
          onClick={() => document.getElementById('scan-section')?.scrollIntoView({ behavior: 'smooth' })}
          className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-sm font-semibold text-white transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Tiếp tế ngay <ArrowDown size={16} />
        </button>
      </div>
    </header>
  );
};