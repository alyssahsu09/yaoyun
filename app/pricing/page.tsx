'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

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
          --gold:          #c9a84c;
          --gold-light:    #e8c97a;
          --text-main:     #e8f0eb;
          --text-muted:    #8fac99;
          --glass-bg:      rgba(255,255,255,0.06);
          --glass-border:  rgba(255,255,255,0.12);
          --glass-hover:   rgba(255,255,255,0.10);
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

        .pricing-page-wrapper {
          font-family: 'Noto Sans TC', sans-serif;
          background: var(--green-deep);
          color: var(--text-main);
          min-height: 100vh;
          line-height: 1.8;
          position: relative;
          z-index: 1;
        }

        .glass {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: 16px;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          transition: all 0.3s ease;
        }
        .glass:hover {
          background: var(--glass-hover);
          transform: translateY(-3px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.25), 0 0 0 1px rgba(76,175,125,0.15);
        }

        .toggle-btn {
          position: relative; width: 56px; height: 30px;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: 15px; cursor: pointer;
          transition: background 0.3s;
        }
        .toggle-btn.partner { background: rgba(76,175,125,0.25); border-color: var(--green-accent); }
        .toggle-btn::after {
          content: '';
          position: absolute; top: 3px; left: 3px;
          width: 22px; height: 22px; border-radius: 50%;
          background: var(--text-muted);
          transition: transform 0.3s, background 0.3s;
        }
        .toggle-btn.partner::after {
          transform: translateX(26px);
          background: var(--green-accent);
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.6s ease forwards; }
      `}</style>

      <div className="bg-canvas"></div>
      <div className="pricing-page-wrapper">
        {/* NAV */}
        <nav className="sticky top-0 z-[100] flex items-center justify-between px-6 md:px-10 py-5 bg-[#0d2318]/75 backdrop-blur-xl border-b border-white/10">
          <Link href="/" className="font-serif font-bold text-lg text-[#e8c97a] tracking-tight">許耀云 Alyssa</Link>
          <Link href="/" className="flex items-center gap-2 text-sm text-[#8fac99] hover:text-[#4caf7d] transition-colors">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
              <path d="M10 3L5 8l5 5"/>
            </svg>
            返回個人頁面
          </Link>
        </nav>

        {/* HERO */}
        <div className="text-center py-20 px-6 fade-up">
          <p className="text-[0.88rem] tracking-[0.3em] uppercase text-[#4caf7d] mb-4">Service Pricing — 2026</p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-br from-[#e8f0eb] to-[#e8c97a] bg-clip-text text-transparent mb-4">服務費用說明</h1>
          <p className="text-[#8fac99] max-w-lg mx-auto mb-10 text-lg">提供透明化的服務與費用結構，作為雙方建立長期信賴夥伴關係的基礎。</p>
          <div className="w-12 h-[2px] mx-auto bg-gradient-to-r from-[#4caf7d] to-[#c9a84c]"></div>
        </div>

        {/* TOGGLE */}
        <div className="flex items-center justify-center gap-4 mb-4 fade-up delay-1">
          <span className={`text-base transition-colors ${!isPartner ? 'text-[#e8f0eb] font-bold' : 'text-[#8fac99]'}`}>公開標準價</span>
          <div className={`toggle-btn ${isPartner ? 'partner' : ''}`} onClick={togglePrice}></div>
          <span className={`text-base transition-colors ${isPartner ? 'text-[#e8f0eb] font-bold' : 'text-[#8fac99]'}`}>
            商會夥伴優惠價
            <span className="ml-2 inline-block text-[0.8rem] px-2 py-0.5 bg-[#4caf7d]/15 border border-[#4caf7d]/35 rounded-full text-[#4caf7d]">優惠</span>
          </span>
        </div>

        {/* SERVICES */}
        <section className="max-w-6xl mx-auto px-6 py-8 fade-up delay-2">
          <div className="flex items-center gap-3 font-serif text-2xl font-bold mb-2">
            <div className="w-2 h-2 rounded-full bg-[#4caf7d]"></div>服務項目與費用
          </div>
          <p className="text-[#8fac99] text-sm mb-10 pl-5">點選右上角切換顯示商會夥伴優惠價格</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* 1. 常年永續顧問 */}
            <div className="glass p-8 flex flex-col gap-3">
              <p className="text-[0.8rem] tracking-widest uppercase text-[#4caf7d] font-medium">Retainer</p>
              <h3 className="font-serif text-xl font-bold">常年永續顧問</h3>
              <p className="text-[#8fac99] text-sm flex-1">年度持續性 ESG 策略諮詢、法規動態更新、顧問會議及指導。</p>
              <div className="mt-2">
                <div className="flex items-baseline gap-2">
                  <span className={`font-serif text-3xl font-bold transition-colors ${isPartner ? 'text-[#4caf7d]' : 'text-[#e8c97a]'}`}>
                    {isPartner ? '15,000' : '18,000'}
                  </span>
                  <span className="text-[#8fac99] text-sm">NTD 起 / 月</span>
                </div>
              </div>
              <Link href="/" className="mt-4 pt-4 border-t border-white/10 text-[#4caf7d] hover:gap-4 transition-all flex items-center gap-2 text-sm">預約諮詢 →</Link>
            </div>

            {/* 2. 數位碳盤查輔導 */}
            <div className="glass p-8 flex flex-col gap-3">
              <p className="text-[0.8rem] tracking-widest uppercase text-[#4caf7d] font-medium">ISO 14064-1</p>
              <h3 className="font-serif text-xl font-bold">數位碳盤查輔導</h3>
              <p className="text-[#8fac99] text-sm flex-1">依據 ISO 14064-1 標準，提供組織溫室氣體盤查輔導。</p>
              <div className="flex flex-col gap-2 mt-2">
                {[
                  { name: '經濟包', std: '120,000', ptn: '100,000' },
                  { name: '標準包', std: '220,000 起', ptn: '180,000' },
                  { name: '白金包', std: '350,000 起', ptn: '300,000' }
                ].map(tier => (
                  <div key={tier.name} className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-white/5 text-sm">
                    <span className="text-[#8fac99]">{tier.name}</span>
                    <span className={`font-serif font-bold ${isPartner ? 'text-[#4caf7d]' : 'text-[#e8c97a]'}`}>
                      {isPartner ? tier.ptn : tier.std}
                    </span>
                  </div>
                ))}
              </div>
              <Link href="/" className="mt-4 pt-4 border-t border-white/10 text-[#4caf7d] flex items-center gap-2 text-sm">了解更多 →</Link>
            </div>

            {/* 3. 品牌永續轉型 */}
            <div className="glass p-8 flex flex-col gap-3">
              <p className="text-[0.8rem] tracking-widest uppercase text-[#4caf7d] font-medium">Transformation</p>
              <h3 className="font-serif text-xl font-bold">品牌永續轉型</h3>
              <p className="text-[#8fac99] text-sm flex-1">整合品牌策略、供應鏈管理與綠色行銷，執行深度永續轉型專案。</p>
              <div className="mt-2">
                <div className="flex items-baseline gap-2">
                  <span className={`font-serif text-3xl font-bold transition-colors ${isPartner ? 'text-[#4caf7d]' : 'text-[#e8c97a]'}`}>
                    {isPartner ? '250,000' : '300,000'}
                  </span>
                  <span className="text-[#8fac99] text-sm">NTD 起 / 案</span>
                </div>
              </div>
              <Link href="/" className="mt-4 pt-4 border-t border-white/10 text-[#4caf7d] flex items-center gap-2 text-sm">預約諮詢 →</Link>
            </div>
          </div>
        </section>

        {/* MID CTA */}
        <div className="max-w-6xl mx-auto px-6 mb-20 text-center">
          <div className="p-10 rounded-[2rem] bg-gradient-to-br from-[#2c6647]/35 to-[#163d28]/50 border border-white/10 backdrop-blur-2xl">
            <p className="font-serif text-2xl font-bold mb-2">已找到適合的服務方案？</p>
            <p className="text-[#8fac99] mb-8">歡迎索取專屬報價，Alyssa 將親自回覆您的需求。</p>
            <a href="https://line.me/ti/p/Wy6nL8MNfS" className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-br from-[#4caf7d] to-[#3d9b68] text-white rounded-full font-bold shadow-xl active:scale-95 transition-all">📋 索取顧問服務報價</a>
          </div>
        </div>

        {/* PACKAGES */}
        <section className="max-w-6xl mx-auto px-6 mb-20 fade-up delay-3">
          <div className="flex items-center gap-3 font-serif text-2xl font-bold mb-2">
            <div className="w-2 h-2 rounded-full bg-[#4caf7d]"></div>策略性合作方案
          </div>
          <p className="text-[#8fac99] text-sm mb-10 pl-5">以下優惠方案不得合併使用，客戶可擇優適用</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: '🌿', name: '常年顧問優惠', off: '9 折', d: '簽訂年度合約後，該期間執行任一專案享 9 折。' },
              { icon: '🔁', name: '專案升級折抵', off: '最高 10% 折抵', d: '三個月內簽訂合約，首年可折抵碳盤查 10%。' },
              { icon: '💡', name: '諮詢轉專案', off: '全額折抵', d: '一月內簽訂專案，該次諮詢費全額折抵。' },
              { icon: '🏷️', name: '多項專案優惠', off: '8 折', d: '委託兩項以上環保標章申請，第二項起 8 折。' }
            ].map(p => (
              <div key={p.name} className="glass p-6 border-t-2 border-t-transparent hover:border-t-[#4caf7d] flex flex-col gap-3">
                <span className="text-3xl">{p.icon}</span>
                <h4 className="font-serif font-bold">{p.name}</h4>
                <span className="inline-block text-xs font-bold px-2 py-1 bg-[#c9a84c]/15 border border-[#c9a84c]/30 rounded-full text-[#e8c97a] self-start">{p.off}</span>
                <p className="text-sm text-[#8fac99]">{p.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mx-6 p-12 rounded-3xl text-center bg-gradient-to-br from-[#2c6647]/35 to-[#163d28]/50 border border-[#4caf7d]/25 backdrop-blur-xl mb-20 fade-up">
          <h3 className="font-serif text-2xl font-bold mb-3">期待與您攜手，共創永續價值</h3>
          <p className="text-[#8fac99] mb-8">免費初步諮詢，為您的企業量身規劃</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://line.me/ti/p/Wy6nL8MNfS" className="px-8 py-3.5 bg-gradient-to-br from-[#4caf7d] to-[#3d9b68] text-white rounded-full font-bold shadow-xl">立即加入 LINE 諮詢</a>
            <Link href="/" className="px-8 py-3.5 border border-white/10 text-[#8fac99] hover:text-white rounded-full transition-all">回到個人頁面</Link>
          </div>
        </div>

        <footer className="text-center py-10 border-t border-white/10 text-sm text-[#8fac99]">
          <p>© 2026 許耀云 Alyssa · 永續策略顧問</p>
          <p className="italic font-serif">剛柔並濟耀新局，永續賦能云水齊</p>
        </footer>
      </div>
    </>
  );
}
