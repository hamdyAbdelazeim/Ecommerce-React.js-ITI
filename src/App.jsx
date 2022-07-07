import Product from './pages/Product'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Error from './pages/Error'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Announcement from './components/Announcement'

const App = () => {
  return (
    <Router>
      <Announcement />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Product />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/ProductList' element={<ProductList />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Product' element={<Product />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
