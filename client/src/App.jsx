import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Homepage from './components/Homepage/Homepage'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import Register from './components/Login/Register'
import ProductDetail from './components/ProductDetail/ProductDetail'
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
          {/* product detail in /shop  */}
          <Route exact path="/shop" element={<ProductDetail/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App
