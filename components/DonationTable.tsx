import React, { useEffect, useRef, useState } from 'react';
import { Donor } from '../types';
import { Star } from 'lucide-react';

const donors: Donor[] = [
  { id: 1, name: 'Sếp Tổng', amount: 5000000, message: 'Thưởng nóng team chạy xong Campaign.' },
  { id: 2, name: 'Chị Kế Toán', amount: 200000, message: 'Ứng trước tiền ăn vặt cho mấy đứa.' },
  { id: 3, name: 'Khách hàng ẩn danh', amount: 500000, message: 'Content hay quá, mời team cafe.' },
  { id: 4, name: 'Sale Team', amount: 50000, message: 'Góp vui ly trà đá.' },
];

export const DonationTable: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`py-16 bg-white border-y border-slate-100 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-3 flex items-center justify-center gap-2">
            <Star className="text-yellow-400 fill-yellow-400" /> Bảng vàng danh dự
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Ghi danh những nhà tài trợ vàng đã giúp 4 anh em Marketing vượt qua những ngày đói kém.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden ring-4 ring-slate-50">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="py-5 px-6 font-bold text-slate-400 text-xs uppercase tracking-wider w-20">#</th>
                  <th className="py-5 px-6 font-bold text-slate-400 text-xs uppercase tracking-wider">Nhà hảo tâm</th>
                  <th className="py-5 px-6 font-bold text-slate-400 text-xs uppercase tracking-wider text-right">Số tiền</th>
                  <th className="py-5 px-6 font-bold text-slate-400 text-xs uppercase tracking-wider">Lời nhắn gửi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {donors.map((donor, index) => (
                  <tr key={donor.id} className="hover:bg-orange-50/30 transition-colors group">
                    <td className="py-5 px-6 text-slate-400 font-bold">
                       {index === 0 ? '🥇' : (index + 1).toString().padStart(2, '0')}
                    </td>
                    <td className="py-5 px-6">
                       <span className="font-bold text-slate-700 group-hover:text-orange-600 transition-colors">
                          {donor.name}
                       </span>
                    </td>
                    <td className="py-5 px-6 text-right">
                       <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                          donor.amount >= 500000 ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'
                       }`}>
                          {donor.amount.toLocaleString('vi-VN')}đ
                       </span>
                    </td>
                    <td className="py-5 px-6 text-slate-500 italic text-sm">
                      "{donor.message}"
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-slate-50 border-t border-slate-100 text-center text-xs text-slate-500 font-medium">
             Dữ liệu được cập nhật thủ công (khi Thủ Quỹ rảnh)
          </div>
        </div>
      </div>
    </section>
  );
};