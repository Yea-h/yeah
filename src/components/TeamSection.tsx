
import React, { useRef, useEffect } from 'react';

interface TeamMemberProps {
  image: string;
  name: string;
  position: string;
  description: string;
  index: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ image, name, position, description, index }) => {
  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 card-hover opacity-0 animate-fade-in-up text-center"
      style={{ animationDelay: `${0.2 + index * 0.2}s` }}
    >
      <div className="w-32 h-32 mx-auto mt-6 rounded-full overflow-hidden border-4 border-white shadow-md">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-skyblue font-medium mb-3">{position}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const TeamSection: React.FC = () => {
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

  // Sample team data
  const team = [
    {
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      name: "이수진",
      position: "예술 디렉터",
      description: "미술과 음악을 사랑하는 예술 교육자"
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      name: "김준호",
      position: "음악 코치",
      description: "클래식부터 현대음악까지 다양한 장르에 능통한 음악가"
    },
    {
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      name: "박민지",
      position: "창의력 트레이너",
      description: "아이들의 상상력을 현실로 이끌어내는 전문가"
    },
    {
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      name: "최태영",
      position: "교육 컨설턴트",
      description: "체계적인 예술 교육 시스템을 구축하는 전문가"
    }
  ];

  return (
    <section id="team" className="py-20 bg-purple-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="section-title opacity-0 animate-fade-in-up">함께하는 사람들</h2>
        <p className="section-subtitle opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          예술 아이들을 이끌어가는 열정적인 멤버들을 소개합니다.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animation">
          {team.map((member, index) => (
            <TeamMember 
              key={index}
              image={member.image}
              name={member.name}
              position={member.position}
              description={member.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
