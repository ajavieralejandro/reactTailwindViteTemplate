import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


const About = ()=>{
    const position = [-38.717824,-62.263804]
    return(
        <div>
       
        <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Nuestro Espacio</h1>
            
            <div className="mt-2">
                <span className="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
                <span className="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
                <span className="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
            </div>                <p className="mb-4">Atendemos en un consultorio en Alsina 95,piso 12,oficina 8, ubicado en el centro de Bahía Blanca frente a la plaza Rivadavia, con acceso para discapacitados.  </p>
                <MapContainer
                style={{ height: "50vh", width: "100%" }}
        
                 center={position} zoom={16} scrollWheelZoom={false}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </MapContainer>
              
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
                <img className="w-full rounded-lg" src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/83fc0821-629d-480d-dc95-f374c3bf8f00/public" alt="office content 1" />
                <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/8463a495-44a3-461f-6431-7151a37b8300/public" alt="office content 2" />
                <img className="w-full rounded-lg" src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/53769664-1d97-4647-4bc6-9e626fb17b00/public" alt="office content 1" />
                <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/9e321814-fc63-4fe2-b7d1-3c24396f5200/public" alt="office content 2" />
            </div>
        </div>
    </section>
        </div>
    )
}

export default About;