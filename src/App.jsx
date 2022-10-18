import './App.css'
import HR from './components/heart/HR'
import SPO2 from './components/SPO2/SPO2'
import CO2 from './components/CO2/CO2'

function App() {
  return (
    <div className="App">
      <header>
        <img className='img_logo' src="./logoeppsvg.svg" alt="a" />
      </header>
      <div className='container_svg'>
        <HR />
        <SPO2 />
        <CO2 />
      </div>
    </div>
  )
}

export default App
