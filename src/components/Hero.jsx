import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  /* New, more unique dark animated gradient background */
  background: linear-gradient(120deg, #18181b 0%, #232336 60%, #2e1065 100%);
  /* Optional: add a subtle animated overlay with ::before or a separate element for more depth */
`

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
`

const FloatingElement = styled(motion.div)`
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  backdrop-filter: blur(10px);
`

const HeroContent = styled.div`
  text-align: center;
  color: white;
  z-index: 10;
  max-width: 800px;
  padding: 0 var(--spacing-lg);
`

const Greeting = styled(motion.div)`
  font-size: var(--font-size-lg);
  font-weight: 500;
  margin-bottom: var(--spacing-md);
  opacity: 0.9;
`

const Name = styled(motion.h1)`
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 900;
  margin-bottom: 1.2rem;
  line-height: 1.1;
  letter-spacing: -2px;
  background: linear-gradient(90deg, #a21caf 0%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const Tagline = styled(motion.p)`
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: var(--spacing-2xl);
  opacity: 0.92;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  color: #a5b4fc;
`

const CTAButton = styled(motion.button)`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: var(--spacing-lg) var(--spacing-2xl);
  border-radius: var(--radius-xl);
  font-size: var(--font-size-lg);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-normal);
  margin-bottom: var(--spacing-3xl);
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
`

const SocialLinks = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-2xl);
`

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  color: white;
  text-decoration: none;
  transition: all var(--transition-normal);
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-3px) scale(1.1);
  }
`

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: var(--spacing-2xl);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
  color: white;
  opacity: 0.7;
  cursor: pointer;
  
  span {
    font-size: var(--font-size-sm);
    font-weight: 500;
  }
`

const Hero = () => {
  const scrollToContent = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <HeroContainer id="home">
      <FloatingElements>
        <FloatingElement
          style={{ width: '100px', height: '100px', top: '20%', left: '10%' }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <FloatingElement
          style={{ width: '60px', height: '60px', top: '60%', right: '15%' }}
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <FloatingElement
          style={{ width: '80px', height: '80px', bottom: '30%', left: '20%' }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </FloatingElements>

      <HeroContent>
        <Greeting
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hello, I'm
        </Greeting>
        
        <Name
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span>Abhishek Gujar</span>
        </Name>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ fontSize: '1.5rem', fontWeight: 700, color: '#c4b5fd', marginBottom: '1.1rem', letterSpacing: '-1px' }}
        >
          Web Developer & UI/UX Specialist
        </motion.div>
        <Tagline
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Full Stack Developer | Crafting Unique Digital Experiences
        </Tagline>
        
        <CTAButton
          onClick={scrollToContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work
        </CTAButton>
        
        <SocialLinks
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <SocialLink
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github size={24} />
          </SocialLink>
          <SocialLink
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin size={24} />
          </SocialLink>
          <SocialLink
            href="mailto:your.email@example.com"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail size={24} />
          </SocialLink>
        </SocialLinks>
      </HeroContent>
      
      <ScrollIndicator
        onClick={scrollToContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        whileHover={{ y: 5 }}
      >
        <span>Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </ScrollIndicator>
    </HeroContainer>
  )
}

export default Hero



