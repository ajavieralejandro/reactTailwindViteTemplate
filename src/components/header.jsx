const Header = () =>{
    return(
        <section className="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
        <section className="bg-black text-white relative px-10 md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1 ">
            <img className="xl:max-w-6xl" src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/fe9e55d1-4ddc-4b1b-6d24-97d9a7699200/public" alt="" />
            <div className="content  p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-48 right-5">
                <div className="flex justify-between font-bold text-sm">
                </div>
                <h2 className="text-3xl font-semibold mt-4 md:mt-10">Audiometrias de Carnet de conducir y Audifonos Digitales Bahia Blanca </h2>
                <p className="my-3 text-justify font-medium leading-relaxed">Audiometrías de Carnet de conducir y trámites (aptitud de estudios y deportes) de 8:30hs a 11:00hs por orden de llegada. </p>
                <p className="my-3 text-justify font-medium  leading-relaxed">Pruebas de audífonos y otros estudios auditivos con turnos programados.  </p>

                <a href="https://wa.me/+5492914258612" className="mt-2 md:mt-5 p-3 px-5 bg-green-500 text-white font-bold text-sm hover:bg-green-800">Contactanos en Whatsapp</a>
                <p className="my-3 text-justify font-medium leading-relaxed">Fga.Pelendir Andrea </p>

            </div>
        </section>
    </section>
    )
}

export default Header;