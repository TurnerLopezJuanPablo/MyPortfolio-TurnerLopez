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

    console.log(document.querySelector('.container'))
  }

  function openNav() {
    document.getElementById("sidenav").style.width = "200px"
    setIsNavOpen(true)
  }

  function closeNav() {
    document.getElementById("sidenav").style.width = "0"
    setIsNavOpen(false)
  }

  const handleClick2 = () => {
    closeNav()
  }

  return (
    <>
      <div className="header sidenav" id="sidenav">
        <a href='#presentation' onClick={handleClick2}>Presentacion</a>
        <a href='#aboutMe' onClick={handleClick2}>Sobre Mi</a>
        <a href='#studies' onClick={handleClick2}>Estudios</a>
        <a href='#skills' onClick={handleClick2}>Habilidades</a>
        <a href='#projects' onClick={handleClick2}>Proyectos</a>
        <a href='#contact' onClick={handleClick2}>Contacto</a>
        <a href='#code' onClick={handleClick2}>Codigo</a>
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
