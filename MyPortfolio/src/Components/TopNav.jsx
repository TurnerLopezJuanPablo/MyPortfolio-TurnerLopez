import '../styles/TopNav.css'

import { useState, useEffect, useRef } from 'react'

function TopNav() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const menuIconRef = useRef(null)

  useEffect(() => {
    if (menuIconRef.current) menuIconRef.current.classList.toggle("change")
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

  return (
    <>
      <div className="header sidenav" id="sidenav" >
        <a href='#presentation'>Presentacion</a>
        <a href='#aboutMe'>Sobre Mi</a>
        <a href='#studies'>Estudios</a>
        <a href='#skills'>Habilidades</a>
        <a href='#projects'>Proyectos</a>
        <a href='#contact'>Contacto</a>
        <a href='#code'>Codigo</a>
      </div>

      <div className="container" id='menuIcon' onClick={handleClick} ref={menuIconRef}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </>
  );
}

export default TopNav;
