import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <header className="bg-background/80 dark:bg-background/80 backdrop-blur-xl w-full top-0 sticky z-50 border-b border-outline-variant/20 transition-all duration-300">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
        <div className="font-headline-md text-2xl md:text-3xl font-bold tracking-tight text-primary hover:opacity-90 cursor-pointer transition-opacity">
          CoffeeLike Essence
        </div>
        <nav className="hidden md:flex gap-gutter items-center">
          <a href="#pain-points" className="font-label-md text-on-surface-variant hover:text-primary transition-colors duration-200">
            특징
          </a>
          <a href="#solutions" className="font-label-md text-on-surface-variant hover:text-primary transition-colors duration-200">
            솔루션
          </a>
          <a href="#expert" className="font-label-md text-on-surface-variant hover:text-primary transition-colors duration-200">
            전문가 소개
          </a>
          <a href="#services" className="font-label-md text-on-surface-variant hover:text-primary transition-colors duration-200">
            서비스
          </a>
          <a 
            href="#contact" 
            className="bg-primary-container text-on-primary-container font-label-md px-6 py-2 rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)] ml-4"
          >
            가이드 신청
          </a>
        </nav>
      </div>
    </header>
  );
};
