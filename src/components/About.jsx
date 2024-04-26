import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


const About = ()=>{
    const position = [-38.717824,-62.263804]
    return(
        <div>
       
        <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Nuestro Espacio</h2>
                <p className="mb-4">Atendemos en un consultorio en Alsina 95,piso 12,oficina 8, ubicado en el centro de Bahía Blanca frente a la plaza Rivadavia, con acceso para discapacitados.  </p>
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
                <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/9e321814-fc63-4fe2-b7d1-3c24396f5200/public" alt="office content 2" />
            </div>
        </div>
    </section>
        </div>
    )
}

export default About;