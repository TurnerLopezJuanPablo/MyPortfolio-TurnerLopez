import './styles/App.css'

import { useEffect, useState } from 'react'

// Components imports
import TopNav from './Components/TopNav'
import { Presentation } from './Components/Presentation'
import { AboutMe } from './Components/AboutMe'
import { Studies } from './Components/Studies'
import { Jobs } from './Components/Jobs'
import { Skills } from './Components/Skills'
import { Projects } from './Components/Projects'
import { Code } from './Components/Code'
import { Contact } from './Components/Contact'
import { Footer } from './Components/Footer'

function App() {
  const [hideTimeout, setHideTimeout] = useState(null)

  useEffect(() => {
    const mybutton = document.getElementById('myBtn')

    const scrollFunction = () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = 'block'
        mybutton.classList.remove('moveDown')
        mybutton.classList.add('moveUp')

        if (hideTimeout) {
          clearTimeout(hideTimeout)
          setHideTimeout(null)
        }
      } else {
        mybutton.classList.add('moveDown')
        mybutton.classList.remove('moveUp')

        const timeout = setTimeout(() => {
          mybutton.style.display = 'none'
        }, 900)

        setHideTimeout(timeout)
      }
    }

    window.onscroll = scrollFunction

    return () => {
      window.onscroll = null
      if (hideTimeout) {
        clearTimeout(hideTimeout)
      }
    }
  }, [hideTimeout])

  const topFunction = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  return (
    <>
      <TopNav />

      <main>
        <Presentation />
        <AboutMe />
        <Studies />
        <Jobs />
        <Skills />
        <Projects />
        <Code />
        <Contact />
      </main>
      
      <button onClick={topFunction} id="myBtn" title="Go to top">↑</button>

      <Footer />
    </>
  )
}

export default App
