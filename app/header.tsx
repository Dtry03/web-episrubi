"use client"; 

import { useState } from "react";
import { useEffect } from "react";




const Header = () => {

  const [scrolled, setScrolled] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 50) {

        setScrolled(true);

      } else {

        setScrolled(false);

      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

    }, []);


      return (

       <header className={`header fixed z-30 top-0 left-0 w-full h-20 flex flex-row justify-between items-center gap-10 bg-episrubi-secondary/80 p-5 transition-all duration-300 ease-in ${
        scrolled  ? 'bg-episrubi-secondary/80 shadow-md py-3' : 'bg-transparent'}`}>

            <div className="mobile-menu-button md:hidden">

              <button onClick={() => setIsOpen(!isOpen) } id="mobile-button">

                {
                    isOpen ? (

                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />

                        </svg>

                    ) : (

                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                            <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                
                    )
                }
  
              </button>

            </div>


            <div className="logo">

            </div>

            <nav className="menu hidden md:block"> 

              <ul className="flex flex-row justify-between items-center gap-5 font-bespoke-500 uppercase">

                <li><a href="#hero-section" className="hover:text-episrubi-background/90 active:text-episrubi-background/90">Inicio</a></li>
                <li><a href="#trust-section" className="hover:text-episrubi-background/90 active:text-episrubi-background/90">Normativas</a></li>
                <li><a href="#products-section" className="hover:text-episrubi-background/90 active:text-episrubi-background/90">Productos</a></li>
                <li><a href="#why-us-section" className="hover:text-episrubi-background/90 active:text-episrubi-background/90">Nosotros</a></li>
                <li><a href="#brands-section" className="hover:text-episrubi-background/90 active:text-episrubi-background/90">Marcas</a></li>
                <li><a href="#social-proof-section" className="hover:text-episrubi-background/90 active:text-episrubi-background/90">Clientes</a></li>
                <li><a href="#quote-form" className="hover:text-episrubi-background/90 active:text-episrubi-background/90">Pedir Presupuesto</a></li>
                <li><a href="#faq-section" className="hover:text-episrubi-background/90 active:text-episrubi-background/90">FAQ</a></li>

              </ul>

            </nav>

            <nav className={`${isOpen ? 'flex' : 'hidden'} mobile-menu md:hidden  absolute top-20 left-0 w-full bg-episrubi-accent/80`}> 
              <ul className="flex-col justify-center items-center  w-full font-bespoke-500 uppercase gap-5 p-3">

                <li><a href="#hero-section" onClick={() => setIsOpen(false) } className="hover:text-episrubi-background/90 active:text-episrubi-background/90 p-3">Inicio</a></li>
                <li><a href="#trust-section" onClick={() => setIsOpen(false) } className="hover:text-episrubi-background/90 active:text-episrubi-background/90 p-3">Normativas</a></li>
                <li><a href="#products-section" onClick={() => setIsOpen(false) } className="hover:text-episrubi-background/90 active:text-episrubi-background/90 p-3">Productos</a></li>
                <li><a href="#why-us-section" onClick={() => setIsOpen(false) } className="hover:text-episrubi-background/90 active:text-episrubi-background/90 p-3">Nosotros</a></li>
                <li><a href="#brands-section" onClick={() => setIsOpen(false) } className="hover:text-episrubi-background/90 active:text-episrubi-background/90 p-3">Marcas</a></li>
                <li><a href="#social-proof-section" onClick={() => setIsOpen(false) } className="hover:text-episrubi-background/90 active:text-episrubi-background/90 p-3">Clientes</a></li>
                <li><a href="#quote-form" onClick={() => setIsOpen(false) } className="hover:text-episrubi-background/90 active:text-episrubi-background/90 p-3">Pedir Presupuesto</a></li>
                <li><a href="#faq-section" onClick={() => setIsOpen(false) } className="hover:text-episrubi-background/90 active:text-episrubi-background/90 p-3">FAQ</a></li>

              </ul>

            </nav>

            <div className="header-cta">

              <a href="https://wa.me/689481140?text=Hola,%20quiero%20un%20presupuesto%20de%20vuestros%20productos%20laborales" className="cursor-pointer font-bespoke-700 bg-episrubi-background text-md uppercase md:p-4 p-3 rounded-xl transition-all duration-300 ease-in hover:scale-105 active:scale-105">
                Pedir ahora
              </a>
 

            </div>
            
        </header>
      )
}


export default Header;