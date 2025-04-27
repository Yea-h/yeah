
import React, { useRef, useEffect } from 'react';

const ContactSection: React.FC = () => {
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

  return (
    <section id="contact" className="py-20 bg-coral text-white" ref={sectionRef}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in-up">함께 예술을 꿈꾸고 싶나요?</h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          예술 아이들은 언제나 당신과 함께할 준비가 되어 있습니다.
        </p>
        
        <div className="mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <a 
            href="mailto:contact@artchildren.kr" 
            className="inline-block btn-primary bg-white text-coral hover:bg-gray-100"
          >
            문의하기
          </a>
        </div>
        
        <div className="text-sm opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <p>이메일: contact@artchildren.kr</p>
          <p className="mt-1">오픈채팅: @예술아이들</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
