import React from 'react';

export const PremiumServices: React.FC = () => {
  return (
    <section id="services" className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low border-t border-outline-variant/10">
      <div className="max-w-container-max mx-auto text-center space-y-stack-lg">
        <h2 className="font-headline-md text-4xl text-on-surface font-bold mb-12">
          Premium Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Card 1 */}
          <div className="p-8 border border-outline-variant/20 rounded-xl bg-background hover:border-primary-container/60 hover:-translate-y-1 transition-all duration-300 shadow-md group">
            <h3 className="font-headline-md text-2xl text-primary font-bold mb-4 group-hover:text-primary-fixed transition-colors">
              Consulting
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              원두 맞춤형 커피라이크 프로파일 정밀 세팅 방문 컨설팅
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="p-8 border border-outline-variant/20 rounded-xl bg-background hover:border-primary-container/60 hover:-translate-y-1 transition-all duration-300 shadow-md group">
            <h3 className="font-headline-md text-2xl text-primary font-bold mb-4 group-hover:text-primary-fixed transition-colors">
              Education
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              에센스 냉장 보관 및 바(Bar) 동선 최적화 실전 오퍼레이션 교육
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="p-8 border border-outline-variant/20 rounded-xl bg-background hover:border-primary-container/60 hover:-translate-y-1 transition-all duration-300 shadow-md group">
            <h3 className="font-headline-md text-2xl text-primary font-bold mb-4 group-hover:text-primary-fixed transition-colors">
              Recipe Development
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              에센스 베이스 독창적 시그니처 메뉴 레시피 개발
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
