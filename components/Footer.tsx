import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-2 text-sm text-slate-500">
        <p className="font-medium text-slate-900">© 2025 Dự Án Nuôi Phòng Marketing</p>
        <p>Sáng tạo bằng đam mê, sống bằng donate.</p>
      </div>
    </footer>
  );
};