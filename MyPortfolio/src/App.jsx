import './styles/App.css'

// Components imports
import TopNav from './Components/TopNav'
import { Presentation } from './Components/Presentation'
import { AboutMe } from './Components/AboutMe'
import { Studies } from './Components/Studies'
import { Skills } from './Components/Skills'
import { Projects } from './Components/Projects'
import { Contact } from './Components/Contact'
import { Code } from './Components/Code'

function App() {

  // Erase later
  // alert('Important! This project is under development...')

  return (
    <>
      <TopNav />

      <main>
        <Presentation />
        <AboutMe />
        <Studies />
        <Skills />
        <Projects />
        <Contact />
        <Code />
      </main>
    </>
  )
}

export default App
