
import React from 'react';

const HeroSection: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Musical Notes */}
        <div className="absolute top-1/4 left-1/6 w-10 h-10 text-white/40 animate-float" style={{ animationDelay: '0.5s' }}>♪</div>
        <div className="absolute top-2/3 left-1/5 w-8 h-8 text-white/30 animate-float" style={{ animationDelay: '1.2s' }}>♫</div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 text-white/40 animate-float" style={{ animationDelay: '0.8s' }}>♩</div>
        
        {/* Stars */}
        <div className="absolute top-1/5 right-1/3 w-4 h-4 text-white/50 animate-float" style={{ animationDelay: '1.5s' }}>✦</div>
        <div className="absolute bottom-1/4 right-1/5 w-5 h-5 text-white/40 animate-float" style={{ animationDelay: '2.1s' }}>✧</div>
        <div className="absolute bottom-1/3 left-1/3 w-6 h-6 text-white/30 animate-float" style={{ animationDelay: '1.8s' }}>✦</div>
        
        {/* Clouds */}
        <div className="absolute top-1/6 right-1/6 w-24 h-12 bg-white/20 rounded-full animate-float" style={{ animationDelay: '2.3s', borderRadius: '50%' }}></div>
        <div className="absolute bottom-1/5 left-1/6 w-32 h-16 bg-white/15 rounded-full animate-float" style={{ animationDelay: '1.7s', borderRadius: '50%' }}></div>
      </div>
      
      {/* Main Content */}
      <div className="container px-4 text-center z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          예술을 꿈꾸는 아이들
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          장난스러운 상상력, 진지한 예술을 만나다
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
          <button 
            className="btn-primary"
            onClick={() => scrollToSection('about')}
          >
            우리를 만나보세요
          </button>
          <button 
            className="btn-primary bg-opacity-80 hover:bg-opacity-100"
            onClick={() => scrollToSection('portfolio')}
          >
            우리가 만든 것들
          </button>
        </div>
        
        {/* Scroll Down Arrow */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce-arrow"
          onClick={() => scrollToSection('about')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
