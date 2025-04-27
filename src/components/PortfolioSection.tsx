
import React, { useRef, useEffect } from 'react';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, index }) => {
  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 card-hover opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${0.2 + index * 0.2}s` }}
    >
      <div className="aspect-video bg-gray-100 overflow-hidden">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const PortfolioSection: React.FC = () => {
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

  // Sample project data
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpbGRyZW4lMjBtdXNpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      title: "아이들 뮤지컬 공연",
      description: "예술적 감성을 키우는 아이들을 위한 창의적인 뮤지컬 공연"
    },
    {
      image: "https://images.unsplash.com/photo-1569049770815-0d5d0feb3fb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0JTIwY2xhc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      title: "예술 워크숍",
      description: "다양한 매체와 방법으로 예술적 표현을 경험하는 창의 워크숍"
    },
    {
      image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpbGRyZW4lMjBjb25jZXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      title: "음악 페스티벌",
      description: "어린이들이 직접 만들고 참여하는 신나는 음악 축제"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="section-title opacity-0 animate-fade-in-up">우리가 만든 것들</h2>
        <p className="section-subtitle opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          예술 아이들의 대표 프로젝트를 소개합니다.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 stagger-animation">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              index={index}
            />
          ))}
        </div>
        
        <div className="text-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <button className="btn-primary">
            더 많은 포트폴리오 보기
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
