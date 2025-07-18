import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react'

const FooterContainer = styled.footer`
  background: var(--surface);
  color: var(--text-primary);
  padding: var(--spacing-3xl) 0 var(--spacing-xl);
  position: relative;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
`

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: var(--spacing-2xl);
  margin-bottom: var(--spacing-2xl);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
    text-align: center;
  }
`

const FooterSection = styled.div`
  h3 {
    font-size: var(--font-size-lg);
    font-weight: 600;
    margin-bottom: var(--spacing-lg);
    color: var(--text-primary);
  }
  
  p {
    font-size: var(--font-size-sm);
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: var(--spacing-lg);
  }
`

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const FooterLink = styled(motion.li)`
  margin-bottom: var(--spacing-sm);
  
  a {
    color: var(--text-secondary);
    text-decoration: none;
    font-size: var(--font-size-sm);
    transition: color var(--transition-fast);
    
    &:hover {
      color: var(--text-primary);
    }
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: var(--spacing-md);
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: white;
  text-decoration: none;
  transition: all var(--transition-normal);
  
  &:hover {
    background: var(--primary);
    transform: translateY(-3px);
  }
`

const FooterBottom = styled.div`
  border-top: 1px solid #374151;
  padding-top: var(--spacing-xl);
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--spacing-md);
    text-align: center;
  }
`

const Copyright = styled.p`
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
`

const ScrollToTop = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: var(--primary);
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  transition: all var(--transition-normal);
  
  &:hover {
    background: var(--primary-dark);
    transform: translateY(-3px);
  }
`

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    quickLinks: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Skills', href: '#skills' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' }
    ],
    services: [
      { name: 'Web Development', href: '#' },
      { name: 'UI/UX Design', href: '#' },
      { name: 'Mobile Apps', href: '#' },
      { name: 'Consulting', href: '#' }
    ],
    resources: [
      { name: 'Blog', href: '#' },
      { name: 'Portfolio', href: '#' },
      { name: 'Resume', href: '#' },
      { name: 'GitHub', href: 'https://github.com' }
    ]
  }

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com' },
    { icon: <Twitter size={20} />, href: 'https://twitter.com' },
    { icon: <Mail size={20} />, href: 'mailto:your.email@example.com' }
  ]

  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterSection>
            <h3>Your Name</h3>
            <p>
              Full Stack Developer passionate about creating unique digital experiences. 
              Let's build something amazing together.
            </p>
            <SocialLinks>
              {socialLinks.map((social, index) => (
                <SocialLink
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </SocialLink>
              ))}
            </SocialLinks>
          </FooterSection>

          <FooterSection>
            <h3>Quick Links</h3>
            <FooterLinks>
              {footerLinks.quickLinks.map((link, index) => (
                <FooterLink
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <a href={link.href}>{link.name}</a>
                </FooterLink>
              ))}
            </FooterLinks>
          </FooterSection>

          <FooterSection>
            <h3>Services</h3>
            <FooterLinks>
              {footerLinks.services.map((link, index) => (
                <FooterLink
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: (index + 5) * 0.1 }}
                >
                  <a href={link.href}>{link.name}</a>
                </FooterLink>
              ))}
            </FooterLinks>
          </FooterSection>

          <FooterSection>
            <h3>Resources</h3>
            <FooterLinks>
              {footerLinks.resources.map((link, index) => (
                <FooterLink
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: (index + 9) * 0.1 }}
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.name}
                  </a>
                </FooterLink>
              ))}
            </FooterLinks>
          </FooterSection>
        </FooterContent>

        <FooterBottom>
          <Copyright>
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </Copyright>
          <ScrollToTop
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={20} />
          </ScrollToTop>
        </FooterBottom>
      </Container>
    </FooterContainer>
  )
}

export default Footer 