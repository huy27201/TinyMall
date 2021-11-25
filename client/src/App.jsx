import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Homepage from './components/Homepage/Homepage'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import Register from './components/Login/Register'
import Forget from './components/Login/ForgotPass'
import Products from './components/Product/ProductList'

import './style/_reset.scss'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* <Route exact path="/" element={<Homepage />} /> */}
          <Route exact path="/" element={<Homepage />} />

          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Forget />} />
          <Route exact path="/products" element={<Products />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App
