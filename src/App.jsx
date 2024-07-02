import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/home'
import Catalogs from './Pages/catalogs'
import Book_Clubs from './Pages/book_Clubs'
import Book_Fairs from './Pages/book_Fairs'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import NotFound from './Pages/notFound'
import SignUP from './Components/Forms/SignUP'
import LogIn from './Components/Forms/LogIn'


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='catalogs' element={<Catalogs />} />
          <Route path='book-clubs' element={<Book_Clubs />} />
          <Route path='book-fairs' element={<Book_Fairs />} />
          <Route path='signup' element={<SignUP />} />
          <Route path='logIn' element={<LogIn />} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
        <Footer />
      </Router>
   
    </div>
  )
}

export default App