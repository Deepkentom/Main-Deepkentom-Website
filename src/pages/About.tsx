import { useState, useEffect, useRef } from "react";
import { Users, Target, ArrowRight, Globe, Heart, Eye, Code, Rocket, Mail, Linkedin, Github, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroAbout from "@/assets/hero-about.jpg";
import teamImage from "@/assets/team-premium.jpg";
import lenah from "@/assets/team/Lenah1.jpg";
import amosImg from "@/assets/team/clinton.png";
import nipher from "@/assets/team/girl.png";
import ronald from "@/assets/team/ronald.png";
import david from "@/assets/team/david.jpeg";


const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typingIndex, setTypingIndex] = useState(0);
  const sectionRefs = useRef([]);
  const typingTexts = [
    "Digital Experiences",
    "Innovative Solutions",
    "Future Technology"
  ];

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    setIsVisible(true);
    
    // Typing animation
    const typingInterval = setInterval(() => {
      setTypingIndex((prev) => (prev + 1) % typingTexts.length);
    }, 3000);
    
    // Intersection Observer for scroll animations
    const observers = [];
    
    sectionRefs.current.forEach((ref, index) => {
      if (!ref) return;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        },
        { threshold: 0.1 }
      );
      
      observer.observe(ref);
      observers.push(observer);
    });
    
    return () => {
      clearInterval(typingInterval);
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  const teamMembers = [
  {
    name: "Lenah Barongo",
    role: "Co-founder",
    bio: "Dedicated to fostering innovation and driving the company's mission forward with strategic insights.",
    image: lenah,
    social: {
      linkedin: "#",
      github: "#",
      email: "lenahbarong@gmail.com"
    }
  },
    {
    name: "David Onyango",
    role: "Software Developer & co-founder",
    bio: "Passionate about building scalable web applications and creating seamless user experiences.",
    image: david,
    social: {
      linkedin: "#",
      github: "#",
      email: "#"
    }
  },
  {
    name: "Amos Clinton",
    role: "Lead Developer",
    bio: "Visionary leader with 3+ years of experience in software architecture and team management.",
    image: amosImg,
    social: {
      linkedin: "https://www.linkedin.com/in/amos-clinton-b65158222/",
      github: "https://github.com/Wanyangu1",
      email: "amosclinton196@gmail.com"
    }
  },
  {
  name: "Nipher Akinyi",
  role: "Backend Engineer",
  bio: "Specializes in building robust server-side systems, optimizing databases, and ensuring scalable application.",
  image: nipher,
  social: {
    linkedin: "#",
    dribbble: "#",
    email: "nipherakinyi@gmail.com"
  }
},
  {
    name: "Dr.Ronald Tombe",
    role: "Advisor",
    bio: "Provides strategic guidance and mentorship, leveraging extensive experience in technology and business development.",
    image: ronald,
    social: {
      linkedin: "#",
      github: "#",
      email: "ronaldtombe@gmail.com"
    }
  },
];

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-start overflow-hidden pt-6">
        <div 
          className="absolute inset-0 bg-cover bg-fixed bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroAbout})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/70 to-cyan-500/20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-left">
          <div className="max-w-4xl space-y-10">
            <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium">
                <Heart className="w-4 h-4 mr-2 animate-pulse" />
                Our Story & Vision
              </span>
            </div>
            
            <h1 className={`text-5xl md:text-6xl font-bold leading-tight transition-all duration-700 delay-100 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                Crafting Tomorrow's
              </span>
              <br />
              <div className="h-20 md:h-24 overflow-hidden">
                <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent typing-animation">
                  {typingTexts[typingIndex]}
                </span>
              </div>
            </h1>            
            <p
              className={`text-lg text-white/90 max-w-3xl leading-relaxed transition-all duration-700 delay-200 ease-out md:hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Technology built to empower humanity.
            </p>

            <p
              className={`hidden md:block text-xl text-white/90 max-w-3xl leading-relaxed transition-all duration-700 delay-200 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Founded on the belief that technology should empower humanity, we create innovative solutions that make a real difference.
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-start items-center transition-all duration-700 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white px-6 py-3 text-base hover:shadow-2xl hover:shadow-cyan-400/30 transition-all duration-300 group">
                <span>Join Our Team</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button size="lg" variant="outline" className="px-6 py-3 text-base bg-blue-500 to-cyan-400 border-white/30 hover:bg-white/10 text-white group">
                <Globe className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span>Global Impact</span>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-white/80">
            <span className="text-sm mb-2">Scroll down</span>
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-gradient-to-r from-blue-600 to-cyan-500 text-white" ref={addToRefs}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Code, number: "50K+", label: "Lines of Code", color: "text-cyan-200" },
              { icon: Users, number: "98%", label: "Client Satisfaction", color: "text-cyan-200" },
              { icon: Rocket, number: "5+", label: "Projects Completed", color: "text-cyan-200" },
              { icon: Globe, number: "2+", label: "Countries Served", color: "text-cyan-200" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-left group transition-all duration-500 ease-out opacity-0 translate-y-8 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex p-3 rounded-xl bg-white/10 backdrop-blur-sm mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color}`}>
                  {stat.number}
                </div>
                <div className="text-md text-white/80 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white relative" ref={addToRefs}>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="transition-all duration-500 ease-out opacity-0 -translate-x-8 animate-slide-in-left">
              <img 
                src={teamImage} 
                alt="Our innovative workspace and team" 
                className="rounded-2xl shadow-xl hover:shadow-cyan-500/20 transition-all duration-400"
              />
            </div>
            <div className="space-y-12">
              <div className="transition-all duration-500 ease-out opacity-0 translate-x-8 animate-slide-in-right">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg mr-3">
                    <Target className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To revolutionize businesses through innovative software solutions that drive exponential growth, 
                  operational efficiency, and sustainable competitive advantage.
                </p>
              </div>
              
              <div className="transition-all duration-500 ease-out opacity-0 translate-x-8 animate-slide-in-right">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-cyan-100 rounded-lg mr-3">
                    <Eye className="w-8 h-8 text-cyan-600" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To become the global leader in transformative software solutions, empowering every organization 
                  to harness cutting-edge technology for extraordinary success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50 relative overflow-hidden" ref={addToRefs}>
        <div className="absolute top-12 right-12 w-48 h-48 bg-gradient-to-br from-blue-200/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-12 left-12 w-60 h-60 bg-gradient-to-br from-cyan-200/30 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="text-left mb-12 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 transition-all duration-500 ease-out opacity-0 translate-y-8 animate-slide-up">
              Our <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Dream Team</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed transition-all duration-500 ease-out opacity-0 translate-y-8 animate-slide-up" style={{animationDelay: '0.1s'}}>
              Our diverse team combines decades of experience across multiple industries and technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-400 group overflow-hidden relative transition-all duration-500 ease-out opacity-0 translate-y-8 animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-5 transition-opacity duration-400"></div>
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="relative mb-4">
                    <div className="w-32 h-32 rounded-full overflow-hidden shadow-md border-4 border-white group-hover:border-cyan-100 transition-all duration-400">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {index === 0 || index === 1
  ? 'Lead'
  : index === teamMembers.length - 1
    ? 'Advisor'
    : 'Developer'}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-cyan-600 font-medium text-sm">{member.role}</p>
                </div>
                
                <p className="text-gray-600 mb-6 text-sm leading-relaxed text-center">
                  {member.bio}
                </p>
                
                <div className="flex justify-center space-x-3">
                  <a href={member.social.linkedin} className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href={member.social.email} className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-cyan-500 hover:text-white transition-all duration-300">
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white relative overflow-hidden" ref={addToRefs}>
        <div className="container mx-auto px-6 relative">
          <div className="text-left mb-12 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 transition-all duration-500 ease-out opacity-0 -translate-x-8 animate-slide-in-left">
              Our <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Core Values</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed transition-all duration-500 ease-out opacity-0 -translate-x-8 animate-slide-in-left" style={{animationDelay: '0.1s'}}>
              These fundamental principles guide every decision we make and define how we serve our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: <Target className="w-6 h-6 text-blue-600" />,
                title: "Innovation",
                description: "We embrace cutting-edge technologies and creative solutions to solve complex challenges.",
                color: "blue"
              },
              {
                icon: <Heart className="w-6 h-6 text-blue-600" />,
                title: "Quality",
                description: "Excellence is not negotiable. We deliver robust, scalable, and maintainable software.",
                color: "cyan"
              },
              {
                icon: <Users className="w-6 h-6 text-blue-600" />,
                title: "Collaboration",
                description: "We work closely with our clients as true partners in their success journey.",
                color: "blue"
              }
            ].map((value, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-400 group overflow-hidden relative border border-gray-100 transition-all duration-500 ease-out opacity-0 translate-y-8 animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-${value.color}-600 to-${value.color === 'blue' ? 'cyan-500' : 'blue-500'} opacity-0 group-hover:opacity-5 transition-opacity duration-400`}></div>
                <div className="mb-6">
                  <div className="p-4 bg-blue-100 rounded-xl group-hover:scale-110 group-hover:bg-blue-200 transition-all duration-400 inline-flex">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-400">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-md leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500 text-white" ref={addToRefs}>
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto transition-all duration-500 ease-out opacity-0 translate-y-8 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Vision?</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Let's collaborate to build something extraordinary that drives your business forward.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 text-base font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group">
              <span>Start a Project</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes typing {
          0% { opacity: 0; transform: translateY(10px); }
          10% { opacity: 1; transform: translateY(0); }
          90% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-10px); }
        }
        
        .animate-slide-up {
          animation: slideUp 0.5s ease-out forwards;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.5s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.5s ease-out forwards;
        }
        
        .typing-animation {
          animation: typing 3s infinite;
          display: inline-block;
        }
        
        .animate-visible {
          opacity: 1;
          transform: translateY(0) translateX(0);
        }
      `}</style>
    </div>
  );
};

export default About;