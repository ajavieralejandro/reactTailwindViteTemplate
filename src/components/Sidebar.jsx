const Sidebar = () =>{
    return(
<section className="bg-white dark:bg-gray-900">
<div className="container px-6 py-10 mx-auto">
    <div className="lg:flex lg:items-center">
        <div className="w-full space-y-12 lg:w-1/2 ">
            <div>
                <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Nuestros Servicios</h1>
            
                <div className="mt-2">
                    <span className="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
                    <span className="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
                    <span className="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
                </div>
            </div>

            <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                </span>

                <div className="mt-4 md:mx-4 md:mt-0">
                    <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Audiometrías</h1>
                    
                    <p className="mt-3 text-gray-500 dark:text-gray-300">
                        Carnet de conducir profesional
                    </p>
                    <p className="mt-3 text-gray-500 dark:text-gray-300">
                    Ingresos de estudios Ejercito y Armada(FFAA)
                </p>
                <p className="mt-3 text-gray-500 dark:text-gray-300">
                Ingreso escolar
            </p>

            <p className="mt-3 text-gray-500 dark:text-gray-300">
                Reclamos laborales y certificados de discapacidad
            </p>
            <p className="mt-3 text-gray-500 dark:text-gray-300">
            Audiometrías clínicas (para médicos) 
            </p>
           
                </div>
            </div>

            <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                </span>

                <div className="mt-4 md:mx-4 md:mt-0">
                    <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Audífonos Digitales adaptados a medida</h1>

                    <p className="mt-3 text-gray-600 text-xl">
                    <span>Audífonos digitales bernafon(tecnología suiza).</span>
                    </p>
                </div>
            </div>

        </div>

        <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
            <img className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] " 
            src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/57ea54ea-3efd-41c1-d274-fd1cae076900/public" alt="" />
        </div>
    </div>

    <hr className="border-gray-200 my-12 dark:border-gray-700" />

   
</div>
</section>
    )
}

export default Sidebar;