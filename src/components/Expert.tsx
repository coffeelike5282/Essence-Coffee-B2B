import expertCoffee from '../assets/expert-coffee.jpg';

export const Expert: React.FC = () => {
  return (
    <section id="expert" className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-y border-outline-variant/10">
      <div className="max-w-container-max mx-auto flex flex-col md:flex-row gap-gutter items-center">
        <div className="w-full md:w-1/3 aspect-square rounded-full overflow-hidden border-4 border-primary-container/40 relative shadow-2xl transition-all duration-500 hover:scale-105 hover:border-primary-container/80 gold-glow group">
          <img 
            src={expertCoffee} 
            alt="CoffeeLike Essence Coffee" 
            className="absolute inset-0 w-full h-full object-cover sepia-[0.15] brightness-[0.88] contrast-[1.05] saturate-[1.1] group-hover:sepia-0 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500" />
        </div>
        <div className="w-full md:w-2/3 space-y-stack-md text-center md:text-left mt-8 md:mt-0">
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface leading-tight break-keep">
            <span className="text-primary font-bold tracking-tight">iRhea</span> 브루잉 머신<br />
            에센스 추출 국내 최고 전문가
          </h2>
          <p className="font-body-lg text-lg md:text-xl text-primary-fixed italic font-semibold pt-2 break-keep">
            "저는 지난 6년간 매장에 에스프레소 머신을 단 한 대도 두지 않았습니다."
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant pt-4 max-w-2xl leading-relaxed break-keep">
            오직 iRhea 머신만을 연구하여 축적된 데이터와 노하우. 수백 번의 테스트를 거쳐 완성된 완벽한 에센스 추출 프로토콜을 통해 '실전 수율, 보관법, 매장 동선 노하우'를 전수합니다.
          </p>
        </div>
      </div>
    </section>
  );
};
