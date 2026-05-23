import React from 'react';

export const Solutions: React.FC = () => {
  return (
    <section id="solutions" className="py-section-gap px-margin-mobile md:px-margin-desktop bg-background">
      <div className="max-w-container-max mx-auto space-y-stack-lg">
        <div className="text-center mb-16 space-y-2">
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
            커피라이크 에센스 솔루션
          </h2>
          <p className="font-body-lg text-body-lg text-primary-fixed tracking-wide">
            과학적인 추출로 완성하는 프리미엄 카페 비즈니스
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Card 1 */}
          <div className="glass-panel p-8 rounded-xl hover:-translate-y-2 transition-all duration-300 border-t border-primary-container/40 hover:border-primary-container/85 shadow-lg group">
            <span className="material-symbols-outlined text-5xl text-primary-container mb-6 block group-hover:scale-110 transition-transform" style={{ fontVariationSettings: '"FILL" 1' }}>
              water_drop
            </span>
            <h3 className="font-headline-md text-2xl text-on-surface mb-4 font-bold">
              압도적인 밸런스와 향
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              거칠고 쓴 탄맛 대신 부드럽고 달콤하며, 원두 본연의 에센스만을 추출하여 깊고 풍부한 향미를 구현합니다.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="glass-panel p-8 rounded-xl hover:-translate-y-2 transition-all duration-300 border-t border-primary-container/40 hover:border-primary-container/85 shadow-lg group">
            <span className="material-symbols-outlined text-5xl text-primary-container mb-6 block group-hover:scale-110 transition-transform" style={{ fontVariationSettings: '"FILL" 1' }}>
              restaurant_menu
            </span>
            <h3 className="font-headline-md text-2xl text-on-surface mb-4 font-bold">
              무한한 메뉴 확장
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              고농도 에센스를 베이스로 아메리카노부터 라떼, 아인슈페너까지 다양한 메뉴 라인업 구축이 가능합니다.
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="glass-panel p-8 rounded-xl hover:-translate-y-2 transition-all duration-300 border-t border-primary-container/40 hover:border-primary-container/85 shadow-lg group">
            <span className="material-symbols-outlined text-5xl text-primary-container mb-6 block group-hover:scale-110 transition-transform" style={{ fontVariationSettings: '"FILL" 1' }}>
              timer
            </span>
            <h3 className="font-headline-md text-2xl text-on-surface mb-4 font-bold">
              초고속 제조 (30초 서빙)
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              선추출된 에센스를 활용하여 바쁜 피크타임에도 30초 만에 완벽한 퀄리티의 아메리카노를 제공합니다.
            </p>
          </div>
        </div>

        <div className="mt-16 w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden relative shadow-2xl">
          <img 
            alt="Detailed view of coffee extraction" 
            className="w-full h-full object-cover opacity-80" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWLum8tHvfpzWdOgb0TRJctPBCkcpDMd7WQHxtyuMo87i9sxxaVAcx3fp46H-AdTc4oXIfWx6Hzpl1GP2tL4_gJ-jwdr4IlaMx0-MTaTnlyXOISrsk2CZHVlOz-gIwXSgxOaKFdxQs64myvjx2nFiRuagXbovdKholf4-tVJXiDLUn0Fom5UoPteFRUKYNbnXMJcdLgP1UHYpwciQmEIQWXaR89d_HLRdYNVaK1ro1UurE84esY2rAuXF40QVmWK0foY9FWx-mtqSI" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
        </div>
      </div>
    </section>
  );
};
