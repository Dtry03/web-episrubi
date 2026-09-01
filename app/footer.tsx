



const Footer = () => {


      return (

            
        <footer className="footer flex flex-col justify-center items-center md:flex-row bg-episrubi-accent p-5 gap-5">

            <div className="information-container item-hidden  flex flex-col justify-center items-center">

                <h3 className="text-center font-bespoke-800 md:text-2xl text-xl uppercase italic">EPIS RUBÍ. Viste tu trabajo, protege tu futuro </h3>


                <ul className="font-bespoke-400 contact-list flex flex-col md:flex-row text-center md:gap-5">

                    <li>Teléfono: 646 851 944</li>
                    <li>Email: episrubi@episrubi</li>
                    <li>Dirección: Avenida Estatut 28 Rubí</li>
                </ul>

                 <ul className="font-bespoke-400 schedule-list flex flex-col md:flex-row text-center md:gap-5">

                    <li>Horario</li>
                    <li>9:00 - 13:00</li>
                    <li>15:00 - 19:00</li>
                   
                </ul>



            </div>

        </footer>
      )
}


export default Footer;