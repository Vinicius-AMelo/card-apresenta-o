import './App.css'
import Info from './components/info'
import About from './components/about'
import Footer from './components/footer'

const html = document.querySelector('html')

export default function App() {

  function chageColorMode() {
    html.classList.toggle('dark-mode')
}
  return (
    <div className='main-app'>
      <div className='dark-theme'>
      <label ><input onChange={chageColorMode} type='checkbox'></input> Tema Claro</label>
      </div>
      <Info />
      <About />
      <Footer />
    </div>
  )
}


