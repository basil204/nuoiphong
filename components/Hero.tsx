import React from 'react';
import { Check, Zap, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="scan-section" className="relative py-12 lg:py-24 overflow-hidden">
      {/* Background Blobs - Light Theme */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-60">
        <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-orange-300/30 rounded-full blur-[80px] animate-pulse" />
        <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] bg-teal-300/30 rounded-full blur-[80px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[30%] h-[30%] bg-purple-300/30 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-medium text-slate-600">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
              </span>
              Trạng thái: 4 nhân sự đang héo mòn
            </div>

            <h2 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Donate trà sữa <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                cứu rỗi KPI.
              </span>
            </h2>

            <p className="text-xl text-slate-600 max-w-lg leading-relaxed font-medium">
              Team Marketing 4 người: Ý tưởng đã cạn, content đã bí, chỉ có bụng là đang biểu tình. Cần lắm một sự tiếp tế!
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
               <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                  <div className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Mục tiêu trà sữa</div>
                  <div className="text-2xl font-bold text-slate-900">200.000đ</div>
                  <div className="w-full bg-slate-100 h-1.5 mt-2 rounded-full overflow-hidden">
                     <div className="bg-orange-500 h-full w-[20%] rounded-full" />
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">Đủ cho 4 ly full topping</div>
               </div>
               <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                  <div className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Năng lượng team</div>
                  <div className="text-2xl font-bold text-slate-900">15%</div>
                  <div className="text-xs text-red-500 font-bold mt-1 flex items-center gap-1">
                     <Zap size={12} fill="currentColor" /> Sắp sập nguồn
                  </div>
               </div>
            </div>

            <div className="flex gap-4 text-sm font-semibold text-slate-500">
              <span className="flex items-center gap-1"><ShieldCheck size={16} className="text-teal-500" /> Uy tín 100%</span>
              <span className="flex items-center gap-1"><ShieldCheck size={16} className="text-teal-500" /> Review 5 sao</span>
            </div>
          </div>

          {/* Right Card (QR) */}
          <div className="lg:pl-10 relative">
             {/* Decorative elements behind card */}
             <div className="absolute top-10 -right-10 w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-2xl" />
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-400 rounded-full opacity-20 blur-2xl" />

            <div className="bg-white rounded-[2.5rem] p-2 shadow-2xl shadow-slate-200/50 transform rotate-1 hover:rotate-0 transition-transform duration-500 border border-slate-100">
              <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100 overflow-hidden relative">
                 <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-500 opacity-10" />
                 
                 <div className="relative z-10 text-center mb-8">
                    <h3 className="text-slate-900 font-bold text-lg">Quỹ Chống Đói Phòng MKT</h3>
                    <p className="text-slate-500 text-sm">(Thủ quỹ: Oanh - Đại diện 4 anh em)</p>
                 </div>

                 {/* QR Area - Using VietQR API */}
                 <div className="mx-auto w-full max-w-[280px] bg-white p-4 rounded-3xl shadow-lg mb-8 flex items-center justify-center relative group">
                    <div className="absolute inset-0 rounded-3xl border-2 border-blue-100 group-hover:border-blue-300 transition-colors pointer-events-none" />
                    <img 
                      src="https://img.vietqr.io/image/VPB-0705886278-compact.png?amount=&addInfo=Nuoi%20Team%20MKT&accountName=TRINHi%20THUYi%20OANH"
                      alt="VietQR MB Bank"
                      className="w-full h-auto rounded-xl object-contain"
                    />
                 </div>

                 <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 mb-6">
                    <div className="flex justify-between items-center mb-2">
                       <span className="text-xs text-slate-400 font-bold uppercase">Người thụ hưởng</span>
                       <span className="text-sm font-bold text-slate-800">Nguyễn Liên Mạnh</span>
                    </div>
                    <div className="flex justify-between items-center">
                       <span className="text-xs text-slate-400 font-bold uppercase">MB Bank</span>
                       <span className="text-sm font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded">334218</span>
                    </div>
                 </div>

                <button className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
                  <Check className="w-5 h-5 text-green-400" /> Xác nhận đã cứu team
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};