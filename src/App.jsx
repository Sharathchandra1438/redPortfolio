import styles from './App.module.css'
import About from './components/About'
import ContactMe from './components/ContactMe'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import TechProfiles from './components/TechProfiles'
import Experience from './components/Experience'

function App() {
  

  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero />
      <About/>
      <Experience />
      <Skills />
      <Projects />
      <TechProfiles />
      <ContactMe />
    </div>
  )
}

export default App
