import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/10 w-full py-8 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-margin-mobile md:px-margin-desktop gap-stack-md max-w-container-max mx-auto">
        <div className="font-headline-md text-xl md:text-2xl text-primary font-bold">
          CoffeeLike Essence
        </div>
        <div className="font-body-md text-body-md text-on-surface-variant text-center md:text-left text-sm">
          © 2026 CoffeeLike Essence Coffee Consulting. Precision in every drop.
        </div>
      </div>
    </footer>
  );
};
