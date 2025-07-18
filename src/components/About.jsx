import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Palette, Zap, Users } from 'lucide-react'

const AboutSection = styled.section`
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

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }
`

const AboutText = styled(motion.div)`
  h3 {
    font-size: var(--font-size-2xl);
    font-weight: 600;
    margin-bottom: var(--spacing-lg);
    color: var(--text-primary);
  }
  
  p {
    font-size: var(--font-size-base);
    line-height: 1.8;
    color: var(--text-secondary);
    margin-bottom: var(--spacing-lg);
  }
`

const ProfileImage = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ImageContainer = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  padding: 4px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    padding: 4px;
    background: linear-gradient(135deg, var(--primary), var(--accent));
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    animation: rotate 10s linear infinite;
  }
  
  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`

const Image = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: var(--surface);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-6xl);
  color: var(--primary);
  font-weight: 700;
`

const FeaturesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-xl);
  margin-top: var(--spacing-3xl);
`

const FeatureCard = styled(motion.div)`
  background: var(--surface);
  padding: var(--spacing-xl);
  border-radius: var(--radius-xl);
  border: 1px solid var(--border);
  text-align: center;
  transition: all var(--transition-normal);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
    border-color: var(--primary);
  }
`

const FeatureIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-lg);
  color: white;
`

const FeatureTitle = styled.h4`
  font-size: var(--font-size-lg);
  font-weight: 600;
  margin-bottom: var(--spacing-md);
  color: var(--text-primary);
`

const FeatureDescription = styled.p`
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
  line-height: 1.6;
`

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const features = [
    {
      icon: <Code size={24} />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code that follows best practices."
    },
    {
      icon: <Palette size={24} />,
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive user interfaces with exceptional user experiences."
    },
    {
      icon: <Zap size={24} />,
      title: "Performance",
      description: "Optimizing applications for speed, efficiency, and smooth user interactions."
    },
    {
      icon: <Users size={24} />,
      title: "Collaboration",
      description: "Working effectively in teams, communicating clearly, and delivering on time."
    }
  ]

  return (
    <AboutSection id="about" ref={ref}>
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>
            About <span>Me</span>
          </SectionTitle>
          <SectionSubtitle>
            Passionate Full Stack Developer with expertise in modern web technologies
          </SectionSubtitle>
        </SectionHeader>

        <AboutContent>
          <AboutText
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3>Turning Ideas Into Reality</h3>
            <p>
              I'm a passionate Full Stack Developer with a strong foundation in modern web technologies. 
              With expertise in HTML, CSS, JavaScript, React, Node.js, and MongoDB, I specialize in 
              creating unique digital experiences that combine beautiful design with powerful functionality.
            </p>
            <p>
              My journey in web development started with a curiosity about how things work on the internet. 
              Today, I craft applications that not only meet technical requirements but also provide 
              exceptional user experiences. I believe in writing clean, maintainable code and staying 
              up-to-date with the latest industry trends and best practices.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community. I'm always excited to take on 
              new challenges and collaborate on innovative projects.
            </p>
          </AboutText>

          <ProfileImage
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ImageContainer>
              <Image>YN</Image>
            </ImageContainer>
          </ProfileImage>
        </AboutContent>

        <FeaturesGrid
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            >
              <FeatureIcon>
                {feature.icon}
              </FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </Container>
    </AboutSection>
  )
}

export default About 