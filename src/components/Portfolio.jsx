
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, Download, Sun, Moon, Menu, X, ExternalLink, Code, Palette, Smartphone, Database } from 'lucide-react';
import node_react from '../logo/nodereact-rm.png'
import py_react from '../logo/reactpy-rm.png'
import spring from '../logo/spring-boot.png'
import js from '../logo/js_rem.png'
import Oracle from '../logo/oracle.png'
import MySQL from '../logo/mysql.png'
import cv from '../cv/CV_data_engener.pdf' 

import pdp from "../images/photo.jpg"

function Portfolio() {
    const [darkMode, setDarkMode] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
  
    useEffect(() => {
      const handleScroll = () => {
        const sections = ['home', 'about', 'services', 'projects', 'contact'];
        const scrollPosition = window.scrollY + 100;
  
        for (let section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetHeight = element.offsetHeight;
            
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
              break;
            }
          }
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMenuOpen(false);
    };
  
    const projects = [
      {
        title: "Gestion du personnel Contractuel",
        description: "Une applicatin qui permet de reduire le rejet du demande d'un personnel",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
        tech: ["React", "Nodejs", "MongoDB"],
        url: "https://github.com/razakarivonyrojo98/CRUD-MERN."
      },
      {
        title: "Gestion du client",
        description: "Application pour faire un création d'un demande du client",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
        tech: ["React", "Python", "NoSQL"],
        url: "https://github.com/razakarivonyrojo98/crud-django_react"
        
      },
      {
        title: "Migration et analyse des données",
        description: "Examiner, traiter et interpréter les données pour en tirer des informations utiles, appuyer la prise de décision",
        image: "https://www.validity.com/wp-content/uploads/2022/04/data-migration.svg",
        tech: ["Oracle"]
      },
      {
        title: "Portfolio Website",
        description: "Site web portfolio responsive avec animations",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
        tech: ["React", "Tailwind"],
        url : "https://mon-portfolio-tau-tan.vercel.app/"
      }
    ];
  
    const services = [
      {
        icon: <Code className="w-8 h-8" />,
        title: "Développement Web",
        description: "Création d'applications web modernes et performantes"
      },
      {
        icon: <Palette className="w-8 h-8" />,
        title: "UI/UX Design",
        description: "Design d'interfaces utilisateur intuitives et attrayantes"
      },
      {
        icon: <Database className="w-8 h-8" />,
        title: "Data engineer",
        description: "Migration et analyse des donné sur Oracle"
      }
    ];
  
    const testimonials = [
      {
        name: "Marie Dubois",
        role: "CEO, TechStart",
        comment: "Excellent travail ! Le site web dépasse nos attentes.",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face"
      },
      {
        name: "Pierre Martin",
        role: "Directeur Marketing",
        comment: "Un développeur très professionnel et créatif.",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
      }
    ];
  
    const themeClasses = darkMode 
       'bg-gray-900 text-white w-full min-h-screen' 
     {/* : 'bg-white  dark:text-gray-900 w-full min-h-screen'*/};
  
    const cardClasses = darkMode 
      ? 'bg-gray-800 border-gray-700 w-full ' 
      : 'bg-white  dark:border-gray-200 w-full';
  

  return (
    <>
       <div className={`w-full min-h-screen transition-colors duration-300 ${themeClasses}`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-opacity-90 border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-emerald-400">
              PORTFOLIO
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About Us', 'Services', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', ''))}
                  className={`hover:text-emerald-400 transition-colors ${
                    activeSection === item.toLowerCase().replace(' ', '') 
                      ? 'text-emerald-400' 
                      : 'text-gray-800'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <a >{darkMode ? <Sun className="w-5 h-5"  /> : <Moon className="w-5 h-5" />}</a>
                
              </button>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 bg-opacity-95 backdrop-blur-md">
            <div className="px-4 py-2 space-y-2">
              {['Home', 'About Us', 'Services', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', ''))}
                  className="block w-full text-left py-2 hover:text-emerald-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 min-h-screen flex items-center w-ful">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-emerald-400 font-medium">Salut! Je suis</div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                DATA ENGINEER &
                  <br />
                 <br /> 
                  DÉVELOPPEUR
                <br />
                <span className="text-emerald-400">REACT - PYTHON</span>
                <br />
                  JUNIOR
                  <br/>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Je suis un développeur Front-End professionnel avec plus de 4 ans d'expérience. 
                Expert dans la conversion PSD vers HTML, Bootstrap, Figma vers HTML, et bien plus encore.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-emerald-400 text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-emerald-500 transition-colors">
                  Embauchez-moi
                  </button>
                  
                <button className="border border-gray-300 dark:border-gray-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center gap-2">
                  <Download className="w-4 h-4 bg-gray-600" />
                  <a href={cv} download className="text-sm">Télécharger CV</a> 
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-80 h-80 mx-auto">
                <img
                  src={pdp}
                  alt="Profil"
                  className="w-full h-full object-cover rounded-full border-4 border-emerald-400"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                <div className={`${cardClasses} border rounded-lg p-4 shadow-lg`}>
                  <div className="text-center">
                    <div className="font-bold">RAZAKARIVONY Rojo </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Développeur React</div>
                    <div className="text-sm text-emerald-400 mt-2">razakarojo1998@gmail.com</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">034 12 998 80</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="aboutus" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Plus Spécialisé
                <br />
                <span className="text-emerald-400">À PROPOS DE NOUS</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Nous sommes une équipe de développeurs passionnés, spécialisés dans la création 
                d'expériences web exceptionnelles. Notre expertise couvre un large éventail de 
                technologies modernes.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-400 mb-2">1</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Années d'Expérience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-400 mb-2">10+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projets Terminés</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src={node_react}
                  alt="Projet 1"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <img
                  src={py_react}
                  alt="Projet 2"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
                <div className="space-y-4 mt-8">
                  <div className="flex space-x-4 mt-8">
                    <img
                      src={js}
                      alt="Projet 1"
                      className="w-1/2 h-30 object-cover rounded-lg"
                    />
                    <img
                      src={Oracle}
                      alt="Projet 2"
                      className="w-1/2 h-40 object-cover rounded-lg"
                    />
                  </div>  
                  <div className="flex space-x-4 mt-8">
                    <img
                      src={spring}
                      alt="Projet 1"
                      className="w-1/2 h-30 object-cover rounded-lg"
                    />
                    <img
                      src={MySQL}
                      alt="Projet 2"
                      className="w-1/2 h-40 object-cover rounded-lg"
                    />
                  </div> 
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Spécialisation
              <br />
              <span className="text-emerald-400">SERVICES OFFERTS</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`${cardClasses} border rounded-lg p-8 text-center hover:shadow-lg transition-shadow`}>
                <div className="text-emerald-400 mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-emerald-400 mb-2">Showcase View</div>
            <h2 className="text-4xl font-bold">
              <span className="text-emerald-400">PROJETS</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <div key={index} className={`${cardClasses} border rounded-lg overflow-hidden hover:shadow-lg transition-shadow group`}>
                 {project.url ? (
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <div className="relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                          <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-emerald-400 text-gray-900 px-2 py-1 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-emerald-400 text-gray-900 rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4">Visitez Notre Blog</h3>
                <div className="text-3xl font-bold">BLOG</div>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-4xl font-bold">
                  Travaillons ensemble
                  <br />
                  <span className="text-emerald-400">CONTACT</span>
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-emerald-400" />
                    <span>razakarojo1998@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-5 h-5 text-emerald-400" />
                    <span>034 12 998 80</span>
                  </div>
                </div>
                
                <div className="flex gap-4">
                    <a href='https://github.com/razakarivonyrojo98'>
                    <Github className="w-6 h-6 text-gray-600 dark:text-gray-400 hover:text-emerald-400 cursor-pointer transition-colors" />
                    </a>
                   
                  <Linkedin className="w-6 h-6 text-gray-600 dark:text-gray-400 hover:text-emerald-400 cursor-pointer transition-colors" />
                  <Mail className="w-6 h-6 text-gray-600 dark:text-gray-400 hover:text-emerald-400 cursor-pointer transition-colors" />
                </div>
              </div>
            </div>
            
            <div>
              <div className={`${cardClasses} border rounded-lg p-8 mb-8`}>
                <h3 className="text-xl font-bold mb-4">Que disent nos clients ?</h3>
                <div className="text-2xl font-bold text-emerald-400 mb-4">TÉMOIGNAGES</div>
                
                <div className="space-y-6">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-bold">{testimonial.name}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                        <div className="text-sm mt-2">{testimonial.comment}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold text-emerald-400 mb-4">Mon portfolio</div>
          <div className="text-gray-600 dark:text-gray-400">
            Copyright pugu ©2023. Tous droits réservés
          </div>
        </div>
      </footer>
    </div>
    </>
  )
}

export default Portfolio
