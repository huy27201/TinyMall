import './App.css'
import Homepage from './components/Homepage/Homepage'
import './style/style.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/login">
            
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App
