import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const ProjectsSection = styled.section`
  padding: var(--spacing-3xl) 0;
  background: var(--background);
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
`

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: var(--spacing-3xl);
`

const SectionTitle = styled.h2`
  font-size: var(--font-size-4xl);
  font-weight: 700;
  margin-bottom: var(--spacing-md);
  color: var(--text-primary);
  
  span {
    background: linear-gradient(135deg, var(--primary), var(--accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`

const SectionSubtitle = styled.p`
  font-size: var(--font-size-lg);
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-3xl);
`

const ProjectCard = styled(motion.div)`
  background: var(--surface);
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-xl);
    border-color: var(--primary);
  }
`

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: var(--font-size-4xl);
  font-weight: 700;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%);
    transform: translateX(-100%);
    transition: transform 0.6s;
  }
  
  ${ProjectCard}:hover &::before {
    transform: translateX(100%);
  }
`

const ProjectContent = styled.div`
  padding: var(--spacing-xl);
`

const ProjectTitle = styled.h3`
  font-size: var(--font-size-xl);
  font-weight: 600;
  margin-bottom: var(--spacing-md);
  color: var(--text-primary);
`

const ProjectDescription = styled.p`
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: var(--spacing-lg);
`

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
`

const TechTag = styled.span`
  background: var(--primary);
  color: white;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-xs);
  font-weight: 500;
`

const ProjectLinks = styled.div`
  display: flex;
  gap: var(--spacing-md);
`

const ProjectLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  text-decoration: none;
  font-size: var(--font-size-sm);
  font-weight: 500;
  transition: all var(--transition-fast);
  
  &.primary {
    background: var(--primary);
    color: white;
    
    &:hover {
      background: var(--primary-dark);
      transform: translateY(-2px);
    }
  }
  
  &.secondary {
    background: var(--surface);
    color: var(--text-primary);
    border: 1px solid var(--border);
    
    &:hover {
      background: var(--primary);
      color: white;
      border-color: var(--primary);
    }
  }
`

const ViewAllButton = styled(motion.div)`
  text-align: center;
`

const ViewAllLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-lg) var(--spacing-2xl);
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: white;
  text-decoration: none;
  border-radius: var(--radius-xl);
  font-weight: 600;
  font-size: var(--font-size-lg);
  transition: all var(--transition-normal);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-lg);
  }
`

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
      image: "EC",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "TM",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL", "Redis"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations and interactive elements.",
      image: "PW",
      technologies: ["React", "Styled Components", "Framer Motion", "Vite"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "WD",
      technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      id: 5,
      title: "Social Media Clone",
      description: "A social media platform with features like posts, comments, likes, user profiles, and real-time notifications.",
      image: "SM",
      technologies: ["React", "Firebase", "Cloud Storage", "Real-time DB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      id: 6,
      title: "AI Chat Application",
      description: "An AI-powered chat application with natural language processing, conversation history, and intelligent responses.",
      image: "AI",
      technologies: ["React", "OpenAI API", "Node.js", "WebSocket"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    }
  ]

  return (
    <ProjectsSection id="projects" ref={ref}>
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>
            Featured <span>Projects</span>
          </SectionTitle>
          <SectionSubtitle>
            A showcase of my recent work and technical expertise
          </SectionSubtitle>
        </SectionHeader>

        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <ProjectImage>
                {project.image}
              </ProjectImage>
              
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                
                <ProjectTech>
                  {project.technologies.map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </ProjectTech>
                
                <ProjectLinks>
                  <ProjectLink
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </ProjectLink>
                  
                  <ProjectLink
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} />
                    Code
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>

        <ViewAllButton
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <ViewAllLink to="/projects">
            View All Projects
            <ArrowRight size={20} />
          </ViewAllLink>
        </ViewAllButton>
      </Container>
    </ProjectsSection>
  )
}

export default Projects
