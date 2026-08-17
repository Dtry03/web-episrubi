import { RiFileListLine } from "react-icons/ri";
import { LuPackageCheck } from "react-icons/lu";
import { HiOutlineTruck } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";

export default function Page() {
  return (

        <main className="bg-episrubi-background">

          {/*LOADER SECTION*/}

          <section className="loader fixed z-50 inset-0 flex md:flex-row flex-col justify-center items-center h-screen bg-episrubi-background text-black font-bespoke-800 md:text-[150px] text-9xl">

            <span className="intro-animation-left">EPIS</span><span className="intro-animation-up">RUBI</span>

            <div>

              <p className="intro-animation font-bespoke-400 text-3xl md:block hidden text-episrubi">EPIs,<br/> calzado <br/>limpieza profesionales</p>

              <p className="intro-animation text-center italic font-bespoke-400 text-2xl md:hidden text-episrubi">EPIs, calzado y limpieza profesionales</p>
            </div>

          </section>

          {/*HERO SECTION*/}

          <section className="hero relative flex flex-col justify-center h-screen text-white bg-[url(/hero-episrubi.jpg)] bg-center bg-cover bg-fixed p-2 ">
            
            <div className="absolute top-0 left-0 bg-black/40 h-screen w-full"></div>

            <div className="relative flex flex-col md:items-start items-start gap-6 md:p-10">

              <h1 className="w-fit font-bespoke-400 md:text-4xl text-3xl uppercase">Vestuario laboral <br/><span className="text-center font-bespoke-800 text-episrubi-background  text-[45px] md:text-9xl">personalizado</span><br/> <span className="block w-full text-right font-bespoke-500 md:text-7xl text-3xl">en Barcelona</span></h1>

              <p className="font-bespoke-400 md:text-2xl text-md">Ropa de trabajo EPIs, calzado de seguridad, vestuario personalizado y productos de limpieza profesional</p>


              <div className="hero-buttons flex font-bespoke-800  gap-5 md:gap-10 md:text-2xl">

                <button className="bg-episrubi-background md:p-4 p-2 rounded-xl transition-all duration-300 ease-in hover:scale-105">
                  Pedir presupuesto
                </button>

                <button className="bg-transparent backdrop-blur-2xl border-2 border-episrubi-background md:p-4 p-2 rounded-xl transition-all duration-300 ease-in hover:bg-episrubi-accent hover:border-episrubi-accent hover:text-episrubi-background hover:scale-105">
                  Hablar ahora
                </button>

              </div>

            </div>


          </section>

          {/*END HERO SECTION*/}

          {/*TRUST SECTION*/}

          <section className="trust-section flex flex-col items-center text-center bg-episrubi-accent/80 text-white py-25 gap-3">

            <h2 className="appear-animation font-bespoke-800 md:text-6xl text-xl">Vestuario laboral homologado</h2>

            <p className="font-bespoke-400 md:text-2xl text-md">Ofrecemos un producto de calidad que cumple estrictas normativas y homologaciones</p>

            <div className="certifications-grid flex justify-between md:max-w-4xl md:w-full">

              <img className="w-30 h-30 md:w-50 md:h-50 transition-all duration-300 ease-in hover:scale-105" src="/iso1.png" alt="" />

              <img className="w-45 h-45 md:w-70 md:h-70 transition-all duration-300 ease-in hover:scale-105" src="/iso1.png" alt="" />

              <img className="w-30 h-30 md:w-50 md:h-50 transition-all duration-300 ease-in hover:scale-105" src="/iso1.png" alt="" />

            </div>

            <div className="delivery bg-episrubi-secondary/80 max-w-5xl p-5 rounded-2xl shadow-md  transition-all duration-300 ease-in hover:bg-episrubi-background">

              <h3 className="font-bespoke-700 md:text-4xl text-2xl">Un sitema de entrega al cliente rápido y seguro</h3>

              <div className="delivery-section flex flex-col md:flex-row justify-center items-center gap-5 mt-5">

                <div className="flex flex-col justify-center items-center">

                  <RiFileListLine size={40} />

                  <h4 className="font-bespoke-700 text-xl">Preparación</h4>

                  <p className="font-bespoke-400 text-md">Comprobamos cada talla y certificación de seguridad</p>

                </div>

                <div className="flex flex-col justify-center items-center">

                  <FaArrowRight size={30} />

                </div>

                <div className="flex flex-col justify-center items-center">

                  <HiOutlineTruck size={40} />

                  <h4 className="font-bespoke-700 text-xl">Envío o Recogida</h4>
                  
                  <p className="font-bespoke-400 text-md">Tú eliges: entrega rápida o recogida en tienda</p>
                  
                </div>

                 <div className="flex flex-col justify-center items-center">

                  <FaArrowRight size={30} />

                </div>

                <div className="flex flex-col justify-center items-center">

                  <LuPackageCheck size={40} />

                  <h4 className="font-bespoke-700 text-xl">Recepción</h4>

                  <p className="font-bespoke-400 text-md">Recibes tus equipos listos para proteger a tu equipo</p>

                </div>
              </div>

            </div>
            
          </section>

          {/*END TRUST SECTION*/}

          {/*PRODUCTS SECTION*/}

          <section className="products flex flex-col items-center text-center text-white py-25 gap-3">
            
            <h2 className="font-bespoke-700 md:text-5xl text-xl" >Encuentra lo que necesitas</h2>
            
            <div className="category-grid">

              <div className="product-container bg-episrubi-primary">

                  {/* <img src="" alt=""/> */}

                  <h3>CALZADO</h3>

                  <p></p>

                  <button></button>

              </div>

            </div>
            
            <div className="custom-request-banner ">

              <h3 className="font-bespoke-700 md:text-4xl text-md">¿No encuentras lo que buscas?</h3>

              <button className="font-bespoke-700 bg-episrubi-primary md:p-4 p-2 rounded-xs hover:bg-episrubi-accent md:text-2xl mt-5">
                Preguntar ahora
              </button>

            </div>

          </section>

          {/*END PRODUCTS SECTION*/}

          {/*VALUE-ADDED SECTION*/}

          <section className="value-added flex flex-col items-center text-center rounded-2xl bg-episrubi-accent text-white py-25 gap-3 md:m-20 m-5">

            <h2 className="font-bespoke-700 md:text-5xl text-xl">Prendas laborales adaptadas a tu negocio</h2>

            <p className="font-bespoke-400 md:text-2xl text-md">¿Necesitas que el vestuario lleve el logo o colores de tu empresa?¿Otras adaptaciones?</p>

            <p className="font-bespoke-400 md:text-2xl text-md">EpisRubi lleva años ofreciendo un servicio de personalización de calidad adaptado a las necesidades de cada empresa</p>

          </section>

          {/*END VALUE-ADDED SECTION*/}

          {/*WHY-US SECTION*/}

          <section className="why-us flex flex-col items-center text-center text-white py-25 gap-3">

            <h2 className="font-bespoke-700 md:text-5xl text-xl">¿Por qué elegirnos?</h2>

            <p className="font-bespoke-400 md:text-2xl text-md">En EpisRubi llevamos más de 18 años ofreciendo en Barcelona a empresas un vestuario laboral personalizado de calidad y estrictamnete homologado junto con un asesoramiento experto</p>

            <div className="features-section">

            </div>

          </section>

          {/*END WHY-US SECTION*/}

          {/*SOCIAL-PROOF SECTION*/}

          <section className="social-proof display flex flex-col items-center text-center text-white py-25 gap-3">

            <h2 className="font-bespoke-700 md:text-5xl text-xl">Marcas de calidad</h2>

            <p className="font-bespoke-400 md:text-2xl text-md">En EpisRubi nos preocupamos de ofrecer a las empresas las mejores marcas de vestuario laboral</p>

            <div className="logo-cloud">

            </div>

            <div className="client-results">
                
              <h3 className="font-bespoke-700 md:text-4xl text-md">Pedidos recientemente</h3>
              
              <p className="font-bespoke-400 md:text-2xl text-md">Una galería con ropa laboral encargada por clientes reales</p>

              <div className="case-studies-grid">

              </div>

            </div>

          </section>

          {/*END SOCIAL-PROOF SECTION*/}

          {/*QUOTE-FORM SECTION*/}

          <section className="quote-form flex flex-col items-center text-center text-white py-25 gap-3">
          
            <h2 className="font-bespoke-700 md:text-5xl text-xl">Pide presupuesto</h2>

            <p className="font-bespoke-400 md:text-2xl text-md">Rellena este formulario rápido y te llamaremos hoy mismo</p>

            <div className="quote-form-container rounded-2xl bg-episrubi-secondary p-5">

              <form action="" method="post" className="flex flex-col md:text-xl gap-3">

                <div className="flex flex-col">

                  <label htmlFor="client-name">Nombre empresa</label>

                  <input type="text" id="client-name" name="name" className="bg-episrubi-primary rounded-2xl"/>

                </div>

                <div className="flex flex-col">

                  <label htmlFor="client-phone">Teléfono</label>
                  
                  <input type="tel" id="client-phone" name="phone" className="bg-episrubi-primary rounded-2xl"/>

                </div>

                <div className="flex flex-col ">

                  <label htmlFor="client-phone" className="">Producto</label>
                  
                  <select id="client-product" name="product" className="bg-episrubi-primary rounded-2xl ">

                    <option value="shoes">zapatos</option>

                    <option value="uniform">uniforme</option>

                    <option value="other">otro</option>

                  </select>

                </div>

              </form>

            </div>

          </section>

          {/*END QUOTE-FORM SECTION*/}

          {/*FAQ SECTION*/}

          <section className="faq-section flex flex-col items-center text-center text-white py-25 gap-3">

            <h2 className="font-bespoke-700 md:text-5xl text-xl">Dudas frecuentes de los clientes</h2>

            <div className="faqs">

              <details>

                <summary className="md:text-xl" >¿Cómo sé si los EPIs que vendéis cumplen la normativa?</summary>

                <p>Trabajamos con EPIs con marcado CE, folleto informativo en castellano y, cuando aplica, Declaración UE de conformidad o acceso a ella. Si necesitas validar una referencia antes de comprar, te facilitamos la documentación técnica correspondiente</p>

              </details>

              <details>

                <summary className="md:text-xl">¿Me podéis ayudar a elegir el EPI correcto para mi actividad?</summary>

                <p>Sí. Te asesoramos según actividad, riesgo, entorno de trabajo y tiempo de uso, para que no compres “por catálogo” algo que luego no sea adecuado</p>

              </details>

              <details>

                <summary className="md:text-xl">¿Cómo os aseguráis de que la talla y el ajuste sean correctos?</summary>

                <p>Te ayudamos a escoger la talla, ajuste y compatibilidad entre equipos para que el EPI proteja bien y sea cómodo de usar</p>

              </details>

              <details>

                <summary className="md:text-xl">¿Qué documentación me entregáis con el pedido?</summary>

                <p>Con el pedido facilitamos la información necesaria para que la empresa pueda comprar con seguridad: identificación del producto, documentación técnica disponible y, cuando corresponda, la declaración UE de conformidad junto con el resto de documentación exigible o la vía para acceder a ella</p>

              </details>

              <details>

                <summary className="md:text-xl">¿Podéis personalizar prendas o poner nuestro logo?</summary>

                <p>Sí, en vestuario laboral y prendas corporativas. En cambio, cuando se trata de EPIs certificados, la personalización o modificación no debe comprometer el ajuste, la protección ni la certificación del producto</p>

              </details>

              <details>

                <summary className="md:text-xl">¿Cuánto tardáis en dar respuesta o presupuesto?</summary>

                <p>Te confirmamos disponibilidad, plazo y alternativa equivalente antes de cerrar el pedido</p>

              </details>

            </div>

            <div className="custom-question-banner bg-episrubi-secondary p-5 rounded-2xl">

              <h3 className="font-bespoke-700 md:text-4xl text-md">¿Tienes más dudas?</h3>

              <button className="font-bespoke-700 bg-episrubi-background md:p-4 p-2 rounded-xs hover:bg-episrubi-accent md:text-2xl mt-5">
                Preguntar ahora
              </button>

            </div>

          </section>

          {/*END FAQ SECTION*/}

          {/*CTA-WHASTAPP SECTION*/}

          <section className="cta-whatsapp value-added flex flex-col items-center text-center rounded-2xl bg-episrubi-accent text-white py-25 gap-3 md:m-20 m-5">
          
            <h2 className="font-bespoke-700 md:text-5xl text-xl">¿Necesitas hacer un encargo?</h2>

            <p className="font-bespoke-400 md:text-2xl text-md">Contactanos por WhatsApp y tendras tu presupuesto hoy mismo</p>

            <button className="font-bespoke-700 bg-episrubi-primary md:p-4 p-2 rounded-xs hover:bg-episrubi-secondary md:text-2xl mt-5">
              Obtener presupuesto
            </button>

          </section>

          {/*END CTA-WHASTAPP SECTION*/}

        </main>
  )
}