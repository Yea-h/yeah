
import React, { useEffect, useRef } from 'react';

interface ValueCardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description, index }) => {
  return (
    <div 
      className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 card-hover opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${0.2 + index * 0.2}s` }}
    >
      <div className="text-3xl mb-4 text-skyblue">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-lightgray" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="section-title opacity-0 animate-fade-in-up">우리는 어떤 팀인가요?</h2>
        <p className="section-subtitle opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          예술을 사랑하고, 세상에 장난을 치는 아이들입니다.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 stagger-animation">
          <ValueCard 
            icon="✨" 
            title="창의성" 
            description="기존의 틀을 깨고 새로운 시각으로 세상을 바라봅니다." 
            index={0} 
          />
          <ValueCard 
            icon="💖" 
            title="진정성" 
            description="모든 작업과 관계에 진심을 담아 임합니다." 
            index={1} 
          />
          <ValueCard 
            icon="🚀" 
            title="도전정신" 
            description="불가능해 보이는 일에도 주저 없이 도전합니다." 
            index={2} 
          />
        </div>
        
        <div className="text-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <button 
            className="btn-primary"
            onClick={() => scrollToSection('team')}
          >
            About 더 알아보기
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
