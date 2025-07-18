import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const SkillsSection = styled.section`
  padding: var(--spacing-3xl) 0;
  background: var(--surface);
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-3xl);
`

const SkillCategory = styled(motion.div)`
  background: var(--background);
  padding: var(--spacing-xl);
  border-radius: var(--radius-xl);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
    border-color: var(--primary);
  }
`

const CategoryTitle = styled.h3`
  font-size: var(--font-size-xl);
  font-weight: 600;
  margin-bottom: var(--spacing-lg);
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  
  &::before {
    content: '';
    width: 4px;
    height: 24px;
    background: linear-gradient(135deg, var(--primary), var(--accent));
    border-radius: var(--radius-sm);
  }
`

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
`

const SkillItem = styled(motion.div)`
  background: var(--surface);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--text-primary);
  transition: all var(--transition-fast);
  cursor: pointer;
  
  &:hover {
    background: var(--primary);
    color: white;
    transform: scale(1.05);
    box-shadow: var(--shadow-md);
  }
`

const ProgressSection = styled(motion.div)`
  margin-top: var(--spacing-3xl);
`

const ProgressTitle = styled.h3`
  font-size: var(--font-size-2xl);
  font-weight: 600;
  margin-bottom: var(--spacing-xl);
  color: var(--text-primary);
  text-align: center;
`

const ProgressGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
`

const ProgressCard = styled(motion.div)`
  background: var(--background);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
`

const ProgressHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-md);
`

const ProgressName = styled.span`
  font-weight: 600;
  color: var(--text-primary);
`

const ProgressPercentage = styled.span`
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
`

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: var(--border);
  border-radius: var(--radius-sm);
  overflow: hidden;
`

const ProgressFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  border-radius: var(--radius-sm);
`

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript", "Tailwind CSS", "Styled Components"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Python", "Django", "REST APIs", "GraphQL", "JWT"]
    },
    {
      title: "Database",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "Prisma", "Mongoose"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "Vercel", "Figma", "Postman", "VS Code"]
    }
  ]

  const progressSkills = [
    { name: "React", percentage: 90 },
    { name: "Node.js", percentage: 85 },
    { name: "JavaScript", percentage: 95 },
    { name: "MongoDB", percentage: 80 },
    { name: "CSS/SCSS", percentage: 88 },
    { name: "TypeScript", percentage: 75 }
  ]

  return (
    <SkillsSection id="skills" ref={ref}>
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>
            My <span>Skills</span>
          </SectionTitle>
          <SectionSubtitle>
            Technologies and tools I use to bring ideas to life
          </SectionSubtitle>
        </SectionHeader>

        <SkillsGrid>
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <CategoryTitle>{category.title}</CategoryTitle>
              <SkillsList>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.05) }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsGrid>

        <ProgressSection
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <ProgressTitle>Proficiency Levels</ProgressTitle>
          <ProgressGrid>
            {progressSkills.map((skill, index) => (
              <ProgressCard
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                whileHover={{ y: -3 }}
              >
                <ProgressHeader>
                  <ProgressName>{skill.name}</ProgressName>
                  <ProgressPercentage>{skill.percentage}%</ProgressPercentage>
                </ProgressHeader>
                <ProgressBar>
                  <ProgressFill
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.percentage}%` } : {}}
                    transition={{ duration: 1, delay: 0.8 + (index * 0.1) }}
                  />
                </ProgressBar>
              </ProgressCard>
            ))}
          </ProgressGrid>
        </ProgressSection>
      </Container>
    </SkillsSection>
  )
}

export default Skills
