import './styles/App.css'

import { useEffect, useState, useRef } from 'react'

// Components imports
import TopNav from './Components/TopNav'
import { Presentation } from './Components/Presentation'
import { AboutMe } from './Components/AboutMe'
import { CV } from './Components/CV'
import { Studies } from './Components/Studies'
import { Jobs } from './Components/Jobs'
import { Skills } from './Components/Skills'
import { Projects } from './Components/Projects'
import { Code } from './Components/Code'
import { Contact } from './Components/Contact'
import { Footer } from './Components/Footer'

export const SPANISH = 'Español';
export const ENGLISH = 'English';

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

  const mainDiv = useRef(null)

  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault()
    }

    const currentDiv = mainDiv.current
    if (currentDiv) {
      currentDiv.addEventListener('contextmenu', handleContextMenu)
    }

    return () => {
      if (currentDiv) {
        currentDiv.removeEventListener('contextmenu', handleContextMenu)
      }
    }
  }, [])

  const [toggleSlider, setToggleSlider] = useState(true)

  return (
    <>
      <div ref={mainDiv}>
        <TopNav updateToggleSlider={setToggleSlider} />

        <main>
          <Presentation />

          <AboutMe />
          <hr></hr>

          <CV />
          <hr></hr>

          <Studies />
          <hr></hr>

          <Jobs />
          <hr></hr>

          <Skills toggleSlider={toggleSlider} />
          <hr></hr>

          <Projects />
          <hr></hr>

          <Code />
          <hr></hr>

          <Contact />
        </main>

        <button onClick={topFunction} id="myBtn" title="Go to top">↑</button>

        <Footer />
      </div>
    </>
  )
}

export default App
