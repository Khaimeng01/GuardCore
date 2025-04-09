import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Career from './pages/Career'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Info from './pages/Info'

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/services' element={<Services />} />
				<Route path='/career' element={<Career />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/info' element={<Info />} />

				<Route path='/gallery' element={<Gallery />} />
			</Routes>
		</>
	)
}

export default App
