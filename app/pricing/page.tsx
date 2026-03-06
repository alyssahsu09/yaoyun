'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Download, Sparkles, Zap, Copy, ArrowRight, CheckCircle2, Settings, BadgeCheck } from "lucide-react";

export default function PricingPage() {
  const [isPartner, setIsPartner] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const togglePrice = () => setIsPartner(!isPartner);

  return (
    <>
      <style jsx global>{`
        :root {
          --green-deep:    #0d2318;
          --green-mid:     #163d28;
          --green-light:   #2a6647;
          --green-accent:  #4caf7d;
          --gold-main:     #D4AF37;
          --gold-bright:   #EAD2AC;
          --gold-dark:     #B8860B;
          --text-main:     #e8f0eb;
          --text-muted:    #8fac99;
          --glass-bg:      rgba(255,255,255,0.06);
          --glass-border:  rgba(255,255,255,0.12);
        }

        .bg-canvas {
          position: fixed; inset: 0; z-index: 0; pointer-events: none;
          background:
            radial-gradient(ellipse 80% 60% at 10% 20%, rgba(44,102,71,0.45) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 90% 80%, rgba(76,175,125,0.18) 0%, transparent 55%),
            radial-gradient(ellipse 50% 40% at 50% 50%, rgba(22,61,40,0.6) 0%, transparent 70%),
            linear-gradient(160deg, #0a1e12 0%, #0d2318 50%, #091a10 100%);
        }
        .bg-canvas::after {
          content: '';
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234caf7d' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          opacity: 0.8;
        }

        .metallic-text {
          background: linear-gradient(135deg, #EAD2AC 0%, #D4AF37 45%, #C9A030 55%, #B8860B 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
        }

        .metallic-gold-btn {
          background: linear-gradient(135deg, #EAD2AC 0%, #D4AF37 45%, #C9A030 55%, #B8860B 100%);
          box-shadow: 
            0 10px 20px -5px rgba(212, 175, 55, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.4);
          border: 1px solid rgba(201, 160, 48, 0.5);
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 1rem;
          border-radius: 1rem;
          color: #2D3436;
          font-weight: 900;
          text-decoration: none;
        }

        .shimmer {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transform: translateX(-100%);
          transition: transform 0.6s ease;
        }
        .metallic-gold-btn:hover .shimmer {
          transform: translateX(100%);
        }

        .glass-card {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-radius: 24px;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .glass-card:hover {
          background: rgba(255,255,255,0.1);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.8s ease-out forwards; }
      `}</style>

      <div className="bg-canvas"></div>
      <div className="relative z-10 min-h-screen text-[#e8f0eb] font-sans">
        {/* NAV */}
        <nav className="sticky top-0 z-[100] flex items-center justify-between px-6 md:px-12 py-6 bg-[#0d2318]/80 backdrop-blur-xl border-b border-white/5">
          <Link href="/" className="font-serif font-black text-xl metallic-text tracking-tight text-left">許耀云 Alyssa</Link>
          <Link href="/" className="flex items-center gap-2 text-sm text-[#8fac99] hover:text-[#4caf7d] transition-colors font-bold text-left">
            <ArrowLeft className="w-4 h-4" /> 返回個人頁面
          </Link>
        </nav>

        {/* HERO */}
        <div className="text-center py-24 px-6 fade-up">
          <p className="text-[0.8rem] tracking-[0.4em] uppercase text-[#4caf7d] font-black mb-6">Service Pricing — 2026</p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 metallic-text">服務費用說明</h1>
          <p className="text-[#8fac99] max-w-xl mx-auto mb-12 text-lg md:text-xl font-medium leading-relaxed">提供透明化的服務與費用結構，<br/>作為雙方建立長期信賴夥伴關係的基礎。</p>
          <div className="w-16 h-[3px] mx-auto bg-gradient-to-r from-[#4caf7d] to-[#D4AF37] rounded-full"></div>
        </div>

        {/* TOGGLE */}
        <div className="flex items-center justify-center gap-6 mb-12 fade-up" style={{ animationDelay: '0.2s' }}>
          <span className={`text-base transition-all ${!isPartner ? 'text-[#e8f0eb] font-black scale-110' : 'text-[#8fac99]'}`}>公開標準價</span>
          <div className={`relative w-16 h-8 rounded-full cursor-pointer transition-colors border ${isPartner ? 'bg-[#4caf7d]/30 border-[#4caf7d]' : 'bg-white/5 border-white/10'}`} onClick={togglePrice}>
            <div className={`absolute top-1 left-1 w-6 h-6 rounded-full transition-transform duration-300 shadow-lg ${isPartner ? 'translate-x-8 bg-[#4caf7d]' : 'bg-[#8fac99]'}`} />
          </div>
          <span className={`text-base transition-all ${isPartner ? 'text-[#e8f0eb] font-black scale-110' : 'text-[#8fac99]'}`}>商會夥伴優惠價</span>
        </div>

        {/* SERVICES GRID */}
        <section className="max-w-7xl mx-auto px-6 py-12 text-left text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { tag: 'Retainer', name: '常年永續顧問', desc: '年度持續性 ESG 策略諮詢、法規動態更新、顧問會議及指導。', std: '18,000', ptn: '15,000', unit: 'NTD 起 / 月' },
              { tag: 'ISO 14064-1', name: '數位碳盤查輔導', desc: '依據 ISO 14064-1 標準，提供組織溫室氣體盤查輔導。', tiers: [ { n: '經濟包', s: '120,000', p: '100,000' }, { n: '標準包', s: '220,000 起', p: '180,000' }, { n: '白金包', s: '350,000 起', p: '300,000' } ] },
              { tag: 'Transformation', name: '品牌永續轉型', desc: '整合品牌策略、供應鏈管理與綠色行銷，執行深度永續轉型專案。', std: '300,000', ptn: '250,000', unit: 'NTD 起 / 案' },
              { tag: 'Compliance', name: '環保標章與合規', desc: '協助申請國內外環保標章、產品碳足跡分析及法規遵循。', std: '100,000', ptn: '80,000', unit: 'NTD 起 / 案' },
              { tag: 'Advisory', name: '專業策略諮詢', desc: '針對特定 ESG 議題，提供以小時計費之深度諮詢服務。', tiers: [ { n: '單次', s: '3,000 / hr', p: '2,500 / hr' }, { n: '4 小時方案', s: '12,000', p: '10,000' }, { n: '8 小時方案', s: '24,000', p: '20,000' } ] },
              { tag: 'Training', name: '主題式講座培訓', desc: '提供公開班講座與企業內部客製化培訓，深化組織永續意識。', tiers: [ { n: '公開班', s: '3,500 / 人', p: '2,500 / 人' }, { n: '企業內訓', s: '18,000 起', p: '15,000 起' } ] }
            ].map((s, idx) => (
              <div key={idx} className="glass-card p-10 flex flex-col text-left text-left">
                <span className="text-[#4caf7d] text-[11px] font-black tracking-widest uppercase mb-4">{s.tag}</span>
                <h3 className="font-serif text-2xl font-bold mb-4">{s.name}</h3>
                <p className="text-[#8fac99] text-base leading-relaxed mb-8 flex-1">{s.desc}</p>
                
                <div className="mb-8">
                  {s.tiers ? (
                    <div className="space-y-3">
                      {s.tiers.map((t, i) => (
                        <div key={i} className="flex justify-between items-center bg-white/5 p-4 rounded-xl border border-white/5">
                          <span className="text-[#8fac99] font-bold text-sm">{t.n}</span>
                          <span className={`font-serif font-black text-lg ${isPartner ? 'text-[#4caf7d]' : 'metallic-text'}`}>
                            {isPartner ? t.p : t.s}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-baseline gap-2">
                      <span className={`font-serif text-4xl font-black transition-all ${isPartner ? 'text-[#4caf7d]' : 'metallic-text'}`}>
                        {isPartner ? s.ptn : s.std}
                      </span>
                      <span className="text-[#8fac99] text-sm font-bold">{s.unit}</span>
                    </div>
                  )}
                </div>

                <Link href="/#contact" className="metallic-gold-btn group">
                  <div className="shimmer" />
                  <span className="relative z-10 flex items-center gap-2">諮詢此方案 <ArrowRight className="w-5 h-5" /></span>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* MID CTA */}
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="p-12 rounded-[3rem] bg-gradient-to-br from-[#2c6647]/40 to-[#163d28]/60 border border-white/10 backdrop-blur-3xl text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#4caf7d]/10 rounded-full blur-[100px] -mr-32 -mt-32" />
            <h4 className="font-serif text-3xl font-bold mb-4">已找到適合的服務方案？</h4>
            <p className="text-[#8fac99] text-lg mb-10 font-medium">歡迎索取專屬報價，Alyssa 將親自回覆您的需求。</p>
            <Link href="/#contact" className="metallic-gold-btn inline-flex px-12 py-5 rounded-full text-xl shadow-2xl group">
              <div className="shimmer" />
              <span className="relative z-10">📋 索取顧問服務報價</span>
            </Link>
          </div>
        </div>

        {/* PACKAGES */}
        <section className="max-w-7xl mx-auto px-6 py-20 text-left">
          <div className="flex items-center gap-4 font-serif text-3xl font-bold mb-12">
            <div className="w-3 h-3 rounded-full bg-[#4caf7d] shadow-[0_0_15px_#4caf7d]"></div>策略性合作方案
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🌿', name: '常年顧問優惠', off: '9 折', d: '簽訂年度合約後，該期間執行任一專案享 9 折。' },
              { icon: '🔁', name: '專案升級折抵', off: '10% 折抵', d: '三個月內簽訂合約，首年可折抵碳盤查 10%。' },
              { icon: '💡', name: '諮詢轉專案', off: '全額折抵', d: '一月內簽訂專案，該次諮詢費全額折抵。' },
              { icon: '🏷️', name: '多項專案優惠', off: '8 折', d: '委託兩項以上環保標章申請，第二項起 8 折。' }
            ].map(p => (
              <div key={p.name} className="glass-card p-8 flex flex-col gap-4 border-t-4 border-t-transparent hover:border-t-[#4caf7d] text-left text-left">
                <span className="text-4xl mb-2">{p.icon}</span>
                <h4 className="font-serif text-xl font-bold">{p.name}</h4>
                <span className="inline-block text-[11px] font-black px-3 py-1 bg-[#D4AF37]/20 border border-[#D4AF37]/40 rounded-full text-[#EAD2AC] self-start tracking-wider">
                  {p.off}
                </span>
                <p className="text-[#8fac99] text-sm leading-relaxed font-medium">{p.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <div className="mx-6 p-16 rounded-[4rem] text-center bg-gradient-to-br from-[#2c6647]/30 to-[#0d2318]/80 border border-[#4caf7d]/20 backdrop-blur-3xl mb-32 relative overflow-hidden">
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px]" />
          <h3 className="font-serif text-4xl font-bold mb-6 metallic-text">期待與您攜手，共創永續價值</h3>
          <p className="text-[#8fac99] text-xl mb-12 font-medium">免費初步諮詢，為您的企業量身規劃</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link href="/#contact" className="metallic-gold-btn px-12 py-5 rounded-full text-xl shadow-2xl group">
              <div className="shimmer" />
              <span className="relative z-10">立即加入 LINE 諮詢</span>
            </Link>
            <Link href="/" className="px-12 py-5 border border-white/10 text-[#8fac99] hover:text-white hover:border-white/30 rounded-full font-bold transition-all text-xl">
              回到個人頁面
            </Link>
          </div>
        </div>

        <footer className="text-center py-16 border-t border-white/5 text-[#8fac99] space-y-2 text-center text-center">
          <p className="font-bold">© 2026 許耀云 Alyssa · 永續策略顧問</p>
          <p className="italic font-serif opacity-60 text-xs tracking-widest">剛柔並濟耀新局，永續賦能云水齊</p>
        </footer>
      </div>
    </>
  );
}
