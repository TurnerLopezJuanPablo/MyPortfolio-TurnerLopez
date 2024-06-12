import '../styles/TopNav.css'

import { useState, useEffect, useRef } from 'react'

// eslint-disable-next-line react/prop-types
function TopNav({ updateToggleSlider }) {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const menuIconRef = useRef(null)
  const sideNavRef = useRef(null)
  const divOverlay = useRef(null)

  useEffect(() => {
    if (menuIconRef.current) menuIconRef.current.classList.toggle("change")
    if (sideNavRef.current) sideNavRef.current.classList.toggle("change")

    isNavOpen ? divOverlay.current.classList.add('show') : divOverlay.current.classList.remove('show')
  }, [isNavOpen, menuIconRef])

  const handleClick = () => {
    isNavOpen ? closeNav() : openNav()
  }

  function openNav() {
    document.getElementById("sidenav").style.width = "200px"
    setIsNavOpen(true)
  }

  function closeNav() {
    document.getElementById("sidenav").style.width = "0"
    setIsNavOpen(false)
  }

  const timeoutRef = useRef(null)

  const handleClick2 = (e, href) => {
    e.preventDefault()
    closeNav()

    updateToggleSlider(false)

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    /* 
      If you are here it is because you notice that when you click on an anchor the skills slider
      stops for around a second (exactly 750ms), well... skills cards overflow makes anchors to fail due to its 
      size of +20 cards off screen, idk why this happens but preventing default event from anchors
      and using it with timeouts while slider is off works well :D

      If you have a better solution please share it! I would appreciate it
    */

    setTimeout(() => {
      window.location.href = href
    }, 50)


    timeoutRef.current = setTimeout(() => {
      updateToggleSlider(true)
      timeoutRef.current = null
    }, 750)
  }

  return (
    <>
      <div className="header sidenav" id="sidenav">
        <a href='#presentation' onClick={(e) => handleClick2(e, '#presentation')}>Presentación</a>
        <a href='#aboutMe' onClick={(e) => handleClick2(e, '#aboutMe')}>Sobre Mi</a>
        <a href='#CV' onClick={(e) => handleClick2(e, '#CV')}>CV</a>
        <a href='#studies' onClick={(e) => handleClick2(e, '#studies')}>Estudios</a>
        <a href='#jobs' onClick={(e) => handleClick2(e, '#jobs')}>Trabajos</a>
        <a href='#skills' onClick={(e) => handleClick2(e, '#skills')}>Habilidades</a>
        <a href='#projects' onClick={(e) => handleClick2(e, '#projects')}>Proyectos</a>
        <a href='#code' onClick={(e) => handleClick2(e, '#code')}>Código</a>
        <a href='#contact' onClick={(e) => handleClick2(e, '#contact')}>Contacto</a>

        <div className='sideNav-div bottom' ref={sideNavRef}>
          <p>Portfolio - React APP</p>
          <p>My first React.JS Project - 2024</p>
        </div>
      </div>

      <div className="container change" id='menuIcon' onClick={handleClick} ref={menuIconRef}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>

      <div className='div-overlay' ref={divOverlay} onClick={closeNav}>
        <strong>Click here to close SideNav</strong>
      </div>
    </>
  )
}

export default TopNav;
