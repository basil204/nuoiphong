import React, { useState } from 'react';
import { TeamMember } from '../types';
import { Heart, X, Coffee, BatteryWarning } from 'lucide-react';

const teamMembers: TeamMember[] = [
  {
    id: 'leader',
    name: 'Sếp Mạnh (Leader)',
    role: 'Gánh Team',
    image: 'https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=1000&auto=format&fit=crop',
    status: 'Đang họp (lần thứ 8 trong ngày)',
    description: 'Chuyên gia hứa deadline với khách. Cần trà sữa để hạ hỏa.',
    hungerLevel: 90,
  },
  {
    id: 'content',
    name: 'Bé Na (Content)',
    role: 'Múa Bút',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1000&auto=format&fit=crop',
    status: 'Bí từ, cắn móng tay',
    description: 'Viết nghìn bài không mệt, chỉ mệt vì đói. Cần bánh ngọt để nảy số.',
    hungerLevel: 95,
  },
  {
    id: 'design',
    name: 'Cậu Ba (Design)',
    role: 'Vẽ Vời',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop',
    status: 'Mắt thâm, lưng mỏi',
    description: 'Ghét màu đỏ, thích màu "ting ting". Cần vitamin C và Cafein.',
    hungerLevel: 85,
  },
  {
    id: 'ads',
    name: 'Chú Tư (Ads)',
    role: 'Đốt Tiền',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop',
    status: 'Nhìn chart đỏ lòm',
    description: 'Tiêu tiền tỷ của sếp nhưng tiền túi thì rỗng. Cần mì tôm hảo hạng.',
    hungerLevel: 99,
  },
];

export const TeamSection: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const getQRLink = (memberName: string) => {
    // Encode the note specifically for the selected member
    const note = `Nuoi ${memberName.split(' ')[0]}`.toUpperCase();
    return `https://img.vietqr.io/image/MB-334218-compact2.png?amount=&addInfo=${encodeURIComponent(note)}&accountName=NGUYEN%20LIEN%20MANH`;
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 font-serif">
            Hồ Sơ "Bé" Cần Nhận Nuôi
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Hãy chọn một nhân sự hợp mệnh để tiếp tế lương thực. 
            Mọi sự đóng góp đều giúp KPI xanh trở lại.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
              {/* Image Area */}
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-700 shadow-sm">
                  {member.role}
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 pt-12">
                   <div className="flex items-center gap-2 text-white text-xs font-medium">
                      <BatteryWarning size={14} className="text-red-400" />
                      Độ đói: {member.hungerLevel}%
                   </div>
                   <div className="w-full bg-white/20 h-1.5 mt-1 rounded-full overflow-hidden">
                      <div className="bg-red-500 h-full rounded-full animate-pulse" style={{ width: `${member.hungerLevel}%` }} />
                   </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-800 mb-1">{member.name}</h3>
                <p className="text-xs text-orange-500 font-bold uppercase tracking-wider mb-3">{member.status}</p>
                <p className="text-slate-500 text-sm mb-6 flex-1">
                  "{member.description}"
                </p>
                
                <button 
                  onClick={() => setSelectedMember(member)}
                  className="w-full py-3 rounded-xl bg-slate-100 text-slate-700 font-bold hover:bg-orange-500 hover:text-white transition-all flex items-center justify-center gap-2 group-hover:shadow-lg hover:scale-105 active:scale-95"
                >
                  <Heart size={18} className="group-hover:fill-current" /> Nhận Nuôi Bé
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal QR Popup */}
      {selectedMember && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedMember(null)}
          />
          
          <div className="bg-white rounded-[2rem] p-2 max-w-sm w-full relative z-10 shadow-2xl animate-[scale-in_0.2s_ease-out]">
            <button 
              onClick={() => setSelectedMember(null)}
              className="absolute -top-3 -right-3 w-10 h-10 bg-white rounded-full text-slate-400 hover:text-slate-900 shadow-lg flex items-center justify-center transition-colors z-20 border border-slate-100"
            >
              <X size={20} />
            </button>

            <div className="bg-slate-50 rounded-[1.5rem] p-6 text-center border border-slate-100 overflow-hidden">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900">Nuôi {selectedMember.name}</h3>
                <p className="text-slate-500 text-sm mt-1">Quét mã để donate trực tiếp</p>
              </div>

              <div className="bg-white p-3 rounded-2xl shadow-inner border border-slate-100 mb-6 relative">
                 <img 
                   src={getQRLink(selectedMember.name)}
                   alt="QR Code"
                   className="w-full rounded-xl mix-blend-multiply"
                 />
                 <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-green-100 text-green-700 text-[10px] font-bold px-3 py-1 rounded-full border border-green-200 whitespace-nowrap">
                    Nội dung: NUOI {selectedMember.id.toUpperCase()}
                 </div>
              </div>

              <div className="text-xs text-slate-400 font-medium">
                Tài khoản: MB Bank - 334218 - Nguyen Lien Manh
              </div>
              
              <button 
                onClick={() => setSelectedMember(null)}
                className="mt-6 w-full py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
              >
                <Coffee size={18} /> Đã gửi (Cứu đói thành công)
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes scale-in {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </section>
  );
};