import React from 'react'
import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectDetail from './components/ProjectDetail'
import ThemeToggle from './components/ThemeToggle'

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow-x: hidden;
`

const BackgroundPattern = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  pointer-events: none;
  z-index: 0;
`

const MainContent = styled.main`
  position: relative;
  z-index: 1;
`

const HomePage = styled.div`
  background: var(--background);
  border-radius: var(--radius-2xl) var(--radius-2xl) 0 0;
  /* margin-top: 100vh; */
  margin-top: 0;
  position: relative;
  z-index: 2;
`

function App() {
  return (
    <AppContainer>
      <BackgroundPattern />
      <Navbar />
      <MainContent>
        <Hero />
        <HomePage>
          <Routes>
            <Route path="/" element={
              <>
                <About />
                <Skills />
                <Projects />
                <Contact />
              </>
            } />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
          <Footer />
        </HomePage>
      </MainContent>
      <ThemeToggle />
    </AppContainer>
  )
}

export default App
