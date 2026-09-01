"use client"; 

import { RiFileListLine } from "react-icons/ri";
import { LuPackageCheck } from "react-icons/lu";
import { HiOutlineTruck } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { GoDiscussionClosed } from "react-icons/go";
import { PiTShirtLight } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";

import { useEffect } from "react";






export default function Page() {

      useEffect(() => {

      const items = document.querySelectorAll('.item-hidden, .item-hidden-background');

      const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            if (entry.target.classList.contains('item-hidden')) {

                entry.target.classList.add('item-animated');

            }else{

              entry.target.classList.add('item-animated-background');

            }
              
            observer.unobserve(entry.target);
          
          }

        });

      }, {

            threshold: 0.1

      });

      items.forEach(i => observer.observe(i));

    }, [] )

  return (

        <main className=" overflow-hidden bg-episrubi-background">

          {/*LOADER SECTION*/}

          <section className="loader fixed z-50 inset-0 flex md:flex-row flex-col justify-center items-center h-screen bg-episrubi-background text-black font-bespoke-800 md:text-[150px] text-9xl">

            <span className="intro-animation-left">EPIS</span><span className="intro-animation-up">RUBI</span>

            <div>

              <p className="font-bespoke-400ntro-animation font-bespoke-400 text-3xl md:block hidden text-episrubi">EPIs,<br/> calzado <br/>limpieza profesionales</p>

              <p className="font-bespoke-400ntro-animation text-center italic font-bespoke-400 text-2xl md:hidden text-episrubi">EPIs, calzado y limpieza profesionales</p>
            </div>

          </section>

          {/*HERO SECTION*/}

          <section id="hero-section" className="hero relative flex flex-col justify-center h-screen text-white bg-[url(/hero-episrubi.jpg)] bg-center bg-cover bg-fixed p-2 ">
            
            <div className="absolute top-0 left-0 bg-black/40 h-screen w-full"></div>

            <div className="relative flex flex-col md:items-start items-start gap-6 md:p-10">

              <h1 className="w-fit font-bespoke-400 md:text-4xl text-xl uppercase">Vestuario laboral <br/><span className="text-center font-bespoke-800 text-episrubi-background  text-[10vw] md:text-9xl">personalizado</span><br/> <span className="block w-full text-right font-bespoke-500 md:text-7xl text-xl">en Barcelona</span></h1>

              <p className="font-bespoke-400ont-bespoke-400 md:text-2xl text-xl">Ropa de trabajo EPIs, calzado de seguridad, vestuario personalizado y productos de limpieza profesional</p>


              <div className="hero-buttons flex font-bespoke-800  gap-5 md:gap-10 md:text-2xl">

                <a href="#quote-form" className="cursor-pointer bg-episrubi-background md:p-4 p-3 rounded-xl transition-all duration-300 ease-in hover:scale-105  active:scale-105">
                  Pedir presupuesto
                </a>

                <a href="https://wa.me/689481140?text=Hola,%20quiero%20información%20sobre%20vuestros%20productos%20laborales" className="cursor-pointer bg-transparent backdrop-blur-2xl border-2 border-episrubi-background md:p-4 p-3 rounded-xl transition-all duration-300 ease-in hover:bg-episrubi-accent hover:border-episrubi-accent hover:text-episrubi-background hover:scale-105  active:text-episrubi-background active:scale-105 active:bg-episrubi-accent active:border-episrubi-accent active:text-episrubi-background active:scale-105">
                  Hablar ahora
                </a>

              </div>

            </div>


          </section>

          {/*END HERO SECTION*/}

          {/*TRUST SECTION*/}

          <section id="trust-section" className="trust-section flex flex-col items-center text-center bg-episrubi-accent text-white py-25 px-4 gap-3">

            <h2 className="item-hidden font-bespoke-800 md:text-6xl text-2xl uppercase">Vestuario laboral homologado</h2>

            <p className="item-hidden font-bespoke-400ont-bespoke-400 md:text-2xl text-xl">Ofrecemos un producto de calidad que cumple estrictas normativas y homologaciones</p>

            <div className="item-hidden certifications-grid flex justify-center md:justify-between md:max-w-4xl md:w-full">

              <img className="w-25 h-25 md:w-50 md:h-50 transition-all duration-300 ease-in hover:scale-105 active:scale-105" src="/iso1.png" alt="" />

              <img className="w-40 h-40 md:w-70 md:h-70 transition-all duration-300 ease-in hover:scale-105 active:scale-105" src="/iso3.png" alt="" />

              <img className="w-25 h-25 md:w-50 md:h-50 transition-all duration-300 ease-in hover:scale-105 active:scale-105" src="/iso2.png" alt="" />

            </div>

            <div className="delivery item-hidden bg-episrubi-secondary max-w-5xl p-5 rounded-2xl shadow-md  transition-all duration-300 ease-in hover:bg-episrubi-background hover:scale-105 active:bg-episrubi-background hover:scale-105 m-4 md:m-0">

              <h3 className="font-bespoke-700 md:text-4xl text-2xl">Un sitema de entrega al cliente rápido y seguro</h3>

              <div className="delivery-section flex flex-col md:flex-row justify-center items-center gap-5 mt-5">

                <div className="flex flex-col justify-center items-center">

                  <RiFileListLine size={40} />

                  <h4 className="font-bespoke-700 text-xl">Preparación</h4>

                  <p className="font-bespoke-400ont-bespoke-400 text-xl">Comprobamos cada talla y certificación de seguridad</p>

                </div>

                <div className="flex flex-col justify-center items-center">

                  <FaArrowRight className="rotate-90 md:rotate-0" size={30} />

                </div>

                <div className="flex flex-col justify-center items-center">

                  <HiOutlineTruck size={40} />

                  <h4 className="font-bespoke-700 text-xl">Envío o Recogida</h4>
                  
                  <p className="font-bespoke-400ont-bespoke-400 text-xl">Tú eliges: entrega rápida o recogida en tienda</p>
                  
                </div>

                 <div className="flex flex-col justify-center items-center">

                  <FaArrowRight className="rotate-90 md:rotate-0" size={30} />

                </div>

                <div className="flex flex-col justify-center items-center">

                  <LuPackageCheck size={40} />

                  <h4 className="font-bespoke-700 text-xl">Recepción</h4>

                  <p className="font-bespoke-400ont-bespoke-400 text-xl">Recibes tus equipos listos para proteger a tu equipo</p>

                </div>
              </div>

            </div>
            
          </section>

          {/*END TRUST SECTION*/}

          {/*PRODUCTS SECTION*/}

          <section id="products-section" className="products item-hidden flex flex-col items-center text-center text-white py-25 px-4 gap-10">
            
            <h2 className="item-hidden font-bespoke-800 md:text-6xl text-2xl uppercase" >Encuentra lo que necesitas</h2>
            
            <div className="category-grid  flex flex-col md:grid md:grid-cols-12 gap-5 p-5 md:p-0">

              <div className="product-container item-hidden md:col-span-4 max-w-md flex flex-col justify-center items-center bg-episrubi-primary gap-5 p-5 rounded-2xl shadow-md transition-all duration-300 ease-in hover:scale-105 hover:bg-episrubi-secondary active:scale-105 active:bg-episrubi-secondary">

                  <img className="w-30 h-30" src="https://diqmasolutions.com/wp-content/uploads/2026/03/OB-YOMA-V1.png" alt=""/>

                  <h3 className="font-bespoke-800 text-2xl uppercase">Vestuario laboral</h3>

                  <p className="font-bespoke-400ont-bespoke-400 text-xl">Ropa técnica y de alta visibilidad, uniformes</p>

                  <a href="https://wa.me/689481140?text=Hola,%20quiero%20información%20sobre%20vuestra%20ropa%20laboral" className="cursor-pointer font-bespoke-700 w-50 uppercase bg-episrubi-background p-4 rounded-xl transition-all duration-300 ease-in hover:scale-110 active:scale-105">
                    Pedir ahora
                  </a>


              </div>

              <div className="product-container item-hidden md:col-span-4 max-w-md flex flex-col justify-center items-center bg-episrubi-primary gap-5 p-5 rounded-2xl shadow-md transition-all duration-300 ease-in hover:scale-105 hover:bg-episrubi-secondary active:scale-105 active:bg-episrubi-secondary">

                  <img className="w-29 h-29" src="https://www.modyf.es/media/mf_webp/png/media/stmedia/modyf/eshop/products/std.lang.all/resolutions/normal/png-1600x1600px/4042942.webp" alt=""/>

                  <h3 className="font-bespoke-800 text-2xl uppercase">Calzado de seguridad</h3>

                  <p className="font-bespoke-400ont-bespoke-400 text-xl">Zapatos y botas con protección reforzada</p>

                  <a href="https://wa.me/689481140?text=Hola,%20quiero%20información%20sobre%20vuestro%20calzado%20laboral" className="cursor-pointer font-bespoke-700 w-50 uppercase bg-episrubi-background p-4  rounded-xl transition-all duration-300 ease-in hover:scale-110 active:scale-110">
                    Pedir ahora
                  </a>

              </div>

              <div className="product-container item-hidden md:col-span-4 max-w-md  flex flex-col justify-center items-center bg-episrubi-primary gap-5 p-5 rounded-2xl shadow-md transition-all duration-300 ease-in hover:scale-105 hover:bg-episrubi-secondary active:scale-105 active:bg-episrubi-secondary">

                  <img className="w-30 h-30" src="https://diqmasolutions.com/wp-content/uploads/2025/11/century-casco-seguridad-cachucha-front-amarillo.png" alt=""/> 

                  <h3 className="font-bespoke-800 text-2xl uppercase">Equipos EPIs</h3>

                  <p className="font-bespoke-400ont-bespoke-400 text-xl">Cascos, gafas, mascarillas y arneses</p>

                  <a href="https://wa.me/689481140?text=Hola,%20quiero%20información%20sobre%20vuestros%20equipos%20EPIs"className="cursor-pointer font-bespoke-700 w-50 uppercase bg-episrubi-background p-4 rounded-xl transition-all duration-300 ease-in hover:scale-110 active:scale-110">
                    Pedir ahora
                  </a>

              </div>

              <div className="product-container item-hidden md:col-span-4 md:col-start-3 max-w-md  flex flex-col justify-center items-center bg-episrubi-primary gap-5 p-5 rounded-2xl shadow-md transition-all duration-300 ease-in hover:scale-105 hover:bg-episrubi-secondary active:scale-105 active:bg-episrubi-secondary">

                  <img className="w-30 h-30" src="https://www.modyf.es/media/mf_webp/png/media/stmedia/modyf/eshop/products/std.lang.all/resolutions/normal/png-1600x1600px/37812105.webp" alt=""/> 

                  <h3 className="font-bespoke-800 text-2xl uppercase">Alta Visbilidad</h3>

                  <p className="font-bespoke-400ont-bespoke-400 text-xl">Seguridad visible en cualquier entorno</p>

                  <a href="https://wa.me/689481140?text=Hola,%20quiero%20información%20sobre%20vuestros%20equipos%20EPIs"className="cursor-pointer font-bespoke-700 w-50 uppercase bg-episrubi-background p-4 rounded-xl transition-all duration-300 ease-in hover:scale-110 active:scale-110">
                    Pedir ahora
                  </a>

              </div>

              <div className="product-container item-hidden md:col-span-4 max-w-md flex flex-col justify-center items-center bg-episrubi-primary gap-5 p-5 rounded-2xl shadow-md transition-all duration-300 ease-in hover:scale-105 hover:bg-episrubi-secondary active:scale-105 active:bg-episrubi-secondary">

                  <img className="w-30 h-30" src="https://diqmasolutions.com/wp-content/uploads/2026/07/CIA-388XFT-IP-1.png" alt=""/> 

                  <h3 className="font-bespoke-800 text-2xl uppercase">Complementos</h3>

                  <p className="font-bespoke-400ont-bespoke-400 text-xl">Rodilleras, cinturones, guantes y mucho más</p>

                  <a href="https://wa.me/689481140?text=Hola,%20quiero%20información%20sobre%20vuestros%20equipos%20EPIs"className="cursor-pointer font-bespoke-700 w-50 uppercase bg-episrubi-background p-4 rounded-xl transition-all duration-300 ease-in hover:scale-110 active:scale-110">
                    Pedir ahora
                  </a>

              </div>

            </div>
            
            
            <div className="custom-request-banner item-hidden border-4 border-episrubi-primary p-10 rounded-2xl shadow-md  transition-all duration-300 ease-in hover:scale-105 hover:bg-episrubi-primary active:scale-105 active:bg-episrubi-primary">

              <h3 className="font-bespoke-700 md:text-4xl text-2xl mb-10">¿No encuentras lo que buscas?</h3>

              <a href="https://wa.me/689481140?text=Hola,%20quiero%20saber%20si%20teneis%20un%20producto" className="cursor-pointer font-bespoke-700 bg-episrubi-secondary text-xl md:text-2xl p-4 rounded-xl transition-all duration-300 ease-in hover:bg-episrubi-background active:bg-episrubi-background">
                Preguntar ahora
              </a>

            </div>

          </section>

          {/*END PRODUCTS SECTION*/}

          {/*VALUE-ADDED SECTION*/}

          <section id="why-us-section" className="value-added item-hidden-background relative flex flex-col items-center md:items-start text-center md:text-start rounded-4xl md:rounded-r-4xl  md:rounded-l-none bg-[url(/value-added-section.jpg)] bg-cover bg-fixed text-white p-5 md:p-25 mx-5  md:mx-0 gap-3 md:mr-100 mb-20">
            
            <div className="absolute top-0 left-0 h-full w-full bg-black/40  rounded-4xl md:rounded-r-4xl  md:rounded-l-none"></div>

            <div className="relative flex flex-col gap-5">

              <h2 className="font-bespoke-800 md:text-6xl text-2xl uppercase">Prendas <span className="text-episrubi-accent">laborales</span> adaptadas a tu negocio</h2>

              <p className="font-bespoke-400ont-bespoke-400  text-xl md:text-2xl">¿Necesitas que el vestuario lleve el logo o colores de tu empresa?¿Otras adaptaciones?</p>

              <p className="font-bespoke-400ont-bespoke-400 text-xl md:text-2xl">EpisRubi lleva años ofreciendo un servicio de personalización de calidad adaptado a las necesidades de cada empresa</p>
            
            </div>

          </section>

          {/*END VALUE-ADDED SECTION*/}

          {/*WHY-US SECTION*/}

          <section className="why-us item-hidden-background relative flex flex-col items-center md:items-end  text-center md:text-end rounded-4xl md:rounded-l-4xl md:rounded-r-none bg-[url(/value-added-section.jpg)] bg-cover bg-fixed text-white p-5 md:p-25 m-5 md:m-0 gap-3 md:ml-100">

            <div className="absolute top-0 left-0 h-full w-full bg-black/40  rounded-4xl md:rounded-l-4xl  md:rounded-r-none"></div>

            <div className="relative flex flex-col gap-5">

            <h2 className="font-bespoke-800 md:text-6xl text-2xl uppercase">¿Por qué <span className="text-episrubi-background">elegirnos?</span></h2>

            <p className="font-bespoke-400ont-bespoke-400 md:text-2xl text-xl">En EpisRubi llevamos más de 18 años ofreciendo en Barcelona a empresas un vestuario laboral personalizado de calidad y estrictamnete homologado junto con un asesoramiento experto</p>

            <div className="features-section flex flex-col md:flex-row justify-end text-end gap-5">

              <div className="flex justify-center items-center transition-all duration-300 ease-in hover:text-episrubi-background hover:scale-105  active:text-episrubi-background active:scale-105 gap-2">

                <AiOutlineSafetyCertificate size={20}/>

                <p className="font-bespoke-400ont-bespoke-400 md:text-xl text-xl italic">18 años de experiencia</p>

              </div>

              <div className="flex justify-center items-center transition-all duration-300 ease-in hover:text-episrubi-background hover:scale-105  active:text-episrubi-background active:scale-105 gap-2">

                <GoDiscussionClosed size={20}/>

                <p className="font-bespoke-400ont-bespoke-400 md:text-xl text-xl italic">Asesoramiento personal</p>

              </div>

              <div className="flex justify-center items-center transition-all duration-300 ease-in hover:text-episrubi-background hover:scale-105  active:text-episrubi-background active:scale-105 gap-2">

                <PiTShirtLight size={20}/>

                <p className="font-bespoke-400ont-bespoke-400 md:text-xl text-xl italic">Equipos personalizados</p>

              </div>

            </div>

            </div>

          </section>

          {/*END WHY-US SECTION*/}

          {/*SOCIAL-PROOF SECTION*/}

          <section id="brands-section" className="social-proof display flex flex-col items-center text-center text-white py-25 px-5 gap-5">

            <h2 className="item-hidden font-bespoke-800 md:text-6xl text-2xl uppercase">Marcas de calidad</h2>

            <p className="item-hidden font-bespoke-400ont-bespoke-400 md:text-2xl text-xl mb-10">En EpisRubi nos preocupamos de ofrecer a las empresas las mejores marcas de vestuario laboral</p>

            <div className="item-hidden carousel logo-cloud flex  scale-110">

              <div className="carousel-logo-group grow-0 shrink-0 flex">

                <img className="w-25 h-25 md:w-50 md:h-50 transition-all duration-300 ease-in hover:scale-105 active:scale-105" src="/workteam.png" alt="" />

                <img className="w-25 h-25 md:w-50 md:h-50 transition-all duration-300 ease-in hover:scale-105 active:scale-105" src="/roly.png" alt="" />

                <img className="w-25 h-25 md:w-50 md:h-50 transition-all duration-300 ease-in hover:scale-105 active:scale-105" src="/sparco.png" alt="" />

                <img className="w-25 h-25 md:w-50 md:h-50 transition-all duration-300 ease-in hover:scale-105 active:scale-105" src="/payper.png" alt="" />

                <img className="w-25 h-25 md:w-50 md:h-50 transition-all duration-300 ease-in hover:scale-105 active:scale-105" src="/jomiba.png" alt="" />

                <img className="w-25 h-25 md:w-50 md:h-50 transition-all duration-300 ease-in hover:scale-105 active:scale-105" src="/solo.png" alt="" />

                <img className="w-25 h-25 md:w-50 md:h-50 transition-all duration-300 ease-in hover:scale-105 active:scale-105" src="/anbor.png" alt="" />

                <img className="w-25 h-25 md:w-50 md:h-50 transition-all duration-300 ease-in hover:scale-105 active:scale-105" src="/garys.png" alt="" />

                <img className="w-25 h-25 md:w-50 md:h-50 transition-all duration-300 ease-in hover:scale-105 active:scale-105" src="/jhayber.png" alt="" />

              </div>

              <div aria-hidden className="carousel-logo-group grow-0 shrink-0 flex">

                <img className="w-25 h-25 md:w-50 md:h-50 transition-all duration-300 ease-in hover:scale-105 active:scale-105" src="/workteam.png" alt="" />

                <img className="w-25 h-25 md:w-50 md:h-50 transition-all duration-300 ease-in hover:scale-105 active:scale-105" src="/roly.png" alt="" />

                <img className="w-25 h-25 md:w-50 md:h-50 transition-all duration-300 ease-in hover:scale-105 active:scale-105" src="/sparco.png" alt="" />

                <img className="w-25 h-25 md:w-50 md:h-50 transition-all duration-300 ease-in hover:scale-105 active:scale-105" src="/payper.png" alt="" />

                <img className="w-25 h-25 md:w-50 md:h-50 transition-all duration-300 ease-in hover:scale-105 active:scale-105" src="/jomiba.png" alt="" />

                <img className="w-25 h-25 md:w-50 md:h-50 transition-all duration-300 ease-in hover:scale-105 active:scale-105" src="/solo.png" alt="" />

                <img className="w-25 h-25 md:w-50 md:h-50 transition-all duration-300 ease-in hover:scale-105 active:scale-105" src="/anbor.png" alt="" />

                <img className="w-25 h-25 md:w-50 md:h-50 transition-all duration-300 ease-in hover:scale-105 active:scale-105" src="/garys.png" alt="" />
                
                <img className="w-25 h-25 md:w-50 md:h-50 transition-all duration-300 ease-in hover:scale-105 active:scale-105" src="/jhayber.png" alt="" />

              </div>


            </div>

            <div id="social-proof-section" className="client-results mt-10">
                
              <h3 className="item-hidden font-bespoke-800 md:text-5xl text-2xl">Pedidos recientemente</h3>
              
              <p className="item-hidden font-bespoke-400 md:text-2xl text-xl">Una galería con ropa laboral encargada por clientes reales</p>

              <div className="case-studies-grid item-hidden grid grid-cols-2 md:grid-cols-4 gap-4 p-5 md:px-50">

                <div className="grid gap-4">
                    <div>

                        <img className="h-auto max-w-full rounded-xl transition-all duration-300 ease-in hover:scale-105 active:scale-105" src="/ropa-laboral1.jpg" alt=""/>

                    </div>

                    <div>

                        <img className="h-auto max-w-full rounded-xl transition-all duration-300 ease-in hover:scale-105 active:scale-105" src="/ropa-laboral12.jpg" alt=""/>

                    </div>

                    <div>

                        <img className="h-auto max-w-full rounded-xl transition-all duration-300 ease-in hover:scale-105 active:scale-105" src="/ropa-laboral2.jpg" alt=""/>

                    </div>

                </div>

                <div className="grid gap-4">

                    <div>

                        <img className="h-auto max-w-full rounded-xl transition-all duration-300 ease-in hover:scale-105 active:scale-105" src="/ropa-laboral11.jpg" alt=""/>

                    </div>

                    <div>

                        <img className="h-auto max-w-full rounded-xl transition-all duration-300 ease-in hover:scale-105 active:scale-105" src="/ropa-laboral3.jpg" alt=""/>

                    </div>

                    <div>

                        <img className="h-auto max-w-full rounded-xl transition-all duration-300 ease-in hover:scale-105 active:scale-105" src="/ropa-laboral10.jpg" alt=""/>

                    </div>

                </div>

                <div className="grid gap-4">

                    <div>

                        <img className="h-auto max-w-full rounded-xl transition-all duration-300 ease-in hover:scale-105 active:scale-105" src="/ropa-laboral4.jpg" alt=""/>

                    </div>

                    <div>

                        <img className="h-auto max-w-full rounded-xl transition-all duration-300 ease-in hover:scale-105 active:scale-105" src="/ropa-laboral9.jpg" alt=""/>

                    </div>

                    <div>

                        <img className="h-auto max-w-full rounded-xl transition-all duration-300 ease-in hover:scale-105 active:scale-105" src="/ropa-laboral5.jpg" alt=""/>

                    </div>

                </div>

                <div className="grid gap-4">

                    <div>

                        <img className="h-auto max-w-full rounded-xl transition-all duration-300 ease-in hover:scale-105 active:scale-105" src="/ropa-laboral8.jpg" alt=""/>

                    </div>

                    <div>

                        <img className="h-auto max-w-full rounded-xl transition-all duration-300 ease-in hover:scale-105 active:scale-105" src="/ropa-laboral6.jpg" alt=""/>

                    </div>

                    <div>

                        <img className="h-auto max-w-full rounded-xl transition-all duration-300 ease-in hover:scale-105 active:scale-105" src="/ropa-laboral7.jpg" alt=""/>

                    </div>

                </div>
              </div>

            </div>

          </section>

          {/*END SOCIAL-PROOF SECTION*/}

          {/*QUOTE-FORM SECTION*/}

          <section id="quote-form" className="quote-form item-hidden flex flex-col items-center text-center rounded-4xl bg-radial from-episrubi-primary  to-episrubi-accent text-white p-7 md:py-25 m-5 md:mx-90 gap-3 shadow-xl ">
          
            <h2 className="font-bespoke-800 md:text-6xl text-2xl uppercase">Pide presupuesto</h2>

            <p className="font-bespoke-400ont-bespoke-400 md:text-2xl text-xl">Rellena este formulario rápido y te llamaremos hoy mismo</p>

            <div className="quote-form-container rounded-2xl p-5 w-full md:min-w-3xl max-w-6xl">

              <form action="" method="post" className="flex flex-col text-left md:text-xl gap-3">

                <div className="flex flex-col gap-3">

                  <label className="font-bespoke-400 italic" htmlFor="client-name">Nombre empresa</label>

                  <input type="text" id="client-name" name="name" className="bg-episrubi-background font-bespoke-400 rounded-2xl p-3"/>

                </div>

                <div className="flex flex-col gap-3">

                  <label className="font-bespoke-400 italic" htmlFor="client-phone">Teléfono</label>
                  
                  <input type="tel" id="client-phone" name="phone" className="bg-episrubi-background font-bespoke-400 rounded-2xl p-3"/>

                </div>

                <div className="flex flex-col gap-3">

                  <label className="font-bespoke-400 italic" htmlFor="client-phone">Producto</label>
                  
                  <select id="client-product" name="product" className="bg-episrubi-background font-bespoke-400 rounded-2xl p-3">

                    <option value="shoes">zapatos</option>

                    <option value="uniform">uniforme</option>

                    <option value="other">otro</option>

                  </select>

                </div>

                <div className="flex flex-col items-center w-full gap-3">

                  <button className="cursor-pointer font-bespoke-700 bg-episrubi-background w-full text-xl md:text-2xl md:w-md p-4 rounded-xl transition-all duration-300 ease-in hover:scale-105 active:scale-105 mt-5">
                    Preguntar ahora
                  </button>

                </div>

                
              </form>

            </div>

          </section>

          {/*END QUOTE-FORM SECTION*/}

          {/*FAQ SECTION*/}

          <section id="faq-section" className="faq-section flex flex-col items-center text-center w-full text-white p-5 md:py-25 gap-3">

            <h2 className="font-bespoke-800 md:text-6xl text-2xl uppercase">Dudas frecuentes de los clientes</h2>

            <div className="faqs flex flex-col items-start w-full max-w-4xl p-2">

              <details className="item-hidden group w-full text-left p-3">

                <summary className="flex justify-between cursor-pointer font-bespoke-500 text-xl list-none" >¿Cómo sé si los EPIs que vendéis cumplen la normativa? <IoIosArrowDown className="text-episrubi-primary transition-all duration-300 group-open:rotate-180"/></summary>

                <p className="font-bespoke-400">Trabajamos con EPIs con marcado CE, folleto informativo en castellano y, cuando aplica, Declaración UE de conformidad o acceso a ella. Si necesitas validar una referencia antes de comprar, te facilitamos la documentación técnica correspondiente</p>

              </details>

              <details className="item-hidden group w-full text-left p-3 border-episrubi-primary border-t-2">

                <summary className="flex justify-between cursor-pointer font-bespoke-500 text-xl list-none">¿Me podéis ayudar a elegir el EPI correcto para mi actividad? <IoIosArrowDown className="text-episrubi-primary transition-all duration-300 group-open:rotate-180"/></summary>

                <p className="font-bespoke-400">Sí. Te asesoramos según actividad, riesgo, entorno de trabajo y tiempo de uso, para que no compres “por catálogo” algo que luego no sea adecuado</p>

              </details>

              <details className="item-hidden group w-full text-left p-3 border-episrubi-primary border-t-2">

                <summary className="flex justify-between cursor-pointer font-bespoke-500 text-xl list-none">¿Cómo os aseguráis de que la talla y el ajuste sean correctos? <IoIosArrowDown className="text-episrubi-primary transition-all duration-300 group-open:rotate-180"/></summary>

                <p className="font-bespoke-400">Te ayudamos a escoger la talla, ajuste y compatibilidad entre equipos para que el EPI proteja bien y sea cómodo de usar</p>

              </details>

              <details className="item-hidden group w-full text-left p-3 border-episrubi-primary border-t-2">

                <summary className="flex justify-between cursor-pointer font-bespoke-500 text-xl list-none">¿Qué documentación me entregáis con el pedido? <IoIosArrowDown className="text-episrubi-primary transition-all duration-300 group-open:rotate-180"/></summary>

                <p className="font-bespoke-400">Con el pedido facilitamos la información necesaria para que la empresa pueda comprar con seguridad: identificación del producto, documentación técnica disponible y, cuando corresponda, la declaración UE de conformidad junto con el resto de documentación exigible o la vía para acceder a ella</p>

              </details>

              <details className="item-hidden group w-full text-left p-3 border-episrubi-primary border-t-2">

                <summary className="flex justify-between cursor-pointer font-bespoke-500 text-xl list-none">¿Podéis personalizar prendas o poner nuestro logo? <IoIosArrowDown className="text-episrubi-primary transition-all duration-300 group-open:rotate-180"/></summary>

                <p className="font-bespoke-400">Sí, en vestuario laboral y prendas corporativas. En cambio, cuando se trata de EPIs certificados, la personalización o modificación no debe comprometer el ajuste, la protección ni la certificación del producto</p>

              </details>

              <details className="item-hidden group w-full text-left p-3 border-episrubi-primary border-y-2">

                <summary className="flex justify-between cursor-pointer font-bespoke-500 text-xl list-none">¿Cuánto tardáis en dar respuesta o presupuesto? <IoIosArrowDown className="text-episrubi-primary transition-all duration-300 group-open:rotate-180"/></summary>

                <p className="font-bespoke-400">Te confirmamos disponibilidad, plazo y alternativa equivalente antes de cerrar el pedido</p>

              </details>

            </div>

            <div className="custom-question-banner item-hidden p-5">

              <h3 className="font-bespoke-800 md:text-4xl text-2xl mb-10">¿Tienes más dudas?</h3>

              <a href="https://wa.me/689481140?text=Hola,%20necesito%20información" className="cursor-pointer font-bespoke-700 bg-episrubi-accent text-xl p-4 rounded-xl transition-all duration-300 ease-in hover:scale-105 hover:bg-episrubi-secondary active:scale-105 active:bg-episrubi-secondary ">
                Preguntar ahora
              </a>

            </div>

          </section>

          {/*END FAQ SECTION*/}

          {/*CTA-WHASTAPP SECTION*/}

          <section className="cta-whatsapp item-hidden value-added flex flex-col items-center text-center rounded-2xl bg-gradient-to-r from-episrubi-accent to-episrubi-primary/60  text-white shadow-xl px-7 py-25 gap-3 m-5 md:m-20 md:mt-0">
          
            <h2 className="font-bespoke-800 md:text-6xl text-2xl uppercase">¿Necesitas hacer un encargo?</h2>

            <p className="font-bespoke-400ont-bespoke-400 md:text-2xl text-xl">Contactanos por WhatsApp y tendras tu presupuesto hoy mismo</p>

            <a href="https://wa.me/689481140?text=Hola,%20quiero%20un%20presupuesto%20de%20vuestros%20productos%20laborales" className="cursor-pointer font-bespoke-700 bg-episrubi-background text-xl md:text-2xl uppercase md:p-4 p-4 rounded-xl transition-all duration-300 ease-in hover:scale-105 active:scale-105 mt-5">
              Obtener presupuesto
            </a>
 
          </section>

          {/*END CTA-WHASTAPP SECTION*/}

        </main>
  )
}