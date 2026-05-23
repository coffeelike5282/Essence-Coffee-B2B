import painpointCoffee from '../assets/painpoint-coffee.jpg';

export const PainPoints: React.FC = () => {
  return (
    <section id="pain-points" className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low border-y border-outline-variant/10">
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
          <div className="space-y-stack-lg">
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface leading-tight break-keep">
              바쁜 피크타임,<br />
              <span className="text-secondary">브루잉 커피 주문</span>이 두려우신가요?
            </h2>
            <ul className="space-y-stack-md font-body-lg text-body-lg text-on-surface-variant border-l-2 border-primary-container/50 pl-6 space-y-4 break-keep">
              <li className="relative flex items-center gap-2">
                <span className="text-error">✕</span> 주문 후 5~10분씩 걸리는 대기 시간...
              </li>
              <li className="relative flex items-center gap-2">
                <span className="text-error">✕</span> 아메리카노 외에 라떼나 아이스 메뉴로 확장하기 어려운 한계...
              </li>
            </ul>
            <div className="p-6 bg-surface-container-highest rounded border border-primary-container/30 gold-glow transition-all duration-300 hover:border-primary-container/60">
              <p className="font-body-lg text-body-lg text-primary-fixed font-bold break-keep">
                이 모든 고민, '커피라이크 대용량 에센스 선추출'로 한 번에 해결할 수 있습니다.
              </p>
            </div>
          </div>
          <div className="w-full h-full min-h-[400px] rounded-xl relative shadow-2xl overflow-hidden border border-primary-container/20 hover:border-primary-container/50 gold-glow group">
            <img 
              src={painpointCoffee} 
              alt="Premium Coffee Drink" 
              className="absolute inset-0 w-full h-full object-cover sepia-[0.1] brightness-[0.88] contrast-[1.05] saturate-[1.05] group-hover:sepia-0 group-hover:brightness-100 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/35 to-transparent mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
};
