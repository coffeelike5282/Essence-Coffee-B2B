import React from 'react';

export const Hero: React.FC = () => {
  const handleScrollToForm = () => {
    const formElement = document.getElementById('contact');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-margin-mobile md:px-margin-desktop py-section-gap">
      <div className="absolute inset-0 z-0">
        <img 
          alt="CoffeeLike brewing process" 
          className="w-full h-full object-cover opacity-45" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhIsjS_u8ORrxtgkS68OkZm5Bf8mRMiHheibQWL2YoaWbxa3z62zyImuyh-PZm7KXnOvIrlHAc3jKvW2AwOJ_JITp28oKTEQDkLVyrI0eG53gQn8B7EsJsCN5Dbed603XMGBbOi9UXBBiquZQBHD4Rf-f6bIXcqaYzeixiOhEnCopU4IxlwHkRFId6eTNvTask089Y0daDSVH3oTG25U8VV6D3jYUWYzLEKksZHMVUyH_aCu58Sqb9Es3qbArAVDGBnfPZstf91T50" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-container-max mx-auto text-center space-y-stack-lg glass-panel p-8 md:p-16 rounded-xl gold-glow transition-transform duration-700 hover:scale-[1.01]">
        <p className="font-body-lg text-body-lg text-secondary-fixed uppercase tracking-widest mb-4 break-keep">
          대표님의 <span className="text-primary font-semibold tracking-[0.1em]">iRhea 브루잉</span> 머신,<br className="inline md:hidden" /> 아직도 기다리는 브루잉 커피만 내리시나요?
        </p>
        <h1 className="font-headline-lg-mobile md:font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface max-w-4xl mx-auto leading-tight break-keep">
          에스프레소 머신 없이 6년.<br />
          <span className="tracking-[-0.02em]">iRhea의</span> 잠재력을 100% 끌어올릴<br className="hidden md:inline" />
          <span className="text-primary-container font-extrabold drop-shadow-[0_2px_10px_rgba(212,175,55,0.4)]">
            에센스 원액 추출법
          </span>을 공개합니다.
        </h1>
        <div className="pt-stack-md">
          <button 
            onClick={handleScrollToForm}
            className="bg-primary-container text-on-primary-container font-label-md px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] font-bold text-lg"
          >
            기본 에센스 세팅 가이드 무료로 받기
          </button>
        </div>
      </div>
    </section>
  );
};
