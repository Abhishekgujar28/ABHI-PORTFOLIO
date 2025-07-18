import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Code } from 'lucide-react'

const ProjectDetailContainer = styled.div`
  min-height: 100vh;
  background: var(--background);
  padding: var(--spacing-3xl) 0;
`

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
`

const BackButton = styled(motion.div)`
  margin-bottom: var(--spacing-2xl);
`

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  transition: color var(--transition-fast);
  
  &:hover {
    color: var(--primary);
  }
`

const ProjectHeader = styled(motion.div)`
  margin-bottom: var(--spacing-3xl);
`

const ProjectTitle = styled.h1`
  font-size: var(--font-size-5xl);
  font-weight: 700;
  margin-bottom: var(--spacing-lg);
  color: var(--text-primary);
  
  span {
    background: linear-gradient(135deg, var(--primary), var(--accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`

const ProjectMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
`

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
`

const ProjectActions = styled.div`
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-2xl);
`

const ActionButton = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-lg);
  text-decoration: none;
  font-weight: 600;
  transition: all var(--transition-normal);
  
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

const ProjectImage = styled(motion.div)`
  width: 100%;
  height: 400px;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  border-radius: var(--radius-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: var(--font-size-6xl);
  font-weight: 700;
  margin-bottom: var(--spacing-3xl);
  position: relative;
  overflow: hidden;
  
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
  
  &:hover::before {
    transform: translateX(100%);
  }
`

const ProjectContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--spacing-3xl);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }
`

const MainContent = styled.div`
  h2 {
    font-size: var(--font-size-2xl);
    font-weight: 600;
    margin-bottom: var(--spacing-lg);
    color: var(--text-primary);
  }
  
  p {
    font-size: var(--font-size-base);
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: var(--spacing-lg);
  }
  
  ul {
    margin-bottom: var(--spacing-lg);
    padding-left: var(--spacing-lg);
    
    li {
      color: var(--text-secondary);
      margin-bottom: var(--spacing-sm);
      line-height: 1.6;
    }
  }
`

const Sidebar = styled.div`
  h3 {
    font-size: var(--font-size-lg);
    font-weight: 600;
    margin-bottom: var(--spacing-lg);
    color: var(--text-primary);
  }
`

const TechStack = styled.div`
  background: var(--surface);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  margin-bottom: var(--spacing-xl);
`

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
`

const TechTag = styled.span`
  background: var(--primary);
  color: white;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-xs);
  font-weight: 500;
`

const ProjectInfo = styled.div`
  background: var(--surface);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
`

const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-sm) 0;
  border-bottom: 1px solid var(--border);
  
  &:last-child {
    border-bottom: none;
  }
  
  span:first-child {
    font-weight: 600;
    color: var(--text-primary);
  }
  
  span:last-child {
    color: var(--text-secondary);
  }
`

const ProjectDetail = () => {
  const { id } = useParams()

  // Mock project data - in a real app, you'd fetch this based on the ID
  const project = {
    id: 1,
    title: "E-Commerce Platform",
    description: "A comprehensive e-commerce platform built with modern web technologies. This project demonstrates full-stack development skills with a focus on user experience and performance.",
    longDescription: `
      This e-commerce platform was built from the ground up to provide a seamless shopping experience. 
      The project involved designing and implementing a complete online store with features including 
      user authentication, product catalog, shopping cart functionality, secure payment processing, 
      and an admin dashboard for inventory management.
      
      The frontend was built using React with TypeScript for type safety, while the backend utilized 
      Node.js with Express for the API. MongoDB was chosen as the database for its flexibility with 
      product data, and Stripe was integrated for secure payment processing.
      
      Key challenges included implementing real-time inventory updates, optimizing for mobile devices, 
      and ensuring fast page load times. The solution involved implementing efficient caching strategies, 
      lazy loading for images, and optimizing database queries.
    `,
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Stripe", "JWT", "Redux"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    date: "2024",
    duration: "3 months",
    team: "Solo Project",
    role: "Full Stack Developer",
    challenges: [
      "Implementing real-time inventory management",
      "Optimizing for mobile performance",
      "Integrating secure payment processing",
      "Managing complex state across components"
    ],
    solutions: [
      "Used WebSocket connections for real-time updates",
      "Implemented lazy loading and image optimization",
      "Integrated Stripe with proper error handling",
      "Utilized Redux for centralized state management"
    ],
    results: [
      "40% improvement in page load times",
      "99.9% uptime achieved",
      "Successfully processed 1000+ transactions",
      "Mobile conversion rate increased by 25%"
    ]
  }

  return (
    <ProjectDetailContainer>
      <Container>
        <BackButton
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <BackLink to="/">
            <ArrowLeft size={20} />
            Back to Projects
          </BackLink>
        </BackButton>

        <ProjectHeader
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ProjectTitle>
            {project.title} <span>Project</span>
          </ProjectTitle>
          
          <ProjectMeta>
            <MetaItem>
              <Calendar size={16} />
              {project.date}
            </MetaItem>
            <MetaItem>
              <Users size={16} />
              {project.team}
            </MetaItem>
            <MetaItem>
              <Code size={16} />
              {project.role}
            </MetaItem>
          </ProjectMeta>
          
          <ProjectActions>
            <ActionButton
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={20} />
              Live Demo
            </ActionButton>
            <ActionButton
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
              View Code
            </ActionButton>
          </ProjectActions>
        </ProjectHeader>

        <ProjectImage
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {project.title.split(' ').map(word => word[0]).join('')}
        </ProjectImage>

        <ProjectContent>
          <MainContent
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2>Project Overview</h2>
            <p>{project.longDescription}</p>
            
            <h2>Challenges & Solutions</h2>
            <h3>Challenges:</h3>
            <ul>
              {project.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
            
            <h3>Solutions:</h3>
            <ul>
              {project.solutions.map((solution, index) => (
                <li key={index}>{solution}</li>
              ))}
            </ul>
            
            <h2>Results & Impact</h2>
            <ul>
              {project.results.map((result, index) => (
                <li key={index}>{result}</li>
              ))}
            </ul>
          </MainContent>

          <Sidebar
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <TechStack>
              <h3>Tech Stack</h3>
              <TechList>
                {project.technologies.map((tech) => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </TechList>
            </TechStack>

            <ProjectInfo>
              <h3>Project Details</h3>
              <InfoItem>
                <span>Duration:</span>
                <span>{project.duration}</span>
              </InfoItem>
              <InfoItem>
                <span>Team Size:</span>
                <span>{project.team}</span>
              </InfoItem>
              <InfoItem>
                <span>Role:</span>
                <span>{project.role}</span>
              </InfoItem>
              <InfoItem>
                <span>Year:</span>
                <span>{project.date}</span>
              </InfoItem>
            </ProjectInfo>
          </Sidebar>
        </ProjectContent>
      </Container>
    </ProjectDetailContainer>
  )
}

export default ProjectDetail 