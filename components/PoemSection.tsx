import React, { useEffect, useRef, useState } from 'react';
import { Feather, Facebook, Twitter, Share2 } from 'lucide-react';

export const PoemSection: React.FC = () => {
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

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = "Cứu đói team Marketing! Mọi người vào xem bài thơ xin ăn này hay lắm nè.";

  const handleShareFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const handleShareTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  return (
    <section 
      ref={sectionRef}
      className={`py-20 bg-brand-bg relative overflow-hidden transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
       {/* Background pattern */}
       <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center mb-4 text-orange-500">
             <Feather size={24} />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 font-serif">
            Tâm Thư Cầu Viện
          </h2>
          <p className="text-slate-500 mt-2">
            (Nỗi lòng 4 chiến sĩ Marketing ngày cuối tháng)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Card 1 */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-soft border border-slate-100 relative group hover:shadow-xl transition-shadow duration-300">
             <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-slate-200 to-slate-300 group-hover:from-orange-400 group-hover:to-pink-500 transition-all duration-500" />
             
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8 border-b border-slate-100 pb-4">Nguyên Tác (Hán Văn)</h3>
            
            <div className="space-y-6 font-serif text-slate-700 text-lg leading-relaxed text-center">
              <div className="hover:text-orange-600 transition-colors cursor-default">
                <p className="font-bold text-xl mb-1">文案寫盡腦空虚</p>
                <p className="text-sm text-slate-400 italic font-sans">Văn án tả tận não không hư</p>
              </div>
              <div className="hover:text-orange-600 transition-colors cursor-default">
                <p className="font-bold text-xl mb-1">廣告未成腹已飢</p>
                <p className="text-sm text-slate-400 italic font-sans">Quảng cáo vị thành phúc dĩ cơ</p>
              </div>
              <div className="hover:text-orange-600 transition-colors cursor-default">
                <p className="font-bold text-xl mb-1">四人同苦求一飽</p>
                <p className="text-sm text-slate-400 italic font-sans">Tứ nhân đồng khổ cầu nhất bão</p>
              </div>
              <div className="hover:text-orange-600 transition-colors cursor-default">
                <p className="font-bold text-xl mb-1">唯望嘉賓賜咖啡</p>
                <p className="text-sm text-slate-400 italic font-sans">Duy vọng gia tân tứ cà phê</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#fffcf5] p-8 md:p-10 rounded-2xl shadow-soft border border-orange-100 relative group hover:shadow-xl transition-shadow duration-300">
             {/* Paper texture effect */}
             <div className="absolute top-4 right-4 w-16 h-16 opacity-10">
                <Feather className="w-full h-full text-orange-900" />
             </div>
             
            <h3 className="text-sm font-bold text-orange-800/60 uppercase tracking-widest mb-8 border-b border-orange-200/50 pb-4">Dịch Nghĩa (Lục Bát)</h3>
            
            <div className="space-y-8 text-slate-800 font-serif text-lg leading-loose pl-4 border-l-4 border-orange-200">
              <div>
                <p>Content viết mãi cạn lời,</p>
                <p>Ads (quảng cáo) chưa cắn tiền, bụng thời biểu tình.</p>
                <p>Bốn người bốn góc lặng thinh,</p>
                <p>Mắt thâm, gối mỏi, rập rình deadline.</p>
              </div>
              
              <div className="pt-4">
                <p>Cầu mong các sếp đẹp trai,</p>
                <p>Chị em xinh gái, ra tay cứu bần.</p>
                <p>Ly trà, gói bánh ân cần,</p>
                <p>Vực dậy nhuệ khí, ngàn lần biết ơn.</p>
              </div>
            </div>
            
            <div className="mt-8 text-right">
               <span className="text-sm font-bold text-orange-500 font-sans">—— Tác giả: Team MKT ——</span>
            </div>
          </div>
        </div>

        {/* Social Sharing */}
        <div className={`flex flex-col items-center gap-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-slate-400 text-sm font-medium flex items-center gap-2">
                <Share2 size={16} /> Chia sẻ nỗi niềm này
            </p>
            <div className="flex gap-4">
                <button 
                    onClick={handleShareFacebook}
                    className="flex items-center gap-2 px-6 py-2 bg-[#1877F2] text-white rounded-full text-sm font-bold shadow-lg hover:shadow-xl hover:bg-[#166fe5] transition-all transform hover:-translate-y-0.5"
                >
                    <Facebook size={18} /> Facebook
                </button>
                <button 
                    onClick={handleShareTwitter}
                    className="flex items-center gap-2 px-6 py-2 bg-[#1DA1F2] text-white rounded-full text-sm font-bold shadow-lg hover:shadow-xl hover:bg-[#1a91da] transition-all transform hover:-translate-y-0.5"
                >
                    <Twitter size={18} /> Twitter
                </button>
            </div>
        </div>

      </div>
    </section>
  );
};