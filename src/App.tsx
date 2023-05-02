import Hero from './components/Hero'
import Wroks from './components/Wroks'
import Contact from './components/Contact'
import Three from './components/Three'
import './style.css'

const App = () => {
    return (
        <div className='container'>
            <Hero />
            <Wroks />
            <Contact />
            <Three />
        </div>
    )
}

export default App