import { useState } from 'react'

import Navbar from './components/navbar'
import Header from './components/header'
import Sidebar from './components/Sidebar'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import Contact from './components/Contact'
import About from './components/About'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar />   
        <Header />    
        <Sidebar />
        <About />
        <Gallery />
        <div className='bg-slate-200'>
        <Contact />

        <Footer />

        </div>
    </>
  )
}

export default App
